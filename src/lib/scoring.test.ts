import { describe, expect, it } from "vitest";
import { scoreAnswers } from "@/lib/scoring";

const questions = [
  { id: "q1", correct_index: 0 },
  { id: "q2", correct_index: 2 },
  { id: "q3", correct_index: 1 },
  { id: "q4", correct_index: 3 },
];

describe("scoreAnswers", () => {
  it("returns 100 when every answer is correct", () => {
    expect(
      scoreAnswers(questions, { q1: 0, q2: 2, q3: 1, q4: 3 }),
    ).toBe(100);
  });

  it("returns 50 when half the answers are correct", () => {
    expect(scoreAnswers(questions, { q1: 0, q2: 0, q3: 1, q4: 0 })).toBe(50);
  });

  it("rounds a fractional score to the nearest integer", () => {
    expect(scoreAnswers(questions.slice(0, 3), { q1: 0, q2: 2, q3: 0 })).toBe(
      67,
    );
  });

  it("treats unanswered questions as incorrect", () => {
    expect(scoreAnswers(questions, { q1: 0 })).toBe(25);
  });

  it("scores zero when no questions are supplied", () => {
    expect(scoreAnswers([], { q1: 0 })).toBe(0);
  });

  it("ignores answers for questions that are not in the assessment", () => {
    expect(scoreAnswers(questions, { q1: 0, extra: 1 })).toBe(25);
  });

  it("distinguishes a correct index of 0 from an unanswered question", () => {
    expect(scoreAnswers([{ id: "q1", correct_index: 0 }], {})).toBe(0);
    expect(scoreAnswers([{ id: "q1", correct_index: 0 }], { q1: 0 })).toBe(100);
  });
});
