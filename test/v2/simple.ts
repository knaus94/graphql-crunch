import { JSON } from "../../src/JSON";
import { crunch, uncrunch, CrunchedData } from "../../src";

const baseCases: [string, JSON, CrunchedData][] = [
  ["null primitive", null, [null]],
  ["number primitive", 0, [1]],
  ["boolean primitive", true, [true]],
  ["string primitive", "string", ["string"]],
  ["empty array", [], [[]]],
  ["single-item array", [null], [[null]]],
  [
    "multi-primitive all distinct array",
    [null, 0, true, "string"],
    [[null, 1, true, "string"]],
  ],
  [
    "multi-primitive repeated array",
    [true, true, true, true],
    [[true, true, true, true]],
  ],
  ["one-level nested array", [[1, 2, 3]], [0, [[3, 5, 7]]]],
  ["two-level nested array", [[[1, 2, 3]]], [0, 0, [[[3, 5, 7]]]]],
  ["empty object", {}, [{}]],
  ["single-item object", { a: null }, [{ a: null }]],
  [
    "multi-item all distinct object",
    { a: null, b: 0, c: true, d: "string" },
    [{ a: null, b: 1, c: true, d: "string" }],
  ],
  [
    "multi-item repeated object",
    { a: null, b: null, c: null, d: null },
    [{ a: null, b: null, c: null, d: null }],
  ],
  [
    "complex array",
    [{ a: true, b: [1, 2, 3] }, [1, 2, 3]],
    [[3, 5, 7], 0, [{ a: true, b: 0 }, 0]],
  ],
  [
    "complex object",
    { a: true, b: [1, 2, 3], c: { a: true, b: [1, 2, 3] } },
    [[3, 5, 7], 0, { a: true, b: 0, c: { a: true, b: 0 } }],
  ],
  ["empty object/array", { a: {}, b: [] }, [0, 0, { a: {}, b: [] }]],
  [
    "date",
    { a: new Date("2021-03-31T18:34:09.000Z") },
    [{ a: new Date("2021-03-31T18:34:09.000Z") }],
  ],
];

baseCases.forEach(([description, uncrunched, crunched]) => {
  test(`Crunching ${description}.`, () => {
    expect(crunch(uncrunched)).toEqual(crunched);
  });
  test(`Uncrunching ${description}.`, () => {
    expect(uncrunch(crunched)).toEqual(uncrunched);
  });
});
