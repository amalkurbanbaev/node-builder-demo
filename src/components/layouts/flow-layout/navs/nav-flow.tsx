"use client";

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

import { useDnD } from "../components/dnd-provider";

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
  const [, , setDnDState] = useDnD();

  const onDragStart = (event: React.DragEvent<HTMLLIElement>, item: { title: string; icon: LucideIcon }) => {
    // Устанавливаем тип и данные ноды
    setDnDState(item.title.toLowerCase().replace(/\s+/g, "-"), {
      title: item.title,
      icon: item.icon,
    });

    // Устанавливаем данные для перетаскивания
    event.dataTransfer.setData("application/reactflow", item.title);
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = () => {
    // Сбрасываем состояние после завершения перетаскивания
    setDnDState(null, null);
  };

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
                        <SidebarMenuSubItem
                          onDragStart={(event) => onDragStart(event, subItem)}
                          onDragEnd={onDragEnd}
                          className="flex cursor-grab"
                          draggable
                          key={subItem.title}
                          id={subItem.title}
                        >
                          <SidebarMenuSubButton asChild>
                            <div>
                              <subItem.icon />
                              <span>{subItem.title}</span>
                            </div>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
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

// const SidebarNode = (props: ComponentPropsWithoutRef<"div"> & { id: string }) => {
//   // const { attributes, listeners, setNodeRef, transform } = useDraggable({
//   //   id: props.id,
//   //   data: { type: props.id },
//   // });

//   // const style = transform
//   //   ? {
//   //       transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//   //     }
//   //   : undefined;

//   return (
//     <SidebarMenuSubItem onDragStart={(event) => onDragStart(event, "default")} className="flex cursor-grab">
//       {props.children}
//     </SidebarMenuSubItem>
//   );
// };
