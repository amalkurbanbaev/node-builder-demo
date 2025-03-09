import { createRootRoute, Outlet } from "@tanstack/react-router";

import { PageLayout } from "@/components/layouts/page-layout";

export const Route = createRootRoute({
  component: () => (
    <PageLayout>
      <PageLayout.Content>
        <Outlet />
      </PageLayout.Content>
    </PageLayout>
  ),
});
