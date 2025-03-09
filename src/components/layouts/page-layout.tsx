import { ComponentPropsWithoutRef } from "react";

import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "./shared/app-sidebar";
import { UserMenu } from "./shared/user-menu";

const LayoutRoot = (props: ComponentPropsWithoutRef<"main">) => {
  return <div {...props} className={cn("flex h-screen flex-col", props.className)} />;
};

const Header = (props: ComponentPropsWithoutRef<"header">) => {
  return (
    <header {...props} className={cn("border-b bg-white", props.className)}>
      <nav className="flex h-16 items-center justify-between gap-x-16">
        <Link to="/" className="flex items-center gap-x-2">
          <span className="text-2xl font-bold">Demo Node Builder</span>
        </Link>

        <UserMenu />
      </nav>
    </header>
  );
};

const Content = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            123
            <Separator orientation="vertical" className="bg-destructive mr-2 h-4 w-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 overflow-clip rounded-xl p-4 md:min-h-min">{props.children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export const PageLayout = Object.assign(LayoutRoot, {
  Header,
  Content,
});
