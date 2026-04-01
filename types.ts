export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  address: string;
  linkedin?: string;
}

export interface Vision {
  headline: string;
  content: string;
}

export interface PolicyItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface CalorificItem {
  name: string;
  value: number;
  color: string;
}

export interface ModelStep {
  title: string;
  desc: string;
  iconName: string;
}

export interface AppData {
  vision: Vision;
  products: Product[];
  stats: Stat[];
  founder: Founder;
  policy: PolicyItem[];
  calorificData: CalorificItem[];
  modelSteps: ModelStep[];
  contactEmail: string;
  contactAddress: string;
}