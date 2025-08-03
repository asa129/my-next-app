import FileDownloadClient from "./client";
import ErrorClient from "./errorClient";

export type FileInfo = {
  id: string;
  fileName: string;
  filePath: string;
  contentType: string;
  expiresAt: string;
  createdAt: string;
};

async function getFileInfo(fileId: string) {
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/files/${fileId}`);
  try {
    const fileInfo = (await response.json()) as FileInfo;
    return fileInfo;
  } catch (error) {
    console.error("Error fetching file info:", error);
    return null;
  }
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const fileInfo = await getFileInfo((await params).id);

  if (!fileInfo) {
    return <ErrorClient error="notFound" />;
  }

  const now = new Date();
  const expiresAt = new Date(fileInfo.expiresAt);
  const isExpired = now > expiresAt;

  if (isExpired) {
    return <ErrorClient error="isExpired" />;
  }

  return <FileDownloadClient fileId={fileInfo.id} />;
}
