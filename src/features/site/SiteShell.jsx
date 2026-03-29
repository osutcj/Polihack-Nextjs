"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

const PREFETCH_ROUTES = ["/", "/past-edition", "/past-editions-2", "/feedback"];

export default function SiteShell({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      return undefined;
    }

    const prefetchRoutes = () => {
      PREFETCH_ROUTES.forEach((route) => {
        router.prefetch(route);
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetchRoutes, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(prefetchRoutes, 250);
    return () => window.clearTimeout(timeoutId);
  }, [isLoading, router]);

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && <Navbar />}
      {children}
    </>
  );
}
