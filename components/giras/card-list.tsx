"use client";

import { GetAllGirasResponse } from "@/app/api/internal/response/giras.response";
import { CardItem } from "./card-item";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function CardList() {
  const router = useRouter();

  async function getAllGiras(): Promise<GetAllGirasResponse[]> {
    return await fetch("/api/giras").then((res) => res.json());
  }

  const girasQuery = useQuery({
    queryKey: ["get_all_giras"],
    queryFn: getAllGiras,
  });

  return (
    <div className="flex flex-col gap-2">
      {girasQuery.data?.map((gira) => (
        <CardItem
          key={gira.id}
					data={gira}
          onClick={() => router.push(`/gira/${gira.id}`)}
        />
      ))}
    </div>
  );
}
