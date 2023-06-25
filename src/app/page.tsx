"use client";

import NavBar from "@/components/NavBar";

import HomeSec from "@/components/sections/HomeSec";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <HomeSec />
      </main>
    </>
  );
}
