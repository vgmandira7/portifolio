import {
  Box,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Accent } from "@/lib/accent";

export interface StackItem {
  name: string;
  icon: LucideIcon;
  accent: Accent;
  rotate: number;
}

export const stack: StackItem[] = [
  { name: "React Native", icon: Smartphone, accent: "sky", rotate: -1.5 },
  { name: "Node.js", icon: Server, accent: "lime", rotate: 1 },
  { name: "Express", icon: Layers, accent: "yellow", rotate: -1 },
  { name: "Python", icon: Code2, accent: "orange", rotate: 1.5 },
  { name: "PostgreSQL", icon: Database, accent: "blue", rotate: -1 },
  { name: "Docker", icon: Box, accent: "cyan", rotate: 1 },
  { name: "Prisma", icon: Zap, accent: "mint", rotate: -1.5 },
  { name: "TypeScript", icon: Braces, accent: "sky", rotate: 1 },
  { name: "Git / CI-CD", icon: GitBranch, accent: "pink", rotate: -1 },
  { name: "MongoDB", icon: Database, accent: "lime", rotate: -1 }
];
