"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input, InputProps } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

enum Prefix {
	MX = "+52",
	USA = "+1",
}

const formatPhoneNumber = (digits: string): string => {
	const clean = digits.replace(/\D/g, "").slice(0, 10);

	const parts = [];
	if (clean.length > 0) parts.push(clean.slice(0, 3));
	if (clean.length > 3) parts.push(clean.slice(3, 6));
	if (clean.length > 6) parts.push(clean.slice(6, 10));

	return parts.join(" ");
};

interface InputTelProps extends Omit<InputProps, "onChange" | "value"> {
	onChange?: (value: string) => void;
	value?: string;
}

export function InputTel({ className, label, errorMsg, onChange, ...props }: InputTelProps) {
	const [selectPrefix, setSelectPrefix] = useState<Prefix>(Prefix.USA);
	const [internalValue, setInternalValue] = useState("");

	const updateValue = (rawDigits: string, prefix: Prefix) => {
		const formatted = formatPhoneNumber(rawDigits);
		setInternalValue(formatted);
		const fullNumber = `${prefix}${rawDigits}`;
		onChange?.(fullNumber);
	};

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawDigits = e.target.value.replace(/\D/g, "");
		updateValue(rawDigits, selectPrefix);
	};

	const handleChangeSelect = (prefix: Prefix) => {
		setSelectPrefix(prefix);
		const rawDigits = internalValue.replace(/\D/g, "");
		updateValue(rawDigits, prefix);
	};

	return (
		<div className="flex gap-2 w-full">
			<Select value={selectPrefix} onValueChange={handleChangeSelect}>
				<SelectTrigger label="PREFIX" className="w-fit">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={Prefix.MX}>{Prefix.MX}</SelectItem>
					<SelectItem value={Prefix.USA}>{Prefix.USA}</SelectItem>
				</SelectContent>
			</Select>

			<Input
				type="tel"
				{...props}
				value={internalValue} // solo dígitos formateados
				onChange={handleChangeInput}
				className={cn("w-full", className)}
				placeholder="000 000 0000"
				label={label}
				errorMsg={errorMsg}
			/>
		</div>
	);
}
