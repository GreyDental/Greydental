export type ScorableQuestion = {
  id: string;
  correct_index: number | null;
};

/**
 * Score an MCQ assessment as a percentage (0–100).
 *
 * A question only counts when the submitted index matches `correct_index`
 * exactly. Unanswered questions are incorrect. An assessment with no
 * questions scores 0 instead of dividing by zero.
 */
export function scoreAnswers(
  questions: readonly ScorableQuestion[],
  answers: Record<string, number>,
): number {
  if (questions.length === 0) return 0;

  let correct = 0;
  for (const question of questions) {
    if (answers[question.id] === question.correct_index) correct += 1;
  }

  return Math.round((correct / questions.length) * 100);
}
