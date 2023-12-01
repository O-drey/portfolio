import { MoleculeCard } from "@/app/libs/ui";

import { data } from "@/app/datas/projects.json";
// import { list } from "@/app/api/fetchs/fetchSubjects";
// const subjects =  await list();
export default async function SubjectList() {
  return (
    <div className="mx-7xl grid lg:grid-cols-4 gap-4 lg:gap-6 mx-auto py-28 px-4 lg:px-16">
      {data.map((project, index) => (
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
