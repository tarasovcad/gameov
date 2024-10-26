"use client";

import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {Button} from "@/components/ui/button";
import Placeholder from "@tiptap/extension-placeholder";

const EditorInput = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Description",
      }),
    ],
    content: "",

    editorProps: {
      attributes: {
        class:
          "min-h-[100px] w-full rounded-sm rounded-sm bg-[#171718]  p-4 focus:outline-none border border-input",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 flex-wrap">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
          className={
            editor.isActive("heading ", {level: 1})
              ? "bg-secondary text-[13px]"
              : "text-[13px]"
          }>
          H1
        </Button>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
          className={
            editor.isActive("heading", {level: 2})
              ? "bg-secondary text-[13px]"
              : "text-[13px]"
          }>
          H2
        </Button>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph")
              ? "bg-secondary text-[13px]"
              : "text-[13px]"
          }>
          P
        </Button>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "bg-secondary text-[13px]"
              : "text-[13px]"
          }>
          Italic
        </Button>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive("underline")
              ? "bg-secondary text-[13px]"
              : "text-[13px]"
          }>
          Underline
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorInput;
