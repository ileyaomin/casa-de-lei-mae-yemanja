"use client";

import { GetAllAssistanceResponse } from "@/app/api/internal/response/assistance.response";
import { useQuery } from "@tanstack/react-query";

export function ListAssistance(props: { giraId: string }) {
	async function getAssistanceByGiraId(): Promise<GetAllAssistanceResponse[]> {
		return await fetch(`/api/assistance/${props.giraId}`).then((res) =>
			res.json(),
		);
	}

	const getAssistanceQuery = useQuery({
		queryKey: ["get_assistance_by_gira_id"],
		queryFn: getAssistanceByGiraId,
	});

	return (
		<ul>
			{getAssistanceQuery.data?.map((assistant) => (
				<li key={assistant.id}>{assistant.name}</li>
			))}
		</ul>
	);
}
