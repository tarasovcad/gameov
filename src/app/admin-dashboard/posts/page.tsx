"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {InputLabel} from "@/components/ui/InputLabel";
import {Textarea} from "@/components/ui/textarea";
import React, {useState} from "react";
import {DatePickerWithPresets} from "@/components/ui/datepicker";
import TagInput from "@/components/admin/TagInput";
const Page = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [genres, setGenres] = useState<string[]>([]);
  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Button variant="default" className="rounded-sm">
          Create Post
        </Button>
      </div>
      <form
        action=""
        className="max-w-[700px] mx-auto mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <InputLabel label="Title" />
          <Input placeholder="Title" className="rounded-sm bg-[#171718]" />
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel label="Description" />
          <Textarea
            placeholder="Description"
            className="rounded-sm bg-[#171718]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel label="Slug" />
          <div className="flex gap-3">
            <Input placeholder="Slug" className="rounded-sm bg-[#171718]" />
            <Button variant="default" className="rounded-sm text-[13px]">
              Generate Slug
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel label="Date" />
          <div className="flex gap-3">
            <DatePickerWithPresets date={date} setDate={setDate} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel label="Download Link" />
          <Input
            placeholder="Download Link"
            className="rounded-sm bg-[#171718]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel label="Tags" />
          <TagInput tags={genres} setTags={setGenres} />
        </div>
      </form>
    </div>
  );
};

export default Page;
