export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cleet</h3>
            <p className="text-gray-500 text-sm max-w-md">
              Fleet management made simple
            </p>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <span className="text-gray-300">•</span>
            <span>© 2025 Cleet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
