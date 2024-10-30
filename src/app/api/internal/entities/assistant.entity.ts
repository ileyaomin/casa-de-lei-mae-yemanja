export const assistantTypeEnum = ["default", "child", "old"] as const;

export type AssistantTypeEnum = (typeof assistantTypeEnum)[number];

export class Assistant {
  public readonly id?: string;
  public name: string;
  public email: string;
  public address: string;
  public reason: string;
  public type: AssistantTypeEnum;
  public whoIndicated: string | null;
  public createdAt?: Date;

  constructor(props: Assistant) {
    Object.assign(this, props);
  }
}
