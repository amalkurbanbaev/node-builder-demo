"use client";

import { ComponentPropsWithoutRef } from "react";

import { useDraggable } from "@dnd-kit/core";
import { ChevronRight } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import type { LucideIcon } from "lucide-react";

export function NavFlow({
  items,
}: {
  items: {
    title: string;
    icon: LucideIcon;
    items?: {
      title: string;
      icon: LucideIcon;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible defaultOpen key={item.title} asChild>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title}>
                <div>
                  <item.icon />
                  <span>{item.title}</span>
                </div>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarNode key={subItem.title} id={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <div>
                              <subItem.icon />
                              <span>{subItem.title}</span>
                            </div>
                          </SidebarMenuSubButton>
                        </SidebarNode>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

const SidebarNode = (props: ComponentPropsWithoutRef<"div"> & { id: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: { type: props.id },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <SidebarMenuSubItem ref={setNodeRef} {...listeners} {...attributes} className="flex cursor-grab" style={style}>
      {props.children}
    </SidebarMenuSubItem>
  );
};
