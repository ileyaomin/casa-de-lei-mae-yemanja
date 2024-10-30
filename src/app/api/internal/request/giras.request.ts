import { z } from "zod";

export class CreateGirasRequest {
  public name: string;
  public responsible_id: string;

  constructor(props: CreateGirasRequest) {
    z.object({
      name: z.string(),
      responsible_id: z.string(),
    }).parse(props);

    Object.assign(this, props);
  }
}

export class AddAssistantToGiraRequest {
  public giraId: string;
  public assistantId: string;

  constructor(props: AddAssistantToGiraRequest) {
    z.object({
      giraId: z.string(),
      assistantId: z.string(),
    }).parse(props);

    Object.assign(this, props);
  }
}
