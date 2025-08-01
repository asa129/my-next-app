"use client";

function FileDownloadClient({ fileId }: { fileId: string }) {
  const handleDownload = () => {
    window.location.href = `/api/download/${fileId}`;
  };

  return (
    <div>
      <button onClick={handleDownload}>ファイルをダウンロード</button>
    </div>
  );
}

export default FileDownloadClient;
