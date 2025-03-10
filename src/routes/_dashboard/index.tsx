import { createFileRoute } from "@tanstack/react-router";

import DashboardView from "@/views/dashboard/dashboard-view";

export const Route = createFileRoute("/_dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardView />;
}
