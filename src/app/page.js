"use client";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";
import { useState } from "react";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner />

        {/* Comment Example */}
        <Comment />

        {/* Reply Example */}
        <Reply />
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/charliebrown.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Charlie Brown</span>
            <br />
            <span>บ้าไปแล้ว</span>
          </div>
        </div>

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
