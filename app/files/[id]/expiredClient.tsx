import Link from "next/link";
import React from "react";

export default function ExpiredClient() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="text-center text-sm text-gray-500">
        <p className="font-bold">ファイルの有効期限が切れています。</p>
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            新しいファイルをアップロード
          </Link>
        </div>
      </div>
    </div>
  );
}
