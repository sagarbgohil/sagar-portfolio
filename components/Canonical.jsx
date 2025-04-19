"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

const Canonical = () => {
  const router = useRouter();
  const canonicalUrl = `https://sagargohil.dev${router.asPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl.split("?")[0]} />
    </Head>
  );
};

export default Canonical;
