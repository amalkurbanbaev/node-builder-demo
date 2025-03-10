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
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { FLOW_SIDEBAR_DATA } from "@/constants/flow-sidebar-data";

import type * as React from "react";

import { NavFlow } from "./navs/nav-flow";
import { SearchForm } from "./navs/search-form";

export function FlowSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" className="md:flex" {...props}>
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

            <SidebarSeparator className="my-2" />
          </SidebarMenuItem>
        </SidebarMenu>

        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavFlow items={FLOW_SIDEBAR_DATA.components} />
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
