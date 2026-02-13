import React from "react";

const sampleProjects = [
  { id: 1, title: "Project One", description: "A short description of project one." },
  { id: 2, title: "Project Two", description: "A short description of project two." },
  { id: 3, title: "Project Three", description: "A short description of project three." },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-8">
      <h2 className="text-2xl font-semibold text-[#064e3b]">Projects</h2>
      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        {sampleProjects.map((p) => (
          <div key={p.id} className="p-4 bg-white/80 rounded-lg shadow">
            <h3 className="font-bold text-[#065f46]">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{p.description}</p>
            <div className="mt-3">
              <a
                href="#"
                className="text-sm text-[#10b981] hover:underline"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
