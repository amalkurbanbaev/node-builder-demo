import { createFileRoute } from "@tanstack/react-router";

import DashboardView from "../views/dashboard-view";

export const Route = createFileRoute("/")({
  component: DashboardView,
});
