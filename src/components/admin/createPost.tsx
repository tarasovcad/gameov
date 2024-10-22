"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Label} from "@/components/ui/label";

export default function CreatePost() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add Game Post</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-orange-100 p-4 rounded-md space-y-2">
          <Label htmlFor="ai-generate">
            Use AI to generate game title and description
          </Label>
          <Textarea
            id="ai-generate"
            placeholder="Tell us about the game you want to post..."
            className="resize-none"
          />
          <Button onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Game Title</Label>
          <Input id="title" placeholder="Enter the game's title" />
          <p className="text-sm text-muted-foreground">
            50-60 characters is the recommended length for search engines.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Game Description</Label>
          <Textarea
            id="description"
            placeholder="Provide a brief description of the game"
            className="resize-none"
          />
          <p className="text-sm text-muted-foreground">
            120-160 characters is the recommended length for search engines.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select>
            <SelectTrigger id="genre">
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="rpg">RPG</SelectItem>
              <SelectItem value="strategy">Strategy</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="simulation">Simulation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="download-link">Download Link</Label>
          <Input
            id="download-link"
            placeholder="Enter the game's download link"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="system-requirements">System Requirements</Label>
          <Textarea
            id="system-requirements"
            placeholder="List the minimum system requirements"
            className="resize-none"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Save as Draft</Button>
        <Button>Publish Post</Button>
      </CardFooter>
    </Card>
  );
}
