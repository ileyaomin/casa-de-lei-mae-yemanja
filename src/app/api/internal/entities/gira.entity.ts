export class Gira {
  public readonly id?: string;
  public name: string;
  public responsible_id: string;
  public createdAt?: Date;

  constructor(props: Gira) {
    Object.assign(this, props);
  }
}
