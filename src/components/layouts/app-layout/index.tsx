import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Separator } from "../../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

const LayoutRoot = (props: ComponentPropsWithoutRef<"main">) => {
  return <div {...props} className={cn("flex h-screen flex-col", props.className)} />;
};

const Content = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4 w-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl p-4 md:min-h-min">{props.children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export const AppLayout = Object.assign(LayoutRoot, {
  Content,
});
