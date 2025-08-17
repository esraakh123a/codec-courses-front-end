export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  estimatedDuration: number;
  coverImageURL?: string;
}
