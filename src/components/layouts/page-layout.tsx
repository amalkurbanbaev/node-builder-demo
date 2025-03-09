import { ComponentPropsWithoutRef } from "react";

import { CatchBoundary, Link, useRouter } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

import { UserMenu } from "./shared/user-menu";
import SidebarComponent from "./sidebar";

const LayoutRoot = (props: ComponentPropsWithoutRef<"main">) => {
  return <div {...props} className={cn("flex h-screen flex-col", props.className)} />;
};

const Header = (props: ComponentPropsWithoutRef<"header">) => {
  return (
    <header {...props} className={cn("border-b bg-white", props.className)}>
      <nav className="container flex h-16 items-center justify-between gap-x-16">
        <Link to="/" className="flex items-center gap-x-2">
          <span className="text-2xl font-bold">Demo Node Builder</span>
        </Link>

        <UserMenu />
      </nav>
    </header>
  );
};

const Content = (props: ComponentPropsWithoutRef<"section">) => {
  const router = useRouter();

  return (
    <main {...props} className={cn("container relative flex grow flex-col py-8", props.className)}>
      <CatchBoundary
        getResetKey={() => router.state.location.pathname}
        onCatch={(err) => {
          console.error(err);
        }}
        errorComponent={() => <div>error</div>}
      >
        {props.children}
      </CatchBoundary>
    </main>
  );
};

const Sidebar = (props: ComponentPropsWithoutRef<"aside">) => {
  return (
    <aside {...props} className={cn("border-b bg-white", props.className)}>
      <SidebarComponent />
    </aside>
  );
};

const Title = (props: ComponentPropsWithoutRef<"h1">) => {
  return <h1 {...props} className={cn("mb-8 text-3xl font-semibold", props.className)} />;
};

export const PageLayout = Object.assign(LayoutRoot, {
  Header,
  Content,
  Title,
  Sidebar,
});
