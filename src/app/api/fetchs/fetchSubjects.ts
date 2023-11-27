import { Subjects } from "@/app/libs/interfaces/subjects";
import { httpClient } from "../httpClient";

export const fetchSubjects = () => {
  const list = async () => {
    const { data } = await httpClient.get<Subjects[]>("/subjects");
    return data;
  };

  const retrieve = async (id: Subjects["id"]) => {
    const { data } = await httpClient.get<Subjects>(`/subjects/${id}`);
    return data;
  };

  const create = async (datas: Omit<Subjects, "id">) => {
    const { data } = await httpClient.post<Subjects>("/subjects", datas);
    return data;
  };

  const update = async (
    datas: Pick<Subjects, "content" | "title" | "subtitle">
  ) => {
    const { data } = await httpClient.patch<Subjects>("/subjects", datas);
    return data;
  };

  const del = async (id: Subjects["id"]) => {
    const { data } = await httpClient.delete<Subjects[]>(`/subjects/${id}`);
    return data;
  };

  return { list, retrieve, create, update, del };
};
