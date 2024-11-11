"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {DatePickerWithPresets} from "@/components/ui/datepicker";
import TagInput from "@/components/admin/TagInput";
import {DateInput} from "@nextui-org/date-input";
import EditorInput from "@/components/admin/posts/EditorInput";
import {
  CircleX,
  Code,
  Copy,
  FileJson,
  FilePen,
  Loader2,
  Save,
} from "lucide-react";
import {CalendarDate} from "@internationalized/date";
import debounce from "lodash/debounce";
import CustomInputLabel from "@/components/admin/posts/CustomInputLabel";
import {FAQList, SystemRequiments} from "@/types/postProps";
import {
  gameGenres,
  initialFaqList,
  interfaceLanguageList,
  platformList,
  PostCategory,
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
import {Editor} from "@tiptap/react";
import {Textarea} from "@/components/ui/textarea";
import CategorySelector from "@/components/admin/posts/CategorySelector";

import copy from "clipboard-copy";
import {aiProm} from "@/data/aiProm";

const Page = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cardDescription, setCardDescription] = useState<string>("");
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
  const [editorRef, setEditorRef] = useState<Editor | null>(null);
  //  ---
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | "">(
    "",
  );
  const [jsonData, setJsonData] = useState<any | null>(null);
  const [appVersion, setAppVersion] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");

  console.log(description);
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
      selectedCategory: "",
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
        cardDescription,
        slug,
        date,
        downloadLink,
        tags,
        interfaceLanguage,
        voiceLanguage,
        platform,
        faqList,
        systemRequirements,
        appVersion,
        publisher,
        selectedCategory,
        // releasedDate,
      };
      localStorage.setItem("postFormDataGameov", JSON.stringify(formData));
    }, 1000)();
  }, [
    title,
    description,
    cardDescription,
    slug,
    date,
    downloadLink,
    tags,
    interfaceLanguage,
    voiceLanguage,
    platform,
    faqList,
    systemRequirements,
    appVersion,
    publisher,
    selectedCategory,
    // releasedDate,
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
      setCardDescription(parsed.cardDescription || "");
      setSlug(parsed.slug || "");
      setDate(new Date(parsed.date) || new Date());
      setDownloadLink(parsed.downloadLink || "");
      setTags(parsed.tags || []);
      setInterfaceLanguage(parsed.interfaceLanguage || []);
      setVoiceLanguage(parsed.voiceLanguage || []);
      setPlatform(parsed.platform || []);
      setFaqList(parsed.faqList || initialFaqList);
      setAppVersion(parsed.appVersion || "");
      setPublisher(parsed.publisher || "");
      setSelectedCategory(parsed.selectedCategory || "");
      // setReleasedDate(new Date(parsed.releasedDate) || new Date());
      setSystemRequirements(
        parsed.systemRequirements || {
          minSystemRequirement: [],
          recommendedSystemRequirement: [],
        },
      );
      setValue("tags", parsed.tags || [], {
        shouldValidate: false,
        shouldDirty: false,
        shouldTouch: false,
      });
      setValue("description", parsed.description || "", {
        shouldValidate: false,
        shouldDirty: false,
        shouldTouch: false,
      });
      setValue("descriptionCard", parsed.descriptionCard || "", {
        shouldValidate: false,
        shouldDirty: false,
        shouldTouch: false,
      });
      setValue("selectedCategory", parsed.selectedCategory || null, {
        shouldValidate: false,
        shouldDirty: false,
        shouldTouch: false,
      });
    }
  }, [setValue]);

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
    selectedCategory,
  ]);

  const handleEditorReset = (editor: Editor | null) => {
    setEditorRef(editor);
  };

  const clearForm = (showTooltip: boolean = false) => {
    setTitle("");
    setDescription("");
    setCardDescription("");
    if (editorRef) {
      editorRef.commands.setContent("");
    }
    setSlug("");
    setDate(new Date());
    setDownloadLink("");
    setTags([]);
    setInterfaceLanguage([]);
    setVoiceLanguage([]);
    setPlatform([]);
    setFaqList(initialFaqList);
    setImages([]);
    setAppVersion("");
    setPublisher("");
    setSelectedCategory("");
    // setReleasedDate(new Date());
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

    setValue("selectedCategory", "");

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

  useEffect(() => {
    setValue("selectedCategory", selectedCategory, {
      shouldValidate: false,
      shouldDirty: true,
      shouldTouch: false,
    });
  }, [selectedCategory, setValue]);

  const parseJsonData = () => {
    try {
      const parsedData = JSON.parse(jsonData);

      console.log(parsedData.description);
      setTitle(parsedData.title || "");
      setDescription(parsedData.description || "");
      setCardDescription(parsedData.cardDescription || "");
      setSlug(parsedData.slug || "");
      setDate(new Date(parsedData.date) || new Date());
      setDownloadLink(parsedData.downloadLink || "");
      setTags(parsedData.tags || []);
      setInterfaceLanguage(parsedData.interfaceLanguages || []);
      setVoiceLanguage(parsedData.voiceLanguages || []);
      setPlatform(parsedData.platforms || []);
      setFaqList(parsedData.faqList || initialFaqList);
      setSystemRequirements(parsedData.systemRequirements || {});
      setAppVersion(parsedData.appVersion || "");
      setPublisher(parsedData.publisher || "");
      setSelectedCategory(parsedData.selectedCategory || null);
      // setReleasedDate(new Date(parsedData.releasedDate));

      // Update the form fields
      setValue("title", parsedData.title);
      setValue("description", parsedData.description);
      setValue("descriptionCard", parsedData.cardDescription);
      setValue("slug", parsedData.slug);
      setValue("date", new Date(parsedData.date));
      setValue("downloadLink", parsedData.downloadLink);
      setValue("tags", parsedData.tags);
      setValue("selectedCategory", parsedData.selectedCategory);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      toast.error("Invalid JSON data");
    }
  };
  const onSubmit = async () => {
    setIsLoading(true);
    const startTime = performance.now();
    try {
      const author = session?.user;
      if (!author) {
        toast.error("No author found");
        setIsLoading(false);
        return;
      }

      const images = await uploadImages();
      const postData = {
        title,
        description,
        cardDescription,
        slug,
        date,
        downloadLink,
        tags,
        interfaceLanguages: interfaceLanguage,
        voiceLanguages: voiceLanguage,
        platforms: platform,
        faqList,
        systemRequirements,
        appVersion,
        publisher,
        selectedCategory,
        // releasedDate,
        images,
        author: author,
      };
      const response = await fetch("/api/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (response.status === 409) {
        toast.error(data.message);
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        setIsLoading(false);
        toast.error("Failed to create post");
        return;
      }

      const endTime = performance.now();
      const timeElapsed = endTime - startTime;
      toast.success(
        `Form submission took ${(timeElapsed / 1000).toFixed(2)} seconds`,
      );

      setIsLoading(false);
      toast.success("Post created successfully");
      // clearForm();
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to create post");
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
      return [];
    }

    try {
      const uploadedUrls = await Promise.all(
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
        }),
      );

      return uploadedUrls.filter((url) => url !== null);
    } catch (err) {
      console.error("Error in uploadImages:", err);
      toast.error("Something went wrong. Please try again.");
      return [];
    }
  };

  const formatJsonData = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const formattedData = JSON.stringify(parsedData, null, 2);
      setJsonData(formattedData);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      toast.error("Invalid JSON data");
    }
  };

  const handleCopy = () => {
    if (title === "") {
      toast.error("No text to copy");
      return;
    } else if (selectedCategory === "") {
      toast.error("No category to copy");
    } else {
      copy(aiProm({selectedCategory, title}));
      toast.success("Text copied to clipboard");
    }
  };

  return (
    <div className="flex gap-10">
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
              variant="secondary"
              className="rounded-sm px-5 gap-1.5"
              onClick={(e) => {
                e.preventDefault();
                handleCopy();
              }}>
              <Copy size={20} />
              Copy
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
            <div className="w-full max-w-[700px] flex justify-center mt-20">
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
                <CustomInputLabel label="Category" />
                <div className="relative ">
                  <CategorySelector
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    error={errors.selectedCategory}
                  />
                  <ErrorMessage error={errors.selectedCategory} />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <CustomInputLabel label="Description" />
                <div className="relative">
                  <EditorInput
                    onChange={handleEditorChange}
                    initialContent={description}
                    error={errors.description}
                    onReset={handleEditorReset}
                  />
                  <ErrorMessage error={errors.description} />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <CustomInputLabel label="Card Description" />
                <div className="relative">
                  <Textarea
                    placeholder="Description for card"
                    className={`rounded-sm bg-[#171718] ${errors.descriptionCard && "border-[#F31260] focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none  focus:shadow-none "}`}
                    value={cardDescription}
                    {...register("descriptionCard")}
                    onChange={(e) => setCardDescription(e.target.value)}
                  />
                  <ErrorMessage error={errors.descriptionCard} />
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
                    value={"#"}
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
                    value={appVersion}
                    onChange={(e) => setAppVersion(e.target.value)}
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
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <CustomInputLabel
                  label="Released date of app"
                  required={false}
                />
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
      <div className="max-w-[400px] w-full sticky top-0 bottom-0">
        <h1 className="text-2xl font-bold mb-10">JSON Input</h1>
        <div className="flex flex-col gap-3">
          <CustomInputLabel label="Paste JSON Data" required={false} />
          <div className="relative">
            <Textarea
              placeholder="Paste JSON Data..."
              className={`rounded-sm min-h-[200px] bg-[#171718]`}
              value={jsonData}
              onChange={(e) => setJsonData(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={formatJsonData}
              variant="secondary">
              <Code className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Format JSON</span>
              <span className="sr-only">Format JSON data</span>
            </Button>
            <Button
              className="flex-1"
              variant="default"
              onClick={parseJsonData}>
              <FileJson className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Parse JSON</span>
              <span className="sr-only">Parse JSON data</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
