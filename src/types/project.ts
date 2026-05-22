// src/types/project.ts

export type Project = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  status: "draft" | "blueprint_ready" | "documents_ready" | "qa_ready" | "exported";
  brief: TeachingBrief;
  blueprint?: LearningBlueprint;
  documentPack?: DocumentPack;
  adaptedVersions?: {
    level: "basic" | "standard" | "advanced";
    studentModule: string;
    facilitatorGuide: string;
    worksheet: string;
  };
  qaReport?: QAReport;
  isDemo?: boolean;
};

export type TeachingBrief = {
  documentType: "school_module" | "bootcamp_module" | "corporate_training" | "workshop" | "coursebook";
  topic: string;
  audience: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  finalOutcome: string;
  languageStyle: string;
  localContext: string[];
  constraints?: string[];
};

export type LearningBlueprint = {
  summary: string;
  learningObjectives: string[];
  prerequisites: string[];
  sessionPlan: SessionPlan[];
  assessmentPlan: string[];
  finalProject: FinalProject;
};

export type SessionPlan = {
  sessionTitle: string;
  duration: string;
  objectives: string[];
  activities: string[];
  outputs: string[];
};

export type FinalProject = {
  title: string;
  description: string;
  deliverables: string[];
  criteria: string[];
};

export type DocumentPack = {
  studentModule: string;
  facilitatorGuide: string;
  worksheet: string;
  quiz: QuizItem[];
  rubric: RubricItem[];
  slideOutline?: string;
  remedialMaterial?: string;
  advancedChallenge?: string;
};

export type QuizItem = {
  question: string;
  type: "multiple_choice" | "short_answer" | "case_study";
  options?: string[];
  answer: string;
  explanation: string;
  difficulty: "basic" | "standard" | "advanced";
};

export type RubricItem = {
  criterion: string;
  excellent: string;
  good: string;
  needsImprovement: string;
  weight: number; // percentage
};

export type QAReport = {
  score: number; // 0-100
  summary: string;
  strengths: string[];
  issues: QAIssue[];
};

export type QAIssue = {
  category: "alignment" | "difficulty" | "duration" | "clarity" | "assessment" | "rubric" | "local_relevance" | "safety";
  severity: "low" | "medium" | "high";
  message: string;
  suggestion: string;
};
