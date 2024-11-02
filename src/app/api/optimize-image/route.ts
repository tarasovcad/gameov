import sharp from "sharp";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const buffer = await file.arrayBuffer();

    const optimizedBuffer = await sharp(Buffer.from(buffer))
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({quality: 100})
      .toBuffer();

    return new NextResponse(optimizedBuffer, {
      headers: {
        "Content-Type": "image/webp",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {error: "Failed to optimize image"},
      {status: 500},
    );
  }
}
