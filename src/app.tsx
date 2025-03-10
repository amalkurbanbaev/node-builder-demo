import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { ZodError } from "zod";

import { ThemeProvider } from "./components/providers/theme-provider";
import { routeTree } from "./generated/@tanstack/routes.gen";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error instanceof ZodError) {
          return false;
        }

        return failureCount < 3;
      },
    },
  },
});

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"], // Pass your initial url
});

const router = createRouter({
  routeTree,
  history: memoryHistory,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  defaultNotFoundComponent: () => (
    <div className="flex h-full w-full items-center justify-center">Страница не найдена</div>
  ),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  return (
    <RouterProvider
      router={router}
      context={{
        auth: undefined,
      }}
    />
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="ui-dark-mode">
        <InnerApp />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
