export default async function Gira({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <span>{id}</span>;
}
