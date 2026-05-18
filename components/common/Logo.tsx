import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
	return <p className={cn("text-primary text-xl font-black font-heading", className)}>Logo</p>;
}
