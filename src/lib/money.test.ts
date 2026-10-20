import { describe, expect, it } from "vitest";
import { formatUsd } from "@/lib/money";

describe("formatUsd", () => {
  it("formats whole dollar amounts", () => {
    expect(formatUsd(26900)).toBe("$269.00");
  });

  it("formats single cents", () => {
    expect(formatUsd(1)).toBe("$0.01");
  });

  it("formats zero", () => {
    expect(formatUsd(0)).toBe("$0.00");
  });

  it("adds thousands separators", () => {
    expect(formatUsd(123456789)).toBe("$1,234,567.89");
  });
});
