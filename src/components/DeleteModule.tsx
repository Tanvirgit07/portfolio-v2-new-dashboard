"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, AlertTriangle } from "lucide-react";

export function DeleteModule() {
  const handleDelete = () => {
    // এখানে আপনার ডিলিট লজিক বা API কল হবে
    console.log("Item Deleted Successfully");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* ডিলিট বাটন */}
        <button className="p-3 bg-zinc-900 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl border border-zinc-800 transition-all">
          <Trash2 className="h-5 w-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] bg-[#1a1a1a] border-zinc-800 text-white">
        <DialogHeader className="flex flex-col items-center text-center">
          {/* ওয়ার্নিং আইকন */}
          <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <DialogTitle className="text-xl font-bold">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            This action cannot be undone. This will permanently delete the
            <span className="text-white font-semibold"> Hero Section</span> from
            the database.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-row gap-3 sm:justify-center mt-4">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent border-zinc-800 hover:bg-zinc-800 text-zinc-300"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            onClick={handleDelete}
            type="button"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold"
          >
            Yes, Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
