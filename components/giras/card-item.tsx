interface CardItemProps {
  name: string;
  son: string;
}

export function CardItem(props: CardItemProps) {
  return (
    <div className="flex flex-1 items-center justify-between py-4 px-4 border bg-background shadow-lg rounded-md">
      <span>{props.name}</span>
      <span>{props.son}</span>
    </div>
  );
}
