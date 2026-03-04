"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 md:px-6 relative z-10">
            <div className="container max-w-5xl mx-auto space-y-12">

                {/* ТАРИФ БАЗОВЫЙ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-white/10"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="flex-1 space-y-8">
                            <h2 className="font-heading text-5xl md:text-6xl text-white">
                                ТАРИФ &quot;СТАРТ&quot;
                            </h2>
                            <p className="text-gray-300 text-lg font-medium">
                                Самостоятельное изучение материала. Только уроки, без обратной связи и токенов.
                            </p>

                            <ul className="space-y-5">
                                {[
                                    "Доступ к 10 модулям навсегда",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-[400px] flex flex-col items-center p-8 rounded-3xl bg-[#1a1515] border border-white/5 shadow-xl">
                            <div className="text-gray-500 line-through text-xl mb-2 font-sans text-nowrap opacity-0">spacer</div>
                            <div className="font-heading text-6xl text-white mb-8 text-nowrap">10 000&nbsp;₽</div>

                            <a
                                href="https://payform.ru/ptaRekS/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <button className="w-full py-5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 mb-4 uppercase tracking-wide">
                                    КУПИТЬ СЕЙЧАС
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* ТАРИФ PRO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-[2rem] p-8 md:p-16 relative overflow-hidden border border-purple-500/30"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">

                        {/* Left Side: Offer Details */}
                        <div className="flex-1 space-y-8">
                            <h2 className="font-heading text-5xl md:text-7xl text-gradient-hero">
                                ТАРИФ &quot;PRO&quot;
                            </h2>
                            <p className="text-gray-300 text-lg font-medium">
                                Полный доступ ко всем модулям, домашним заданиям и закрытому чату.
                            </p>

                            <ul className="space-y-5">
                                {[
                                    "Доступ к 10 модулям навсегда",
                                    "600 000 токенов на генерации",
                                    "Проверка домашних заданий",
                                    "Закрытый чат с участниками",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-green-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Price & CTA */}
                        <div className="w-full md:w-[400px] flex flex-col items-center p-8 rounded-3xl bg-[#1a1515] border border-white/5 shadow-2xl">
                            <div className="text-gray-500 line-through text-xl mb-2 font-sans text-nowrap">45 000&nbsp;₽</div>
                            <div className="font-heading text-6xl text-white mb-8 text-nowrap">30 000&nbsp;₽</div>

                            <a
                                href="https://payform.ru/5aaQ1uT/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <button className="btn-gradient w-full py-5 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 mb-4 uppercase tracking-wide">
                                    КУПИТЬ СЕЙЧАС
                                </button>
                            </a>

                            <a
                                href="https://payform.ru/5aaQ1uT/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <button className="w-full py-5 bg-transparent border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white font-semibold rounded-xl transition-all uppercase tracking-wide">
                                    Рассрочка 0%
                                </button>
                            </a>

                            <div className="mt-6 flex items-center gap-4 opacity-50 justify-center">
                                <div className="w-8 h-5 bg-gray-600 rounded"></div>
                                <div className="w-8 h-5 bg-gray-600 rounded"></div>
                                <div className="w-8 h-5 bg-gray-600 rounded"></div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
