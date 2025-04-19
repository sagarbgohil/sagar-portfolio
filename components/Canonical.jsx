"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

const Canonical = () => {
  const pathName = usePathname();
  const canonicalUrl = `https://sagargohil.dev${pathName}`;
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl.split("?")[0]} />
    </Head>
  );
};

export default Canonical;
