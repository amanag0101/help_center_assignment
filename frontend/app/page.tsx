"use client";

import Input from "@/components/ui/input";
import { SectionCard } from "@/components/ui/section-card";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="bg-[#dadbf0] py-12 flex flex-col gap-4 items-center">
        <h1>How can we help ?</h1>
        <Input
          className="border border-gray-500 w-[80%] md:w-[50%] p-2"
          name="search"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 p-4 md:py-20 md:px-24">
        <SectionCard
          title="Branches"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
        />

        <SectionCard
          title="Branches"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
        />

        <SectionCard
          title="Branches"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
        />

        <SectionCard
          title="Branches"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
        />

        <SectionCard
          title="Branches"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
        />

        <SectionCard
          title="Branches"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
        />
      </div>
    </Fragment>
  );
}
