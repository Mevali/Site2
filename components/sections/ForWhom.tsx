"use client";

import { motion } from "framer-motion";
import { User, Video, TrendingUp, DollarSign } from "lucide-react";

const targetAudience = [
    {
        icon: <User className="w-8 h-8 text-[#D268FF]" />,
        title: "БЬЮТИ-МАСТЕРАМ",
        description: "Которые хотят получать клиентов из Reels без танцев перед камерой",
    },
    {
        icon: <Video className="w-8 h-8 text-blue-400" />,
        title: "КОНТЕНТ-МЕЙКЕРАМ",
        description: "Чтобы делать уникальный контент для клиентов и повысить чек в 2-3 раза",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-[#D268FF]" />,
        title: "ЭКСПЕРТАМ",
        description: "Для продвижения личного бренда через трендовые нейро-ролики",
    },
    {
        icon: <DollarSign className="w-8 h-8 text-green-400" />,
        title: "ФРИЛАНСЕРАМ",
        description: "Освоить новый востребованный навык и зарабатывать на монтаже",
    },
];

export function ForWhom() {
    return (
        <section className="py-24 px-4 md:px-6 relative z-10">
            <div className="container max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-4xl md:text-6xl text-center mb-16 uppercase"
                >
                    ДЛЯ КОГО <span className="text-gradient-hero">ЭТОТ КУРС?</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {targetAudience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all group border border-white/5 hover:border-purple-500/30"
                        >
                            <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(210,104,255,0.3)]">
                                {item.icon}
                            </div>
                            <h3 className="font-heading text-2xl mb-4 text-white tracking-wide">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-sans">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
