"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Total number of frames in the sequence (001 to 160 = 160 frames)
  const frameCount = 160;
  
  // Helper to generate correct filename string padding zeros (e.g., ezgif-frame-001.png)
  const currentFrame = (index: number) => 
    `/sequence/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.png`;

  // Bind scroll progress directly to the container's physical height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) to frame index (0 to 89)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Preload all images to prevent flickering when scrolling
  useEffect(() => {
    const preloadImages = async () => {
      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = currentFrame(i);
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      try {
        imagesRef.current = await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading sequence frames:", error);
      }
    };

    preloadImages();
  }, []);

  // Core drawing logic to calculate object-fit: cover directly on Canvas API
  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = imagesRef.current[index];
    if (!image) return;

    // Get physical dimensions of the canvas element on the screen
    const { width, height } = canvas.getBoundingClientRect();
    
    // Support high-DPI displays to prevent blurriness
    const dpr = window.devicePixelRatio || 1;
    
    // Only resize the actual canvas buffer if necessary (optimizes performance)
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Mathematical calculation for "object-fit: cover"
    const hRatio = width / image.width;
    const vRatio = height / image.height;
    const ratio = Math.max(hRatio, vRatio); // Max enforces cover, Min would enforce contain
    
    // Center the image within the view
    const centerShift_x = (width - image.width * ratio) / 2;
    const centerShift_y = (height - image.height * ratio) / 2;

    // Clear previous frame and draw next frame
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      centerShift_x,
      centerShift_y,
      image.width * ratio,
      image.height * ratio
    );
  };

  // High-performance listener hook from framer-motion directly mapping scroll to canvas
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded) return;
    
    // Snap to nearest integer frame
    const index = Math.round(latest);
    
    // Ensure paint is queued optimally by the browser
    requestAnimationFrame(() => drawImage(index));
  });

  // Handle window resizing and draw the initial frame on load
  useEffect(() => {
    if (!imagesLoaded) return;
    
    // Initial paint
    drawImage(0);

    const handleResize = () => {
      // Re-evaluate current frame instead of always snapping to 0
      const index = Math.round(frameIndex.get());
      requestAnimationFrame(() => drawImage(index));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      {/* Sticky container that locks the canvas in view during the 500vh scroll */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-background">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        
        {/* Minimal loading state before sequence is ready */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <p className="text-subtle font-mono text-sm tracking-widest uppercase animate-pulse">
              Loading cinematic experience...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
