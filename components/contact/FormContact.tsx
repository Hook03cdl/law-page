"use client";

import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { specialities } from "@/data/specialties";
import { Textarea } from "../ui/textarea";
import { InputTel } from "./InputTel";
import { Button } from "../ui/button";
import { ContactProps } from "@/types/contact";

export default function FormContact() {
	const { control, handleSubmit, formState } = useForm<ContactProps>({
		defaultValues: { email: "", fullname: "", message: "", phone_number: "", subject: specialities[0].name },
	});

	const onSubmit: SubmitHandler<ContactProps> = (data) => {
		// if (!(await validateContact(data))) return;
		console.log(data);
	};

	return (
		<Card>
			<CardHeader className="mb-5">
				<CardTitle>Initial Inquiry</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-5">
						<fieldset className="flex gap-5 *:flex-1">
							<Controller
								rules={{ required: "Enter your full name" }}
								name="fullname"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<Input {...field} label="FULL NAME" placeholder="John Doe" errorMsg={error?.message} />
								)}
							/>
							<Controller
								rules={{ required: "Enter your email" }}
								name="email"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<Input
										type="email"
										{...field}
										label="EMAIL ADDRESS"
										placeholder="john.doe@example.com"
										errorMsg={error?.message}
									/>
								)}
							/>
						</fieldset>
						<Controller
							rules={{ required: "Enter your phone number" }}
							name="phone_number"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<InputTel {...field} label="PHONE NUMBER" errorMsg={error?.message} />
							)}
						/>
						<Controller
							name="subject"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Select value={field.value} onValueChange={field.onChange}>
									<SelectTrigger label="SUBJECT" errorMsg={error?.message}>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Subject</SelectLabel>
											{specialities.map(({ name, icon: Icon }) => (
												<SelectItem value={name} key={name}>
													<Icon />
													<span>{name}</span>
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						/>
						<Controller
							rules={{ required: "Enter your menssage" }}
							name="message"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Textarea
									{...field}
									errorMsg={error?.message}
									label="MESSAGE"
									placeholder="Provide a brief overview of your case..."
								/>
							)}
						/>
						<Button size={"lg"} disabled={!formState.isValid}>
							Submit
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
