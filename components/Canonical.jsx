"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

import { siteData } from "@/lib/constants";

const Canonical = () => {
  const pathname = usePathname();
  const canonicalUrl = `${siteData.baseUrl}${pathname === "/" ? "" : pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default Canonical;
