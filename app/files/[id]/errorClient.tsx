import Link from "next/link";
import React from "react";

export default function ErrorClient({ error }: { error: string }) {
  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="text-center text-sm text-gray-500">
        <p className="font-bold">
          {error === "isExpired"
            ? "ファイルの有効期限が切れています。"
            : "ファイルが見つかりません。"}
        </p>
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            新しいファイルをアップロード
          </Link>
        </div>
      </div>
    </div>
  );
}
