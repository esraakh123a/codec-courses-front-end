export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  coursesIncluded: string[]; // IDs of courses
  targetAudience?: string;
  validUntil?: Date;
}
