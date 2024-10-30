export class GetAllAssistanceResponse {
	public readonly id: string;
	public readonly name: string;

	constructor(props: GetAllAssistanceResponse) {
		Object.assign(this, props);
	}
}
