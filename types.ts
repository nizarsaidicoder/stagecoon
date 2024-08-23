export interface InternshipData {
  subject: string | null;
  tasks: string | null;
  company: string;
  postal_code: number | string;
  city: string;
  tutor_last_name: string | null;
  tutor_first_name: string | null;
  tutor_email: string | null;
  title: string | null;
  description: string | null;
  skills: string[];
  image: string;
}
