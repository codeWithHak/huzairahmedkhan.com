import { Award } from "lucide-react";

type Props = {
  name?: string;
  size?: "sm" | "md";
};

export default function HackathonBadge({ name, size = "sm" }: Props) {
  const isMd = size === "md";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[#BFE600]/50 bg-[#0a0a0a] text-[#BFE600] shadow-[0_0_24px_rgba(191,230,0,0.25)] ${
        isMd ? "px-3.5 py-1.5 text-xs" : "px-3 py-1 text-[11px]"
      }`}
    >
      <Award className={isMd ? "h-4 w-4" : "h-3.5 w-3.5"} />
      <span className="font-semibold tracking-wide">Winner</span>
      {name && (
        <>
          <span aria-hidden className="text-white/30">·</span>
          <span className="font-medium text-white/80">{name}</span>
        </>
      )}
    </span>
  );
}
