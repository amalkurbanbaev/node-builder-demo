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
      <SidebarInset className="overflow-clip">
        <div className="flex flex-1 flex-col pt-0">
          <div className="bg-background absolute left-4 top-4 z-50 flex items-center gap-2 rounded-lg p-2">
            <SidebarTrigger className="cursor-pointer" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">{props.children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export const FlowLayout = Object.assign(FlowLayoutRoot, {
  Content,
});
