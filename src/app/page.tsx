import { MoleculeCard } from "@/app/libs/ui";
import { data } from "@/app/datas/projects.json";
export default function Home() {
  const projects = data;
  return (
    <>
      <main className="min-h-screen py-20 p-4 lg:px-16">
        {/* <MoleculeButton
            text="Mon bouton"
            btnClass={"bg-pink-500 hover:bg-pink-600"}
            color="red"
          /> */}
        <h1 className="text-4xl text-center font-bold font-mono">
          Projets du jour
        </h1>
        {/* <h2>{project.title}</h2>
          {project.subtitle && <h3>{project.subtitle}</h3>}
          <p>{project.description}</p>

          <span className="text-sm"> Proposé par {project.by_userId}</span> */}

        <div className="mx-auto grid text-center gap-4 md:grid-cols-2 lg:max-w-5xl lg:w-full mt-8 lg:grid-cols-4 lg:text-left">
          {projects.map((project, index) => (
            <MoleculeCard
              key={index}
              title={project.title}
              text={project.content}
              href={`/subjects/${project.id}`}
            />
          ))}
        </div>
      </main>
    </>
  );
}
