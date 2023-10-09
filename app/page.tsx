"use client";
import dynamic from "next/dynamic";
import Head from 'next/head';

const SceneComponent = dynamic(() => import("@/Components/Scene"), {
  ssr: false,
});

const NvigationComponent = dynamic(() => import("@/Components/Navbar"), {
  ssr: false,
});

const LoaderComponent = dynamic(() => import("@/Components/Loader"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* <LoaderComponent /> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NvigationComponent />
      <SceneComponent />
    </>
  );
}
