"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {InputLabel} from "@/components/ui/InputLabel";
import {Textarea} from "@/components/ui/textarea";
import React, {useState} from "react";
import {DatePickerWithPresets} from "@/components/ui/datepicker";
import TagInput from "@/components/admin/TagInput";

import EditorInput from "@/components/admin/posts/EditorInput";
import {CircleX, FilePen, Save} from "lucide-react";
const Page = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [genres, setGenres] = useState<string[]>([]);
  return (
    <div className="max-w-[700px]  w-full">
      <div className="flex justify-between ">
        <h1 className="text-3xl font-bold">Create a Post</h1>
        <div className="flex gap-2">
          <Button variant="ghost" className="rounded-sm px-5">
            <CircleX />
            Clear
          </Button>
          <Button variant="secondary" className="rounded-sm px-5 gap-1.5">
            <FilePen size={20} />
            Save as Draft
          </Button>
          <Button variant="default" className="rounded-sm px-5 gap-1.5">
            <Save size={20} />
            Create Post
          </Button>
        </div>
      </div>
      <form action="" className=" mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <InputLabel label="Title" />
          <Input placeholder="Title" className="rounded-sm bg-[#171718]" />
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel label="Description" />
          <EditorInput />
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel label="Slug" />
          <div className="flex gap-3">
            <Input placeholder="Slug" className="rounded-sm bg-[#171718]" />
            <Button variant="default" className="rounded-sm text-[13px] px-5">
              Generate
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
        <div className="flex flex-col gap-3 ">
          <InputLabel label="App version" />
          <div className="relative">
            <Input
              placeholder="16.124.0"
              className="rounded-sm bg-[#171718] pl-5"
            />
            <span className="text-[15px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-3.5 text-muted-foreground">
              v
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
