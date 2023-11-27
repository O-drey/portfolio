import { data } from "@/app/datas/projects.json";
import { Subjects } from "@/app/libs/interfaces/subjects";

export default function Project({ id }: { id: Subjects["id"] }) {
  const project = data.find((proj) => proj.id === id);
  return (
    <div className="max-w-7xl mx-auto">
      <h1>{project?.title}</h1>
      {project?.subtitle && <h2>{project?.subtitle}</h2>}{" "}
      <p>{project?.content}</p>
      {project?.tags.map((tag, index) => (
        <span key={index} className="p-2 border text-center">
          {tag}
        </span>
      ))}
    </div>
  );
}
