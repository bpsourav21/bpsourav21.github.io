import data from "@/src/lib/data";

export default function SummarySection() {
  const summary = data.SummarySection.summary;
  return (
    <div>
      <h2 className="title-style">
        SUMMARY
      </h2>
      <p className="text-sm leading-relaxed">{summary}</p>
    </div>
  );
}
