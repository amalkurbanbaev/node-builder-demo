import { ComponentPropsWithoutRef } from "react";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { FlowSidebar } from "./flow-sidebar";

const FlowLayoutRoot = (props: ComponentPropsWithoutRef<"main">) => {
  return <div {...props} className={cn("flex h-screen flex-col", props.className)} />;
};

const Content = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <FlowSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl p-4 md:min-h-min">{props.children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export const FlowLayout = Object.assign(FlowLayoutRoot, {
  Content,
});
