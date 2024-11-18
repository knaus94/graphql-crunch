import { CrunchedData } from "./crunch";
import { JSON } from "./JSON";
import * as v2 from "./v2";

export function uncrunch(data: CrunchedData): JSON {
  return v2.uncrunch(data);
}
