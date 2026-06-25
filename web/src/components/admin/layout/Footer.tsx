export default function Footer() {
  return (
    <footer className="h-12 border-t border-gray-100 bg-white flex items-center justify-between px-6">
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} ADragon. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
          Terms of Service
        </a>
        <span className="text-xs text-gray-300">v1.0.0</span>
      </div>
    </footer>
  );
}
