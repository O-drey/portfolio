"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import { fetchSubjects } from "@/app/api/fetchs/fetchSubjects";

export default function Searchbar({ text }: { text?: string }) {
  const [searchText, setSearchText] = useState();
  // const { list } = fetchSubjects();
  const search = async (searchText: string) => {
    const subjects = [
      {
        id: "subject_1",
        title: "Sujet 1",
        subtitle: "Sous-titre 1",
        content: "idée de projet 1",
        by_userId: "user_1",
        likes: ["user_2", "user_3", "user_4"],
      },
      {
        id: "subject_2",
        title: "Sujet 2",
        subtitle: "Sous-titre 2",
        content: "idée de projet 2",
        by_userId: "user_2",
        likes: ["user_1", "user_3", "user_4"],
      },
      {
        id: "subject_3",
        title: "Sujet 3",
        subtitle: "Sous-titre 3",
        content: "idée de projet 3",
        by_userId: "user_3",
        likes: ["user_1", "user_2", "user_4"],
      },
    ]; //await list();
    return subjects.filter((subject) => {
      const title = subject.title === searchText;
      const content = subject.content === searchText;
      return [title, content];
    });
  };

  return (
    <div className="flex items-center space-x-1 max-w-xl w-full">
      <input
        type="search"
        name="searchbar"
        className="bg-transparent backdrop-blur-sm border-black border rounded-full px-3 py-1.5 w-full"
      />
      <button type="button">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
