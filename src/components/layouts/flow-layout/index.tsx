import { ComponentPropsWithoutRef } from "react";

import { ReactFlowProvider } from "@xyflow/react";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { DndProvider } from "./components/dnd-provider";
import { FlowSidebar } from "./flow-sidebar";

const FlowLayoutRoot = (props: ComponentPropsWithoutRef<"main">) => {
  return <div {...props} className={cn("flex h-screen flex-col", props.className)} />;
};

const Content = (props: ComponentPropsWithoutRef<"section">) => {
  return (
    <ReactFlowProvider>
      <SidebarProvider defaultOpen={true}>
        <DndProvider>
          {/* здесь рендерится sidebar с компонентами */}
          <FlowSidebar />

          {/* здесь рендерится node-builder доска от react-flow */}
          <SidebarInset className="overflow-hidden">
            <div className="flex flex-1 flex-col pt-0">
              <div className="bg-background absolute left-4 top-4 z-50 flex items-center gap-2 rounded-lg p-2">
                <SidebarTrigger className="cursor-pointer" />
              </div>

              <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">{props.children}</div>
            </div>
          </SidebarInset>
        </DndProvider>
      </SidebarProvider>
    </ReactFlowProvider>
  );
};

export const FlowLayout = Object.assign(FlowLayoutRoot, {
  Content,
});
