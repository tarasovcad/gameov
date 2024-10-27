"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {DatePickerWithPresets} from "@/components/ui/datepicker";
import TagInput from "@/components/admin/TagInput";
import {DateInput} from "@nextui-org/date-input";
import EditorInput from "@/components/admin/posts/EditorInput";
import {CircleX, FilePen, Plus, Save} from "lucide-react";
import {CalendarDate} from "@internationalized/date";

import CustomInputLabel from "@/components/admin/posts/CustomInputLabel";
import {FAQList, RequirementItem, SystemRequiments} from "@/types/postProps";
import {
  gameGenres,
  initialFaqList,
  interfaceLanguageList,
  platformList,
  voiceLanguageList,
} from "@/data/postData";
import {Textarea} from "@/components/ui/textarea";
import AccordionPostInuts from "@/components/admin/posts/AccordionPostInuts";
import DropZone from "@/components/ui/DropZone";
import ImageDropZone from "@/components/admin/posts/ImageDropZone";
import {ImageFile} from "@/types/types";

const Page = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [tags, setTags] = useState<string[]>([]);
  const [platform, setPlatform] = useState<string[]>([]);
  const [interfaceLanguage, setInterfaceLanguage] = useState<string[]>([]);
  const [voiceLanguage, setVoiceLanguage] = useState<string[]>([]);
  const [faqList, setFaqList] = useState<FAQList>(initialFaqList);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [systemRequirements, setSystemRequirements] =
    useState<SystemRequiments>({
      minSystemRequirement: [
        {OS: ""},
        {CPU: ""},
        {RAM: ""},
        {GPU: ""},
        {DirectX: ""},
        {Storage: ""},
      ],
      recommendedSystemRequirement: [
        {OS: ""},
        {CPU: ""},
        {RAM: ""},
        {GPU: ""},
        {DirectX: ""},
        {Storage: ""},
      ],
    });

  return (
    <div className="max-w-[700px] w-full mb-[100px]">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold">Create a Post</h1>
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

      <form action="" className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Title" />
          <Input placeholder="Title " className="rounded-sm bg-[#171718]" />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Description" />
          <EditorInput />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Slug" />
          <div className="flex gap-3">
            <Input placeholder="Slug" className="rounded-sm bg-[#171718]" />
            <Button variant="default" className="rounded-sm text-[13px] px-5">
              Generate
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Date" />
          <div className="flex gap-3">
            <DatePickerWithPresets date={date} setDate={setDate} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Download Link" />
          <Input
            placeholder="Download Link"
            className="rounded-sm bg-[#171718]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Tags" />
          <TagInput
            tags={tags}
            setTags={setTags}
            suggestions={gameGenres}
            placeholder="Tags"
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <CustomInputLabel label="App version" required={false} />
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
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Platforms" required={false} />
          <TagInput
            tags={platform}
            setTags={setPlatform}
            suggestions={platformList}
            placeholder="Platforms"
          />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Publisher of app" required={false} />
          <Input
            placeholder="Publisher of app"
            className="rounded-sm bg-[#171718]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Released date of app" required={false} />
          <DateInput
            variant={"bordered"}
            className="rounded-sm bg-[#171718] "
            radius="sm"
            placeholderValue={new CalendarDate(1995, 11, 6)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Interface language" required={false} />
          <TagInput
            tags={interfaceLanguage}
            setTags={setInterfaceLanguage}
            suggestions={interfaceLanguageList}
            placeholder="Interface language"
          />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Voice language" required={false} />
          <TagInput
            tags={voiceLanguage}
            setTags={setVoiceLanguage}
            suggestions={voiceLanguageList}
            placeholder="Voice language"
          />
        </div>
        <div className="flex flex-col gap-3">
          <AccordionPostInuts
            faqList={faqList}
            setFaqList={setFaqList}
            systemRequirements={systemRequirements}
            setSystemRequirements={setSystemRequirements}
          />
        </div>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Images" />
          <ImageDropZone images={images} setImages={setImages} />
        </div>
      </form>
    </div>
  );
};

export default Page;
