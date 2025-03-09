import { createFileRoute } from "@tanstack/react-router";

import SettingsGeneralView from "@/views/settings/general";

export const Route = createFileRoute("/settings/general")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SettingsGeneralView />;
}
