import { HomeIcon } from "@heroicons/react/20/solid";
import { LightBulbIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export const useMenu = () => {
  const menu = [
    {
      value: "home",
      title: "Accueil",
      description: "",
      link: "/",
      icon: HomeIcon,
    },
    {
      value: "categories",
      title: "Idées",
      description: "Retrouvez toutes les idées de projets",
      link: "/projects",
      icon: LightBulbIcon,
    },
    {
      value: "profile",
      title: "Profile",
      description: "Accédez à votre compte",
      link: "/account",
      icon: UserCircleIcon,
    },
  ];
  return { menu };
};
