import { cn } from "@/lib/utils";
import { useId } from "react";

export interface InputProps extends React.ComponentProps<"input"> {
	label?: string;
	errorMsg?: string;
}

function Input({ className, type = "text", id: inputId, errorMsg, label, ...props }: InputProps) {
	const internalId = useId();
	const id = inputId ?? internalId;

	return (
		<div className="w-full">
			{label && (
				<label htmlFor={id} className="text-xs font-bold font-body leading-tight uppercase">
					{label}
				</label>
			)}
			<input
				type={type}
				data-slot="input"
				aria-invalid={Boolean(errorMsg)}
				className={cn(
					"h-10 w-full mt-1 min-w-0 rounded-none border border-input bg-background text-sm px-3 py-1 transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20",
					className
				)}
				{...props}
			/>
			{errorMsg && <p className="text-xs text-destructive">{errorMsg}</p>}
		</div>
	);
}

export { Input };
