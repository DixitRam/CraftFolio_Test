"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DesignGrid() {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  const designs = [
    { id: "1", image: "design1.jpg", title: "Design 1" },
    { id: "2", image: "design2.jpg", title: "Design 2" },
    // Add more designs here
  ];

  return (
    <div className="design-grid">
      {designs.map((design) => (
        <div
          key={design.id}
          className="design-item cursor-pointer"
          onClick={() => setSelectedDesign(design.id)}
        >
          <img src={design.image} alt={design.title} className="rounded-lg" />
        </div>
      ))}

      <Dialog open={!!selectedDesign} onOpenChange={() => setSelectedDesign(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {designs.find((design) => design.id === selectedDesign)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={designs.find((design) => design.id === selectedDesign)?.image}
              alt="Selected Design"
              className="w-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}