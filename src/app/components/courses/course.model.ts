export interface Course {
  id?: string;
  title: string;
  description: string;
  duration: number;
  maxStudents: number;
  currentStudents: number;
  level: string;
  audience: string;
  mdContent?: string;
}