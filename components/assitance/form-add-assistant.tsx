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

const fieldsSchema = z.object({
  assistantId: z.coerce.string({
    required_error: "Assistente é obrigatório",
  }),
});

type FieldsSchemaProps = z.infer<typeof fieldsSchema>;

export function FormAddAssistant() {
  const { control, formState, handleSubmit } = useForm<FieldsSchemaProps>({
    resolver: zodResolver(fieldsSchema),
  });

  async function onSubmit(data: FieldsSchemaProps) {
    console.log(data);
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
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filho" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value={"1"}>1</SelectItem>
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
