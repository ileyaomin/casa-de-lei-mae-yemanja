export class GetAllGirasResponse {
  public readonly id: string;
  public name: string;
  public son: string;
  public createdAt: Date;

  constructor(props: GetAllGirasResponse) {
    Object.assign(this, props);
  }
}
