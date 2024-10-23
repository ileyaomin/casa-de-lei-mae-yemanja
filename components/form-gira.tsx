"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { DialogClose } from "./ui/dialog";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Son } from "@/app/api/internal/entities/son.entity";
import { CreateGirasRequest } from "@/app/api/internal/request/giras.request";

const girasType = z.enum(
  [
    "Boiadeiro",
    "Baianos",
    "Erê",
    "Marinheiro",
    "Preto velho",
    "Esquerda - Exu",
    "Esquerda - Pomba Gira",
  ],
  {
    message: "Linha da gira é obrigatória",
  },
);

const fieldsFormSchema = z.object({
  name: girasType,
  responsible_id: z.string({
    required_error: "Informe um filho responsável pela lista",
  }),
});

type FieldsFormSchema = z.infer<typeof fieldsFormSchema>;

export function FormGira() {
  const { control, handleSubmit, formState } = useForm<FieldsFormSchema>({
    resolver: zodResolver(fieldsFormSchema),
  });

  async function getSons(): Promise<Son[]> {
    return await fetch("/api/sons").then((res) => res.json());
  }

  async function onSubmit(data: FieldsFormSchema) {
    const body: CreateGirasRequest = data;
    await fetch("/api/giras", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  const sonsFetch = useQuery({
    queryKey: ["get_sons"],
    queryFn: getSons,
  });
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="responsible_id"
        render={({ field }) => {
          return (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Filho" />
              </SelectTrigger>

              <SelectContent>
                {sonsFetch.data?.map((son) => (
                  <SelectItem key={son.id} value={String(son.id)}>
                    {son.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        }}
      />
      {formState.errors.responsible_id && (
        <p className="text-red-400 text-sm">
          {formState.errors.responsible_id.message}
        </p>
      )}

      <Controller
        control={control}
        name="name"
        render={({ field }) => {
          return (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Linha" />
              </SelectTrigger>

              <SelectContent>
                {Object.entries(girasType.Values).map(([gira]) => (
                  <SelectItem key={gira} value={gira}>
                    {gira}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        }}
      />
      {formState.errors.name && (
        <p className="text-red-400 text-sm">{formState.errors.name.message}</p>
      )}

      <div className="flex flex-1 flex-col gap-2 pt-4">
        <Button
          type="submit"
          className="flex-1"
          isLoading={formState.isSubmitting}
        >
          Cadastrar
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="ghost" className="flex-1">
            Cancelar
          </Button>
        </DialogClose>
      </div>
    </form>
  );
}
