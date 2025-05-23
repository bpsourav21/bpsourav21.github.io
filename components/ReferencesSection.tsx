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
  ]

  return (
    <div>
      <h2 className="text-lg font-bold text-blue-900 uppercase border-b border-gray-300 pb-1 mb-3">References</h2>
      <div className="space-y-4">
        {references.map((ref, index) => (
          <div key={index} className="pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
            <h3 className="font-bold text-blue-900 text-sm">{ref.name}</h3>
            <p className="text-xs">{ref.title}</p>
            <p className="text-xs">{ref.company}</p>
            <p className="text-xs text-blue-600">
              <a href={`mailto:${ref.email}`} className="hover:underline">
                {ref.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
