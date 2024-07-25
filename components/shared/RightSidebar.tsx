import React from "react";
import { popularTags, rightSidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar dar:shadow-none sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 max-xl:hidden">
      <div className="flex flex-col gap-6">
        <h3 className="text-dark200_light900 h3-bold">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {rightSidebarLinks.map((question) => {
            return (
              <Link
                key={question._id}
                href={`/questions/${question._id}`}
                className="flex items-start justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.question}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  height={20}
                  width={20}
                  alt="chevron right"
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-dark200_light900 h3-bold">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
