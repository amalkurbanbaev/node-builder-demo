import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AppLayout } from "@/components/layouts/app-layout";

export const Route = createFileRoute("/_dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <AppLayout.Content>
        <Outlet />
      </AppLayout.Content>
    </AppLayout>
  );
}
