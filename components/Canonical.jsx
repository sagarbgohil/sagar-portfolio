"use client";

import { usePathname } from "next/navigation";

import { siteData } from "@/lib/constants";

const Canonical = () => {
  const pathname = usePathname();
  const canonicalUrl = `${siteData.baseUrl}${pathname === "/" ? "" : pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
};

export default Canonical;
