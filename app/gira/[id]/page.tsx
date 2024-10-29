import { FormAddAssistant } from "@/components/assitance/form-add-assistant";
import { ListAssistance } from "@/components/assitance/list-assistance";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default async function Gira({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <Dialog>
      <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold capitalize">Gira</span>

          <DialogTrigger asChild>
            <Button>Primeira vez</Button>
          </DialogTrigger>
        </div>
				<FormAddAssistant />

        <ListAssistance />
      </div>
    </Dialog>
  );
}
