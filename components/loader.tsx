import { LoaderCircle } from "lucide-react";

export function Loader() {
  return (
    <div className="w-5 h-5 animate-spin flex items-center justify-center">
      <LoaderCircle />
    </div>
  );
}
