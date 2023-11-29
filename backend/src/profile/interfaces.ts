export interface ProfileData {
  content1: string;
  content2: string;
  name: { icon: string; title: string; context: string };
  contact: { icon: string; title: string; context: string };
  email: { icon: string; title: string; context: string };
  experience: Experience;
}

interface Experience {
  icon: string;
  title: string;
  context: string[];
}
