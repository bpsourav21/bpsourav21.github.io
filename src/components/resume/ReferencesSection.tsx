import data from "@/src/lib/data";

export default function ReferencesSection() {
  const references = data.ReferencesSection.references;

  return (
    <div>
      <h2 className="text-md font-bold text-primary uppercase border-b border-primary pb-2 mb-4">
        References
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
        {references.map((ref, index) => (
          <div key={index} className="pb-3">
            <h3 className="font-bold text-primary text-md">{ref.name}</h3>
            <p className="text-sm font-bold text-secondary">{ref.title}</p>
            <p className="text-sm italic text-secondary">{ref.company}</p>
            <p className="text-sm text-secondary">
              <a href={`mailto:${ref.email}`} className="hover:underline">
                {ref.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
