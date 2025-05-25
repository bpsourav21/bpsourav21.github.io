import data from "@/src/lib/data";

export default function SummarySection() {
  const summary = data.SummarySection.summary;
  return (
    <div>
      <h2 className="text-md font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
        SUMMARY
      </h2>
      <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
    </div>
  );
}
