import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({message: "Method not allowed"});
  }
  try {
    const body = await request.json();
    console.log("Received body:", body);
    if (!body.file) {
      return NextResponse.json({error: "No file data received"}, {status: 400});
    }
    const s3Client = new S3Client({
      region: "us-east-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY ?? "",
        secretAccessKey: process.env.AWS_SECRET_KEY ?? "",
      },
    });

    const {file} = body;
    const ext = file.name.split(".").pop();
    const newFileName = `${Date.now()}.${ext}`;

    const buffer = Buffer.from(file.data, "base64");

    const bucket = "e-1";

    try {
      const command = new PutObjectCommand({
        Bucket: bucket,
        Key: newFileName,
        ACL: "public-read",
        ContentType: file.type,
        Body: buffer,
      });

      await s3Client.send(command);

      const link = `https://${bucket}.s3.amazonaws.com/${newFileName}`;
      return NextResponse.json({link}, {status: 200});
    } catch (error) {
      return NextResponse.json(
        {error: (error as Error).message || "An unknown error occurred"},
        {status: 500},
      );
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      {error: (error as Error).message || "An unknown error occurred"},
      {status: 500},
    );
  }
}
