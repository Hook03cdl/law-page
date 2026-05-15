import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"main">;
type ContainerHeaderProps = React.ComponentProps<"header">;
type ContainerActionProps = React.ComponentProps<"div">;
interface ContainerTitleProps extends React.ComponentProps<"div"> {
	size?: "sm" | "default" | "lg" | "xl";
}
type ContainerDescriptionProps = React.ComponentProps<"div">;
type ContainerItemProps = React.ComponentProps<"section">;
type ContainerContentProps = React.ComponentProps<"article">;

export function Container({ className, ...props }: ContainerProps) {
	return (
		<main
			data-slot="container"
			className={cn("group/container grid min-h-svh container mx-auto", className)}
			{...props}
		/>
	);
}
export function ContainerItem({ className, ...props }: ContainerItemProps) {
	return (
		<section
			data-slot="container-item"
			className={cn("space-y-10 md:space-y-15 px-3 md:px-10 py-20 md:py-30", className)}
			{...props}
		/>
	);
}

export function ContainerHeader({ className, ...props }: ContainerHeaderProps) {
	return (
		<header
			data-slot="container-header"
			className={cn(
				"group/container-header @container/container-header grid auto-rows-min items-start gap-1 space-y-5",
				"md:has-data-[slot=container-action]:grid-cols-[1fr_auto] has-data-[slot=container-description]:grid-rows-[auto_auto]",
				className
			)}
			{...props}
		/>
	);
}

export function ContainerTagline({ children, className, ...props }: ContainerTitleProps) {
	return typeof children === "string" ? (
		<p className="text-secondary font-bold text-xs md:text-sm">{children}</p>
	) : (
		<div
			data-slot="container-title"
			className={cn("text-secondary font-bold text-xs md:text-sm", className)}
			{...props}
		>
			{children}
		</div>
	);
}
export function ContainerTitle({ children, className, size = "default", ...props }: ContainerTitleProps) {
	return typeof children === "string" ? (
		<h2
			data-slot="container-title"
			data-size={size}
			className={cn(
				"font-heading text-primary font-bold",
				"data-[size=default]:text-2xl md:data-[size=default]:text-4xl",
				"data-[size=sm]:text-lg md:data-[size=sm]:text-2xl",
				"data-[size=lg]:text-2xl md:data-[size=lg]:text-5xl",
				"data-[size=xl]:text-3xl md:data-[size=xl]:text-6xl",
				className
			)}
			{...props}
		>
			{children}
		</h2>
	) : (
		<div
			data-slot="container-title"
			data-size={size}
			className={cn(
				"font-heading text-primary font-bold",
				"data-[size=default]:text-xl md:data-[size=default]:text-4xl",
				"data-[size=sm]:text-base md:data-[size=sm]:text-2xl",
				"data-[size=lg]:text-2xl md:data-[size=lg]:text-5xl",
				"data-[size=xl]:text-3xl md:data-[size=xl]:text-6xl",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export function ContainerAction({ className, ...props }: ContainerActionProps) {
	return (
		<div
			data-slot="container-action"
			className={cn("md:col-start-2 md:row-span-2 md:row-start-1 self-end justify-self-end", className)}
			{...props}
		/>
	);
}

export function ContainerDescription({ className, ...props }: ContainerDescriptionProps) {
	return (
		<div data-slot="container-description" className={cn("md:text-lg text-foreground", className)} {...props}></div>
	);
}

export function ContainerContent({ ...props }: ContainerContentProps) {
	return <article data-slot="container-content" {...props} />;
}
