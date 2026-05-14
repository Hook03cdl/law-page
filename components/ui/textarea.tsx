import { cn } from "@/lib/utils";
import { useId } from "react";
interface TextareaProps extends React.ComponentProps<"textarea"> {
	label?: string;
	errorMsg?: string;
}

export function Textarea({ label, errorMsg, id: inputId, className, ...props }: TextareaProps) {
	const internalId = useId();
	const id = inputId ?? internalId;

	return (
		<div>
			{label && (
				<label htmlFor={id} className="text-xs font-bold font-body leading-tight">
					{label}
				</label>
			)}
			<textarea
				data-slot="textarea"
				className={cn(
					"flex field-sizing-content min-h-25 resize-none mt-1 w-full rounded-none border border-input bg-transparent px-2.5 py-2 text-xs transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs",
					className
				)}
				rows={10}
				id={id}
				{...props}
			/>
			{errorMsg && <p className="text-xs text-destructive">{errorMsg}</p>}
		</div>
	);
}
