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
