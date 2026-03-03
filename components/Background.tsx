"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#171313]">

            {/* Generated Nebula/Smoke Background */}
            <div className="absolute inset-0 opacity-60 mix-blend-screen">
                <Image
                    src="/new-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    quality={80}
                />
            </div>

            {/* Floating Orbs - Retained but optimized for new BG */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-600/30 blur-[120px] mix-blend-overlay"
            />

            {/* Floating Dust Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5 + 0.2,
                        }}
                        animate={{
                            y: [null, Math.random() * -50],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                    />
                ))}
            </div>

            {/* Vignette Overlay for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#171313_90%)]" />
        </div>
    );
}
