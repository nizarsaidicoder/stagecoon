export interface InternshipData {
  id: number;
  subject: string | null;
  tasks: string | null;
  company: string;
  postal_code: string;
  city: string | null;
  tutor_last_name: string | null;
  tutor_first_name: string | null;
  tutor_email: string | null;
  title: string;
  description: string;
  skills: string[];
  image: string;
}
