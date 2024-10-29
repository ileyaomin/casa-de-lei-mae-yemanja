import { ComponentProps } from "react";

interface CardItemProps {
  data: {
    name: string;
    son: string;
  };
}

type CustomTypeCardProps = CardItemProps & ComponentProps<"div">;

export function CardItem(props: CustomTypeCardProps) {
  return (
    <div
      className="flex flex-1 items-center justify-between py-4 px-4 border bg-background shadow-lg rounded-md hover:cursor-pointer hover:opacity-80 transition-all"
      {...props}
    >
      <span>{props.data.name}</span>
      <span>{props.data.son}</span>
    </div>
  );
}
