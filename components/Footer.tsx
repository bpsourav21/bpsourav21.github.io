export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-16 relative overflow-hidden transition-all duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 hover:scale-110 transition-transform duration-300 cursor-default">
            MHS
          </div>
          <p className="text-gray-300 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Building exceptional digital experiences with passion, precision, and cutting-edge technology.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

          <div className="border-t border-gray-700 dark:border-gray-800 pt-8">
            <p className="text-gray-400 dark:text-gray-500">
              © 2024 Mahadi Hasan Sourav. All rights reserved.
              <span className="inline-block mx-2">•</span>
              Crafted with <span className="text-red-400 animate-pulse">❤️</span> using Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
