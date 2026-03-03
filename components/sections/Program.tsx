"use client";

import { motion } from "framer-motion";

const modules = [
    { id: "01", title: "Общее знакомство с интерфейсом сайта, методы пополнения и тд" },
    { id: "02", title: "Знакомство с интерфейсом сториборда, и его возможностями" },
    { id: "2.1", title: "Как адаптировать мультик на другие языки" },
    { id: "2.2", title: "Как пользоваться сторибордом через раздел чата, чтобы получать много серий" },
    { id: "03", title: "Как написать сценарий и придумать идею для видео" },
    { id: "04", title: "Выбор инструментов для ручной генерации" },
    { id: "4.1", title: "Генерация стартовых кадров, и разбивка рефернса на сцены" },
    { id: "4.2", title: "Оживление кадров" },
    { id: "05", title: "Сборка финального видео, монтаж и интерфейс CapCut" },
    { id: "Бонус", title: "Быстрый поиск вирусных сценариев" },
    { id: "Бонус", title: "Монетизация ИИ мультфильмов в тик ток и ютуб из РФ" },
    { id: "Бонус", title: "Где брать первые заказы на мультфильмы" },
];

export function Program() {
    return (
        <section id="program" className="py-24 px-4 md:px-6 relative z-10">
            <div className="container max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-4xl md:text-6xl text-center mb-16 uppercase"
                >
                    ПРОГРАММА <span className="text-gradient-hero">ОБУЧЕНИЯ</span>
                </motion.h2>

                <div className="flex flex-col gap-4">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex items-center gap-6 p-6 rounded-2xl glass-card hover:bg-white/10 transition-all cursor-default border border-white/5 hover:border-purple-500/30 hover:translate-x-2"
                        >
                            <span className="font-heading text-4xl text-white/20 group-hover:text-purple-400 transition-colors">{module.id}</span>
                            <h3 className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{module.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
