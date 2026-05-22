import { Project } from "@/types/project";
import { seedSampleProject } from "./mockData";
import { seedSMPProject } from "./mockDataSMP";
import { seedSMAProject } from "./mockDataSMA";
import { seedActiveSDProject } from "./mockDataSD";

const STORAGE_KEY = "ramuajar_projects";

export function getProjects(): Project[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let parsed: Project[] = [];
    if (raw) {
      try {
        parsed = JSON.parse(raw) as Project[];
      } catch (e) {
        parsed = [];
      }
    }

    // Always use the latest seeded templates for the demo projects
    const freshDemoCyber = seedSampleProject();
    const freshDemoSmp = seedSMPProject();
    const freshDemoSma = seedSMAProject();
    
    const demoIds = new Set([freshDemoCyber.id, freshDemoSmp.id, freshDemoSma.id]);

    // Filter out old demo versions if any existed under these IDs
    const userProjects = parsed.filter(p => p && p.id && !demoIds.has(p.id));

    // Seed the active "try it out" SD project if it hasn't been seeded yet
    if (!localStorage.getItem("ramuajar_sd_seeded")) {
      const activeSD = seedActiveSDProject();
      if (!userProjects.find(p => p.id === activeSD.id)) {
        userProjects.unshift(activeSD);
      }
      localStorage.setItem("ramuajar_sd_seeded", "true");
    }

    // Sort user projects by most recently updated
    userProjects.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    // Order: User projects first (including the active SD project), then Demos
    const finalProjects = [...userProjects, freshDemoCyber, freshDemoSma, freshDemoSmp];

    // Save back to localStorage to keep it persistent and synchronized
    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalProjects));

    return finalProjects;
  } catch (e) {
    console.error("Error reading projects from localStorage:", e);
    return [];
  }
}

export function saveProjects(projects: Project[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (e) {
    console.error("Error saving projects to localStorage:", e);
  }
}

export function getProjectById(id: string): Project | null {
  const projects = getProjects();
  return projects.find((p) => p.id === id) || null;
}

export function saveProject(project: Project): void {
  if (project.isDemo) {
    // Prevent saving/overwriting demo projects to maintain their read-only state
    return;
  }
  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === project.id);
  
  const updatedProject = {
    ...project,
    updatedAt: new Date().toISOString()
  };

  if (index >= 0) {
    projects[index] = updatedProject;
  } else {
    projects.push(updatedProject);
  }
  saveProjects(projects);
}

export function deleteProject(id: string): void {
  const demoIds = ["demo-cybersecurity", "demo-smp-biologi", "demo-sma-ekonomi"];
  if (demoIds.includes(id)) {
    // Prevent deletion of demo projects
    return;
  }
  const projects = getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  saveProjects(filtered);
}

export function createNewProject(title: string): Project {
  const newProj: Project = {
    id: `project-${Date.now()}`,
    title: title || "Project Ramuan Baru",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "draft",
    brief: {
      documentType: "school_module",
      topic: "",
      audience: "",
      duration: "",
      level: "beginner",
      finalOutcome: "",
      languageStyle: "Bahasa Indonesia",
      localContext: []
    }
  };
  saveProject(newProj);
  return newProj;
}
