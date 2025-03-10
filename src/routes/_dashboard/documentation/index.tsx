import { createFileRoute } from "@tanstack/react-router";

import DocumentationView from "@/views/documentation/documentation-view";

export const Route = createFileRoute("/_dashboard/documentation/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DocumentationView />;
}
