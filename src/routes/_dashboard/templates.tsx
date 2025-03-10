import { createFileRoute } from "@tanstack/react-router";

import TemplatesView from "@/views/dashboard/templates";

export const Route = createFileRoute("/_dashboard/templates")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TemplatesView />;
}
