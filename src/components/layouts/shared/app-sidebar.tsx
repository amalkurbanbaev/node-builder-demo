"use client";

import { Link } from "@tanstack/react-router";
import { BookOpen, Link2, Settings2, SquareTerminal, Workflow } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import type * as React from "react";

import { NavMain } from "../navs/nav-main";
import { NavUser } from "../navs/nav-user";

const data = {
  user: {
    name: "iwanivanov",
    email: "iwanivanov@gmail.com",
    avatar: "https://github.com/gaearon.png",
  },
  navMain: [
    {
      title: "Playground",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Create new flow",
          url: "/flow",
        },
        {
          title: "My flows",
          url: "/dashboard",
        },
        {
          title: "Store",
          url: "/store",
        },
      ],
    },
    {
      title: "Connections",
      url: "/connections",
      icon: Link2,
    },
    {
      title: "Documentation",
      url: "/documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/documentation",
        },
        {
          title: "Get Started",
          url: "/documentation",
        },
        {
          title: "Tutorials",
          url: "/documentation",
        },
        {
          title: "Changelog",
          url: "/documentation",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
