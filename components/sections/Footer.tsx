export function Footer() {
    return (
        <footer className="py-10 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-sm text-center md:text-left">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                <div>
                    <p>© NEIRO PRORIV</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
                    <a href="#" className="hover:text-white transition-colors">Полетика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}
