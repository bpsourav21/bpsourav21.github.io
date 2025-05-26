import data from "@/src/lib/data";

export default function SummarySection() {
  const summary = data.SummarySection.summary;
  return (
    <div>
      <h2 className="text-md font-bold text-primary mb-4 border-b border-primary pb-2">
        SUMMARY
      </h2>
      <p className="text-sm leading-relaxed">{summary}</p>
    </div>
  );
}
