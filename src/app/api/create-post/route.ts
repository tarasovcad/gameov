import {NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      description,
      slug,
      date,
      downloadLink,
      tags,
      interfaceLanguages,
      voiceLanguages,
      platforms,
      faqList,
      systemRequirements,
      images,
      author,
    } = body;

    const slugExists = await db.post.findUnique({
      where: {slug},
    });

    if (slugExists) {
      return NextResponse.json({message: "Slug already exists"}, {status: 409});
    }

    const user = await db.user.findUnique({
      where: {email: author.email},
    });

    if (!user) {
      return NextResponse.json({message: "User not found"}, {status: 404});
    }

    const post = await db.post.create({
      data: {
        title,
        description,
        slug,
        date,
        downloadLink,
        tags,
        interfaceLanguages,
        voiceLanguages,
        platforms,
        faqList,
        images: images || [],
        systemRequirements,
        status: "PUBLISHED",
        author: {
          connect: {
            id: user.id,
          },
        },
        authorUserName: user.username,
      },
      include: {author: true},
    });
    return NextResponse.json(
      {message: "Post created successfully", post},
      {status: 201},
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      {message: "Error creating post", error: (error as Error).message},
      {status: 500},
    );
  }
}
