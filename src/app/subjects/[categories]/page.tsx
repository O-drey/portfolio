import { MoleculeCard } from "@/app/libs/ui";

import { data } from "@/app/datas/projects.json";

export default function Subjects() {
  const tag = "design";
  const projects = data.filter((project) => project.tags.includes(tag));
  console.log("projects :", projects);
  return (
    <div className="mx-7xl grid lg:grid-cols-4 gap-4 lg:gap-6 mx-auto py-28 px-4 lg:px-16">
      {projects.map((project, index) => (
        <MoleculeCard
          key={index}
          title={project.title}
          text={project.content}
          href={`/subjects/${project.id}`}
        />
      ))}
    </div>
  );
}
