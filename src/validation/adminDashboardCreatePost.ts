import {date, z} from "zod";

const postCategories = [
  "PC_GAMES",
  "SOFTWARE",
  "MAC_OS_SOFTWARE",
  "GRAPHICS_AND_DESIGN",
] as const;

export const createPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "Description is required")
    .refine(
      (val) => {
        const strippedContent = val.replace(/<[^>]*>/g, "").trim();
        return strippedContent.length >= 50;
      },
      {message: "Description must be at least 50 characters (excluding HTML)"},
    ),

  slug: z.string().min(1, "Slug is required"),
  downloadLink: z.string().min(1, "Download link is required"),
  date: z.date({
    required_error: "Date is required",
  }),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  images: z
    .array(
      z.object({
        id: z.number(),
        file: z.instanceof(File),
        title: z.string(),
        size: z.number(),
      }),
    )
    .min(1, "At least one image is required")
    .max(10, "Maximum 10 images allowed"),
  descriptionCard: z.string().min(1, "Description card is required"),
  selectedCategory: z.union([z.enum(postCategories), z.literal("")]).refine(
    // @ts-ignore

    (category) => postCategories.includes(category),
    "Invalid category",
  ),
});

export type CreatePostData = z.infer<typeof createPostSchema>;
