import { createFileRoute } from "@tanstack/react-router";

import FlowView from "@/views/flow/flow-view";

export const Route = createFileRoute("/flow/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FlowView />;
}
