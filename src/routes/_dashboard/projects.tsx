import { createFileRoute } from "@tanstack/react-router";

import DashboardView from "@/views/dashboard/dashboard-view";

export const Route = createFileRoute("/_dashboard/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardView />;
}
