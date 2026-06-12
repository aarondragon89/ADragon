export function Footer() {
    return (
        <footer className="h-10 flex items-center justify-center bg-white border-t border-gray-100 shrink-0">
            <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} ADragon · All rights reserved
            </p>
        </footer>
    );
}
