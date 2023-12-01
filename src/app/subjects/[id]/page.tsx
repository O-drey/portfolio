"use client";

import { useRouter, usePathname } from "next/navigation";

import { Subjects } from "@/app/libs/interfaces/subjects";
import { data } from "@/app/datas/projects.json";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
export default function Subject() {
  console.log("data :", data);
  const id = usePathname().split("/")[2];
  console.log("l'id du projet", id);
  const project = data.find((proj) => proj.id === id);
  console.log("project :", project);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="font-mono text-4xl font-bold">{project?.title}</h1>
        {project?.subtitle && (
          <h2 className="text-gray-600 uppercase">{project?.subtitle}</h2>
        )}
      </div>

      <p className="max-w-3xl mx-auto text-lg font-semibold text-center mt-6">
        {project?.content}
      </p>
      <div className="space-x-2 p-1">
        {project?.tags.map((tag, index) => (
          <span key={index} className="p-1 rounded-md border text-center">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
