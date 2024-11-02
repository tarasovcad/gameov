"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {DatePickerWithPresets} from "@/components/ui/datepicker";
import TagInput from "@/components/admin/TagInput";
import {DateInput} from "@nextui-org/date-input";
import EditorInput from "@/components/admin/posts/EditorInput";
import {CircleX, FilePen, Loader2, Save} from "lucide-react";
import {CalendarDate} from "@internationalized/date";
import debounce from "lodash/debounce";
import CustomInputLabel from "@/components/admin/posts/CustomInputLabel";
import {FAQList, SystemRequiments} from "@/types/postProps";
import {
  gameGenres,
  initialFaqList,
  interfaceLanguageList,
  platformList,
  voiceLanguageList,
} from "@/data/postData";
import AccordionPostInuts from "@/components/admin/posts/AccordionPostInuts";
import {ImageFile} from "@/types/types";
import {FieldError, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  CreatePostData,
  createPostSchema,
} from "@/validation/adminDashboardCreatePost";
import {toast} from "sonner";
import ErrorMessage from "@/components/admin/posts/ErrorMessage";
import ImageDropZone from "@/components/admin/posts/ImageDropZone";
import {useSession} from "next-auth/react";
import {readFileAsDataURL} from "@/functions/readFileAsDataURL";
import uploadFileToS3 from "@/lib/upload/uploadFileToS3";
import Loader from "@/components/ui/Loader";
const Page = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [downloadLink, setDownloadLink] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [interfaceLanguage, setInterfaceLanguage] = useState<string[]>([]);
  const [voiceLanguage, setVoiceLanguage] = useState<string[]>([]);
  const [platform, setPlatform] = useState<string[]>([]);
  const [faqList, setFaqList] = useState<FAQList>(initialFaqList);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {data: session} = useSession();
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

  const {
    register,
    handleSubmit,
    setValue,
    trigger,

    formState: {errors, isValid},
  } = useForm<CreatePostData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      date: new Date(),
      tags: [],
      images: [],
    },
    mode: "all",
  });

  const updateTimeout = useRef<NodeJS.Timeout>();

  const handleDateChange = async (newDate: Date) => {
    setDate(newDate);
    setValue("date", newDate, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    await trigger("date");
  };

  const handleImagesChange = useCallback(
    (
      newImagesOrUpdater: ImageFile[] | ((prev: ImageFile[]) => ImageFile[]),
    ) => {
      const newImages =
        typeof newImagesOrUpdater === "function"
          ? newImagesOrUpdater(images)
          : newImagesOrUpdater;

      setImages(newImages);
      setValue("images", newImages, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      trigger("images");
    },
    [setValue, trigger, images],
  );

  const saveFormData = useCallback(() => {
    debounce(() => {
      const formData = {
        title,
        description,
        slug,
        date,
        downloadLink,
        tags,
        interfaceLanguage,
        voiceLanguage,
        platform,
        faqList,
        systemRequirements,
      };
      localStorage.setItem("postFormDataGameov", JSON.stringify(formData));
    }, 1000)();
  }, [
    title,
    description,
    slug,
    date,
    downloadLink,
    tags,
    interfaceLanguage,
    voiceLanguage,
    platform,
    faqList,
    systemRequirements,
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("postFormDataGameov");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setTitle(parsed.title || "");
      setDescription(parsed.description || "");
      setSlug(parsed.slug || "");
      setDate(new Date(parsed.date) || new Date());
      setDownloadLink(parsed.downloadLink || "");
      setTags(parsed.tags || []);
      setInterfaceLanguage(parsed.interfaceLanguage || []);
      setVoiceLanguage(parsed.voiceLanguage || []);
      setPlatform(parsed.platform || []);
      setFaqList(parsed.faqList || initialFaqList);
      setSystemRequirements(
        parsed.systemRequirements || {
          minSystemRequirement: [],
          recommendedSystemRequirement: [],
        },
      );
    }
  }, []);

  useEffect(() => {
    saveFormData();
  }, [
    title,
    description,
    slug,
    date,
    downloadLink,
    tags,
    interfaceLanguage,
    voiceLanguage,
    platform,
    faqList,
    systemRequirements,
    saveFormData,
  ]);

  const clearForm = (showTooltip: boolean = false) => {
    setTitle("");
    setDescription("");
    setSlug("");
    setDate(new Date());
    setDownloadLink("");
    setTags([]);
    setInterfaceLanguage([]);
    setVoiceLanguage([]);
    setPlatform([]);
    setFaqList(initialFaqList);
    setImages([]);
    setSystemRequirements({
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
    setValue("title", "");
    setValue("description", "");
    setValue("slug", "");
    setValue("date", new Date());
    setValue("downloadLink", "");
    setValue("tags", []);
    setValue("images", []);
    localStorage.removeItem("postFormDataGameov");
    if (showTooltip) {
      toast.success("Form cleared");
    }
  };

  const handleEditorChange = useCallback(
    (value: string) => {
      setDescription(value);

      if (updateTimeout.current) {
        clearTimeout(updateTimeout.current);
      }

      updateTimeout.current = setTimeout(() => {
        setValue("description", value, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      }, 200);
    },
    [setValue],
  );

  useEffect(() => {
    return () => {
      if (updateTimeout.current) {
        clearTimeout(updateTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    setValue("images", images, {
      shouldValidate: false,
      shouldDirty: true,
      shouldTouch: false,
    });
  }, [images, setValue]);

  const onSubmit = async () => {
    setIsLoading(true);
    const startTime = performance.now();
    try {
      const author = session?.user?.email;
      if (author) {
        const images = await uploadImages();
        console.log("Images uploaded:", images);

        // await new Promise((resolve) => setTimeout(resolve, 500));
        const endTime = performance.now();
        const timeElapsed = endTime - startTime;
        console.log(
          `Form submission took ${timeElapsed.toFixed(2)} milliseconds`,
        );
        toast.success(
          `Form submission took ${timeElapsed.toFixed(2)} milliseconds`,
        );

        setIsLoading(false);
        toast.success("Post created successfully");
        // clearForm();
      } else {
        console.log("No author found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateSlug = async (e: React.MouseEvent) => {
    e.preventDefault();
    const slug = title.replace(/\s+/g, "-").toLowerCase();
    setSlug(slug);
    setValue("slug", slug, {
      shouldValidate: false,
      shouldDirty: true,
      shouldTouch: false,
    });
  };

  const uploadImages = async () => {
    if (images.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }
    try {
      images.map(async (imageFile) => {
        try {
          const result = await readFileAsDataURL(imageFile.file);

          if (typeof result === "string") {
            const base64Data = result.split(",")[1];

            // Upload to S3
            const s3Url = await uploadFileToS3(
              imageFile.file.name,
              imageFile.file.type,
              base64Data,
              "posts",
            );

            return s3Url;
          }
          toast.error("Something went wrong. Please try again.");
          return null;
        } catch (err) {
          console.error("Error processing image:", err);
          toast.error("Something went wrong. Please try again.");
          return null;
        }
      });
    } catch (err) {
      console.error("Error in uploadImages:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      className="max-w-[700px] w-full mb-[100px]"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }}>
      {isLoading && <Loader />}

      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold">Create a Post</h1>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="rounded-sm px-5"
            onClick={(e) => {
              e.preventDefault();
              clearForm(true);
            }}>
            <CircleX />
            Clear
          </Button>
          <Button variant="secondary" className="rounded-sm px-5 gap-1.5">
            <FilePen size={20} />
            Save as Draft
          </Button>
          <Button
            // disabled={isValid ? false : true}
            type="submit"
            variant="default"
            className="rounded-sm px-5 gap-1.5">
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Save size={20} />
            )}
            Create Post
          </Button>
        </div>
      </div>

      {!isMounted ? (
        <>
          <div className="mx-auto w-full max-w-[700px] flex justify-center mt-20">
            <Loader2 className="animate-spin w-10 h-10"></Loader2>
          </div>
        </>
      ) : (
        <>
          <div className="mt-8 flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              <CustomInputLabel label="Title" />
              <div className="relative ">
                <Input
                  placeholder="Title "
                  className={`rounded-sm bg-[#171718] ${errors.title && "border-[#F31260] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none  focus:shadow-none"}`}
                  value={title}
                  {...register("title")}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <ErrorMessage error={errors.title} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <CustomInputLabel label="Description" />
              <div className="relative">
                <EditorInput
                  onChange={handleEditorChange}
                  initialContent={description}
                  error={errors.description}
                />
                <ErrorMessage error={errors.description} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <CustomInputLabel label="Slug" />
              <div className="relative">
                <div className="flex gap-3">
                  <Input
                    placeholder="Slug "
                    className={`rounded-sm bg-[#171718] ${errors.slug && "border-[#F31260] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none  focus:shadow-none"}`}
                    value={slug}
                    {...register("slug")}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                  <Button
                    variant="default"
                    className="rounded-sm text-[13px] px-5"
                    onClick={generateSlug}>
                    Generate
                  </Button>
                </div>
                <ErrorMessage error={errors.slug} />
              </div>
            </div>
            <div className="flex flex-col gap-3 relative">
              <CustomInputLabel label="Date" />
              <div className="relative">
                <DatePickerWithPresets
                  date={date}
                  setDate={handleDateChange}
                  register={register("date")}
                  error={errors.date}
                />
                <ErrorMessage error={errors.date} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <CustomInputLabel label="Download Link" />
              <div className="relative ">
                <Input
                  placeholder="Title "
                  className={`rounded-sm bg-[#171718] ${errors.downloadLink && "border-[#F31260] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none  focus:shadow-none"}`}
                  value={downloadLink}
                  {...register("downloadLink")}
                  onChange={(e) => setDownloadLink(e.target.value)}
                />
                <ErrorMessage error={errors.downloadLink} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <CustomInputLabel label="Tags" />
              <div className="relative">
                <TagInput
                  tags={tags}
                  setTags={(newTags) => {
                    setTags(newTags);
                    setValue("tags", newTags, {
                      shouldValidate: true,
                      shouldDirty: true,
                      shouldTouch: true,
                    });
                  }}
                  error={errors.tags}
                  suggestions={gameGenres}
                  placeholder="Tags"
                />
                <ErrorMessage error={errors.tags} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
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
              <div className="relative">
                <ImageDropZone
                  images={images}
                  setImages={handleImagesChange}
                  error={errors.images as FieldError}
                />
                <ErrorMessage error={errors.images} />
              </div>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default Page;
