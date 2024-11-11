"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { GetAllAssistanceResponse } from "@/app/api/internal/response/assistance.response";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fieldsSchema = z.object({
	assistantId: z.coerce.string({
		required_error: "Assistente é obrigatório",
	}),
});

type FieldsSchemaProps = z.infer<typeof fieldsSchema>;

export function FormAddAssistant(props: { giraId: string }) {
	const queryClient = useQueryClient();

	const { control, formState, handleSubmit, reset } =
		useForm<FieldsSchemaProps>({
			resolver: zodResolver(fieldsSchema),
		});

	async function getAllAssistance(): Promise<GetAllAssistanceResponse[]> {
		return await fetch("/api/assistance").then((res) => res.json());
	}

	const getAllAssistanceQuery = useQuery({
		queryKey: ["get_all_assistance"],
		queryFn: getAllAssistance,
	});

	async function onSubmit(data: FieldsSchemaProps) {
		return await fetch(`/api/giras/${props.giraId}`, {
			method: "PUT",
			body: JSON.stringify(data),
		}).then(() => {
			queryClient.invalidateQueries({
				queryKey: ["get_assistance_by_gira_id"],
			});
			reset();
		});
	}

	return (
		<div className="flex flex-1 flex-col gap-2">
			<h2>Adicionar assistente</h2>
			<form
				className="w-full grid grid-cols-4 gap-2"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="col-span-3">
					<Controller
						control={control}
						name="assistantId"
						render={({ field }) => {
							return (
								<Select
									onValueChange={field.onChange}
									value={field.value}
									disabled={getAllAssistanceQuery.isLoading}
								>
									<SelectTrigger>
										<SelectValue placeholder="Assistente" />
									</SelectTrigger>

									<SelectContent>
										{getAllAssistanceQuery.data?.map((assistant) => (
											<SelectItem key={assistant.id} value={assistant.id}>
												{assistant.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							);
						}}
					/>
					{formState.errors.assistantId && (
						<p className="text-red-400 text-sm">
							{formState.errors.assistantId.message}
						</p>
					)}
				</div>
				<div className="col-span-1">
					<Button type="submit" variant="secondary">
						Adicionar
					</Button>
				</div>
			</form>
		</div>
	);
}
