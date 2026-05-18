"use client";

import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { InputTel } from "./InputTel";
import { Button } from "../ui/button";
import { ContactProps } from "@/types/contact";
import useListSpecialties from "@/hooks/useListSpecialties";
import { useTranslations } from "next-intl";
import { ListPlus } from "lucide-react";

export default function FormContact() {
	const t = useTranslations("ContactPage.form");
	const specialties = useListSpecialties();
	const { control, handleSubmit } = useForm<ContactProps>({
		defaultValues: { email: "", fullname: "", message: "", phone_number: "", subject: specialties[0].name },
	});

	const onSubmit: SubmitHandler<ContactProps> = (data) => {
		console.log(data);
	};

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle>{t("title")}</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-5">
						<fieldset className="flex max-lg:flex-col gap-5 *:flex-1">
							<Controller
								rules={{ required: t("input.name.error") }}
								name="fullname"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<Input
										{...field}
										label={t("input.name.label")}
										placeholder={t("input.name.placeholder")}
										errorMsg={error?.message}
									/>
								)}
							/>
							<Controller
								rules={{ required: t("input.email.error") }}
								name="email"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<Input
										type="email"
										{...field}
										label={t("input.email.label")}
										placeholder={t("input.email.placeholder")}
										errorMsg={error?.message}
									/>
								)}
							/>
						</fieldset>
						<Controller
							rules={{ required: t("input.phone.error") }}
							name="phone_number"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<InputTel {...field} label={t("input.phone.label")} errorMsg={error?.message} />
							)}
						/>
						<Controller
							name="subject"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Select value={field.value} onValueChange={field.onChange}>
									<SelectTrigger label={t("input.subject.label")} errorMsg={error?.message}>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>{t("input.subject.label")}</SelectLabel>
											{specialties.map(({ name, icon: Icon }) => (
												<SelectItem value={name} key={name}>
													<Icon />
													<span>{name}</span>
												</SelectItem>
											))}
											<SelectItem value="other">
												<ListPlus />
												<span>{t("other-item")}</span>
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						/>
						<Controller
							rules={{ required: t("input.message.error") }}
							name="message"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Textarea
									{...field}
									errorMsg={error?.message}
									label={t("input.message.label")}
									placeholder={t("input.message.placeholder")}
								/>
							)}
						/>
						<Button size={"lg"}>{t("btnSubmit")}</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
