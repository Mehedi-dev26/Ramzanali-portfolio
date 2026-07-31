import { ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const AmbientScene = lazy(() => import("@/components/site/AmbientScene"));

export function AmbientBackground() {
  return (
    <ClientOnly fallback={null}>
      <Suspense fallback={null}>
        <AmbientScene />
      </Suspense>
    </ClientOnly>
  );
}
