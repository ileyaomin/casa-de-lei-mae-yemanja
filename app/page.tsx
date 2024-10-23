"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  async function getSons(): Promise<{ id: string; name: string }[]> {
    return await fetch("/api/sons").then((res) => res.json());
  }

  const sonsFetch = useQuery({
    queryKey: ["get_sons"],
    queryFn: getSons,
  });

  return (
    <Dialog>
      <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold capitalize">Giras</span>

          <DialogTrigger asChild>
            <Button>Cadastrar gira</Button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent className="top-[20%]">
        <DialogHeader>
          <DialogTitle>Nova gira</DialogTitle>
        </DialogHeader>

        <form>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filho" />
            </SelectTrigger>

            <SelectContent>
              {sonsFetch.data?.map((son) => (
                <SelectItem key={son.id} value={son.id}>
                  {son.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </form>
      </DialogContent>
    </Dialog>
  );
}
