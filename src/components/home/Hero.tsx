import { ViewCollectionButton } from "./ViewCollectionButton";
import "../../styles/components/Hero.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  return (
    <section className="hero-section relative h-[95vh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ukrainian Fashion"
          className="hero-image"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Ukrainian Fashion
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Exclusive collection from top Ukrainian designers
          </p>
          <ViewCollectionButton
            categoryId="women"
            className="bg-white text-black hover:bg-neutral-100"
          />
        </div>
      </div>
    </section>
  );
}
