export default function Button({
  text,
  size,
  color,
  disabled,
  loading,
  type,
  btnClass,
}: {
  text: string;
  size?: "small" | "large";
  color?: "red";
  disabled?: boolean;
  loading?: boolean;
  type?: "submit" | "reset";
  btnClass?: string | string[];
}) {
  const btnSize =
    size === "small" ? "py-2.5 px-3" : size === "large" ? "py-3 px-4" : "p-3";

  const btnColor =
    color === "red"
      ? disabled
        ? "bg-red-400 text-white ring-0 pointer-event-none"
        : loading
        ? "bg-red-400 text-red-500 ring-0 pointer-event-none"
        : "bg-red-500 text-white ring-red-500 hover:bg-red-600"
      : "";

  return (
    <button
      type={type ?? "button"}
      className={`font-medium transition-colors duration-150 rounded-md ${btnSize} ${btnColor} ${btnClass}`}
    >
      {text}
    </button>
  );
}
