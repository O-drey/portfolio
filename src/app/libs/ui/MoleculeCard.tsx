import Link from "next/link";
import { Component, ForwardRefExoticComponent, SVGProps } from "react";

export default function MoleculeCard({
  href,
  title,
  icon,
  text,
}: {
  href: string;
  title: string;
  icon?:
    | string
    | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {/* {" "} sert à ajouter un espace, car l'IDE supprime les espace inutiles */}
        {title}{" "}
        {icon && (
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {/* <Component icon={icon} /> */}
          </span>
        )}
      </h2>
      <p className={`m-0 text-sm text-center lg:text-left opacity-50`}>
        {text}
      </p>
      <slot />
    </Link>
  );
}
