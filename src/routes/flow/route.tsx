import { createFileRoute, Outlet } from "@tanstack/react-router";

import { FlowLayout } from "@/components/layouts/flow-layout";

export const Route = createFileRoute("/flow")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <FlowLayout>
      <FlowLayout.Content>
        <Outlet />
      </FlowLayout.Content>
    </FlowLayout>
  );
}
