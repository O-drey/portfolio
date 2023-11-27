import { MoleculeCard } from "@/app/libs/ui";

import { data } from "@/app/datas/projects.json";

export default function ProjectList() {
  const projects = data;

  return (
    <div className="mx-7xl mx-auto">
      {projects.map((project, index) => (
        <MoleculeCard
          key={index}
          title={project.title}
          text={project.content}
          href={`/project/${project.id}`}
        />
      ))}
    </div>
  );
}
