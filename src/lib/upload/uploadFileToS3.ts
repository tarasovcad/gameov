export default async function uploadFileToS3(
  fileName: string,
  fileType: string,
  fileData: string,
): Promise<void> {
  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: {
          name: fileName,
          type: fileType,
          data: fileData,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.link; // This is the S3 URL of the uploaded image
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}
