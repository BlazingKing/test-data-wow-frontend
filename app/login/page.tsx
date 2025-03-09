"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function Loginpage() {
  return (
    <main className="w-full h-screen bg-wow-green-500 flex flex-col-reverse lg:flex-row items-center">
      {/* Left Side (Form Section) */}
      <section className="w-full flex items-center justify-center p-8">
        <div className="flex flex-col gap-8 max-w-md">
          <h1 className="text-wow-white text-3xl text-center lg:text-left">
            Sign in
          </h1>
          <div className="flex flex-col gap-5">
            <Input
              placeholder="Username"
              className="lg:w-[384px] w-[343px] h-10 rounded-[8px] bg-wow-white text-wow-text text-base focus-visible:ring-0 placeholder:text-wow-gray-100"
            />
            <Button
              variant={null}
              className="bg-wow-success lg:w-[384px] w-[343px] h-10 rounded-[8px] text-wow-white text-sm"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Right Side (Image Section) */}
      <section className="w-full h-full bg-wow-green-300 flex flex-col items-center justify-center gap-6 lg:rounded-l-[36px] rounded-b-[36px] p-6">
        <Image
          src="/notebook_with_pencil_highlighter_pen_and_papers.png"
          alt="login"
          width={300}
          height={230}
          className="object-contain"
        />
        <p className="text-wow-white text-3xl font-semibold">a Board</p>
      </section>
    </main>
  );
}
