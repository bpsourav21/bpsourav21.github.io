import { Download, XIcon } from "lucide-react";
import ResumeHome from "./ResumeHome";

export default function ResumePopup({
  closeResumePopup,
}: {
  closeResumePopup: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10 w-full h-full relative">
        <button
          onClick={closeResumePopup}
          className="absolute top-2 right-2 text-secondary hover:text-secondary dark:hover:text-gray-300"
        >
          <XIcon />
        </button>
        <div className="flex flex-col items-center bg-white">
          <div className="scrollable max-h-[80vh] w-full overflow-y-auto">
            <ResumeHome />
          </div>
          <button
            // href="/resume.pdf"
            // target="_blank"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Download size={16} className="inline mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
