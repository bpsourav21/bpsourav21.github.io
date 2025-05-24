export default function ReferencesSection() {
  const references = [
    {
      name: "Keith Treu",
      title: "Director, Software Engineering",
      company: "Optimizely",
      email: "keith.treu@optimizely.com",
    },
    {
      name: "Tejas Viswanath",
      title: "CTO & Founder",
      company: "Chaldal Limited",
      email: "tejas@chaldal.net",
    },
  ];

  return (
    <div>
      <h2 className="text-md font-bold text-blue-900 uppercase border-b border-gray-300 pb-2 mb-4">
        References
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
        {references.map((ref, index) => (
          <div key={index} className="pb-3">
            <h3 className="font-bold text-blue-900 text-md">{ref.name}</h3>
            <p className="text-sm font-bold">{ref.title}</p>
            <p className="text-sm font-bold text-gray-500">{ref.company}</p>
            <p className="text-xs text-blue-600">
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
