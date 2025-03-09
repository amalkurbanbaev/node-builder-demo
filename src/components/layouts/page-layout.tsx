import { ComponentPropsWithoutRef } from "react";

import { CatchBoundary, Link, useRouter } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

const LayoutRoot = (props: ComponentPropsWithoutRef<"main">) => {
  return <div {...props} className={cn("flex h-screen flex-col", props.className)} />;
};

const Header = (props: ComponentPropsWithoutRef<"header">) => {
  return (
    <header {...props} className={cn("rounded-b-4xl border-b bg-white", props.className)}>
      <nav className="container flex h-[98px] items-center justify-between gap-x-16">
        <Link to="/">Logo</Link>
        UserMenu
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

const Title = (props: ComponentPropsWithoutRef<"h1">) => {
  return <h1 {...props} className={cn("mb-8 text-3xl font-semibold", props.className)} />;
};

export const PageLayout = Object.assign(LayoutRoot, {
  Header,
  Content,
  Title,
});
