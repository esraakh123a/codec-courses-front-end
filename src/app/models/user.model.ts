export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  city?: string;
  country?: string;
  profilePictureURL?: string;
}
