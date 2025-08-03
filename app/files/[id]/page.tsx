import FileDownloadClient from "./client";
import ExpiredClient from "./expiredClient";

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
  return (await response.json()) as FileInfo;
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const fileInfo = await getFileInfo((await params).id);

  if (!fileInfo) {
    return <div>ファイルが見つかりませんでした</div>;
  }

  const now = new Date();
  const expiresAt = new Date(fileInfo.expiresAt);
  const isExpired = now > expiresAt;

  if (isExpired) {
    return <ExpiredClient />;
  }

  return <FileDownloadClient fileId={fileInfo.id} />;
}
