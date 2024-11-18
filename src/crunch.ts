import { JSON } from "./JSON";
import * as v2 from "./v2";

export type UnversionedCrunchedData = JSON[]; // v1.0 did not embed version numbers
export type VersionedCrunchedData = { version: number; crunched: JSON[] };
// export type CrunchedData = UnversionedCrunchedData | VersionedCrunchedData;
export type CrunchedData = UnversionedCrunchedData;

export function crunch(data: JSON): CrunchedData {
  return v2.crunch(data);
}
