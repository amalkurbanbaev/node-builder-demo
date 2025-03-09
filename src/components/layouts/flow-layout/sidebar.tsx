"use client";

import { Link } from "@tanstack/react-router";
import { PlusIcon, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_FLOW_DATA } from "@/constants/sidebar-flow-data";

import type * as React from "react";

import { NavFlow } from "./nav-flow";

export function FlowSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" className="md:flex" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Workflow className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Node Builder</span>
                  <span className="truncate text-xs">Demo Project</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavFlow items={SIDEBAR_FLOW_DATA.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Button>
          <PlusIcon />
          Создать компонент
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
