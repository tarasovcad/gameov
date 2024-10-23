"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {HelpCircle, X} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import {format} from "date-fns";
import Image from "next/image";

export default function CreateBlogPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [systemRequirements, setSystemRequirements] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);

  const generateSlug = () => {
    setSlug(
      title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, ""),
    );
  };

  const generateDate = () => {
    setDate(format(new Date(), "yyyy-MM-dd"));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...newImages].slice(0, 10));
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const removeVideo = () => {
    setVideo(null);
  };

  const handleCreatePost = () => {
    // Implement the logic to create a new blog post
    console.log("Creating new blog post...");
  };

  const handleClear = () => {
    // Clear all form fields
    setTitle("");
    setDescription("");
    setSlug("");
    setDate("");
    setDownloadLink("");
    setSystemRequirements("");
    setTags("");
    setImages([]);
    setVideo(null);
  };

  const handleDraft = () => {
    // Implement the logic to save as draft
    console.log("Saving as draft...");
  };

  const InfoTooltip = ({content}: {content: string}) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="max-w-[800px] mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Create New Blog Post</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="flex items-center gap-2">
            Title{" "}
            <InfoTooltip content="Enter the main title of your blog post" />
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog post title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="flex items-center gap-2">
            Description{" "}
            <InfoTooltip content="Provide a brief summary of your blog post" />
          </Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter blog post description"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug" className="flex items-center gap-2">
            Slug <InfoTooltip content="A URL-friendly version of the title" />
          </Label>
          <div className="flex gap-2">
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Enter slug"
            />
            <Button onClick={generateSlug}>Generate Slug</Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            Date <InfoTooltip content="The publication date of the blog post" />
          </Label>
          <div className="flex gap-2">
            <Input
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="YYYY-MM-DD"
            />
            <Button onClick={generateDate}>Generate Date</Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="downloadLink" className="flex items-center gap-2">
            Download Link{" "}
            <InfoTooltip content="Provide a link for users to download related content" />
          </Label>
          <Input
            id="downloadLink"
            value={downloadLink}
            onChange={(e) => setDownloadLink(e.target.value)}
            placeholder="Enter download link"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="systemRequirements"
            className="flex items-center gap-2">
            System Requirements{" "}
            <InfoTooltip content="List any system requirements for the content" />
          </Label>
          <Textarea
            id="systemRequirements"
            value={systemRequirements}
            onChange={(e) => setSystemRequirements(e.target.value)}
            placeholder="Enter system requirements"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags" className="flex items-center gap-2">
            Tags{" "}
            <InfoTooltip content="Enter tags separated by commas (e.g., Horror, Action)" />
          </Label>
          <Input
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags (comma-separated)"
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            Images{" "}
            <InfoTooltip content="Upload up to 10 images for your blog post" />
          </Label>
          <div className="flex flex-wrap gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index + 1}`}
                  className="h-20 w-20 object-cover rounded"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6"
                  onClick={() => removeImage(index)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {images.length < 10 && (
              <Label htmlFor="image-upload" className="cursor-pointer">
                <div className="h-20 w-20 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                  <span className="text-2xl text-gray-300">+</span>
                </div>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </Label>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            Video <InfoTooltip content="Upload a video for your blog post" />
          </Label>
          {video ? (
            <div className="relative inline-block">
              <video
                src={URL.createObjectURL(video)}
                className="h-40 rounded"
                controls
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6"
                onClick={removeVideo}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Label htmlFor="video-upload" className="cursor-pointer">
              <div className="h-40 w-60 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-300">Upload Video</span>
              </div>
              <Input
                id="video-upload"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleVideoUpload}
              />
            </Label>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-6">
        <Button variant="outline" onClick={handleClear}>
          Clear
        </Button>
        <Button variant="secondary" onClick={handleDraft}>
          Save as Draft
        </Button>
        <Button onClick={handleCreatePost}>Create Post</Button>
      </div>
    </div>
  );
}
