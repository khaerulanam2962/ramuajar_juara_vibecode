import { z } from "zod";

export const teachingBriefZodSchema = z.object({
  documentType: z.enum(["school_module", "bootcamp_module", "corporate_training", "workshop", "coursebook"]),
  topic: z.string(),
  audience: z.string(),
  duration: z.string(),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  finalOutcome: z.string(),
  languageStyle: z.string(),
  localContext: z.array(z.string()),
  constraints: z.array(z.string()).optional()
});

export const sessionPlanZodSchema = z.object({
  sessionTitle: z.string(),
  duration: z.string(),
  objectives: z.array(z.string()),
  activities: z.array(z.string()),
  outputs: z.array(z.string())
});

export const finalProjectZodSchema = z.object({
  title: z.string(),
  description: z.string(),
  deliverables: z.array(z.string()),
  criteria: z.array(z.string())
});

export const blueprintZodSchema = z.object({
  summary: z.string(),
  learningObjectives: z.array(z.string()),
  prerequisites: z.array(z.string()),
  sessionPlan: z.array(sessionPlanZodSchema),
  assessmentPlan: z.array(z.string()),
  finalProject: finalProjectZodSchema
});

export const quizItemZodSchema = z.object({
  question: z.string(),
  type: z.enum(["multiple_choice", "short_answer", "case_study"]),
  options: z.array(z.string()).optional(),
  answer: z.string(),
  explanation: z.string(),
  difficulty: z.enum(["basic", "standard", "advanced"])
});

export const rubricItemZodSchema = z.object({
  criterion: z.string(),
  excellent: z.string(),
  good: z.string(),
  needsImprovement: z.string(),
  weight: z.number()
});

export const documentPackZodSchema = z.object({
  studentModule: z.string().optional(),
  facilitatorGuide: z.string().optional(),
  worksheet: z.string().optional(),
  quiz: z.array(quizItemZodSchema).optional(),
  rubric: z.array(rubricItemZodSchema).optional(),
  slideOutline: z.string().optional(),
  remedialMaterial: z.string().optional(),
  advancedChallenge: z.string().optional()
});

export const qaIssueZodSchema = z.object({
  category: z.enum([
    "alignment",
    "difficulty",
    "duration",
    "clarity",
    "assessment",
    "rubric",
    "local_relevance",
    "safety"
  ]),
  severity: z.enum(["low", "medium", "high"]),
  message: z.string(),
  suggestion: z.string()
});

export const qaReportZodSchema = z.object({
  score: z.number(),
  summary: z.string(),
  strengths: z.array(z.string()),
  issues: z.array(qaIssueZodSchema)
});

export const applyQAFixesResponseSchema = z.object({
  blueprint: blueprintZodSchema.optional(),
  documentPack: documentPackZodSchema.optional()
});
