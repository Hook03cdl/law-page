import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"main">;
type ContainerHeaderProps = React.ComponentProps<"header">;
type ContainerActionProps = React.ComponentProps<"div">;
type ContainerTitleProps = React.ComponentProps<"div">;
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
	return <section data-slot="container-item" className={cn("grid gap-15 px-10 py-30", className)} {...props} />;
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
		<p className="text-secondary font-bold text-sm">{children}</p>
	) : (
		<div data-slot="container-title" className={cn("text-secondary font-bold text-sm", className)} {...props}>
			{children}
		</div>
	);
}
export function ContainerTitle({ children, className, ...props }: ContainerTitleProps) {
	return typeof children === "string" ? (
		<h1 className={cn("font-heading text-primary text-4xl font-bold", className)} {...props}>
			{children}
		</h1>
	) : (
		<div
			data-slot="container-title"
			className={cn("font-heading text-primary text-4xl font-bold", className)}
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
	return <div data-slot="container-description" className={cn("", className)} {...props}></div>;
}

export function ContainerContent({ ...props }: ContainerContentProps) {
	return <article data-slot="container-content" {...props} />;
}
