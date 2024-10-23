import { FormGira } from "@/components/form-gira";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
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
					<DialogDescription>Selecione um filho de santo e a gira de hoje</DialogDescription>
        </DialogHeader>

        <FormGira />
      </DialogContent>
    </Dialog>
  );
}
