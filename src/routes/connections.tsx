import { createFileRoute } from "@tanstack/react-router";

import ConnectionsView from "@/views/connections-view";

export const Route = createFileRoute("/connections")({
  component: ConnectionsView,
});
