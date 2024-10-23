export class Son {
  public readonly id?: string;
  public name: string;
  public it_answer?: boolean;
  public createdAt?: Date;

  constructor(props: Son) {
    Object.assign(this, props);
  }
}
