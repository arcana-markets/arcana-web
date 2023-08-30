"use client";
import dynamic from "next/dynamic";

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
      <NvigationComponent />
      <SceneComponent />
    </>
  );
}
