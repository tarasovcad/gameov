"use client";

import {useEditor, EditorContent, Editor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {Button} from "@/components/ui/button";
import Placeholder from "@tiptap/extension-placeholder";
import {FieldError} from "react-hook-form";
import {useCallback, useEffect} from "react";

interface EditorInputProps {
  onChange: (value: string) => void;
  initialContent?: string;
  error?: FieldError;
  onReset?: (editor: Editor | null) => void;
}

const EditorInput = ({
  onChange,
  initialContent = "",
  error,
  onReset,
}: EditorInputProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Description",
      }),
    ],
    content: initialContent,

    editorProps: {
      attributes: {
        class: `min-h-[100px] w-full rounded-sm rounded-sm bg-[#171718] p-4 focus:outline-none border ${
          error
            ? "border-[#F31260] focus-visible:ring-0 focus-visible:ring-offset-0"
            : "border-input"
        }`,
      },
    },
    onUpdate: useCallback(
      ({editor}: {editor: Editor}) => {
        onChange(editor.getHTML());
      },
      [onChange],
    ),
  });

  useEffect(() => {
    if (onReset) {
      onReset(editor);
    }
  }, [editor, onReset]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
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
      <div className="relative w-full">
        <EditorContent editor={editor} className="editor-content" />
      </div>
    </div>
  );
};

export default EditorInput;
