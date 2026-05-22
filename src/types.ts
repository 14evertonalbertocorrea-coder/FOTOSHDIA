export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  neonColor: 'blue' | 'purple' | 'cyan' | 'magenta';
}

export interface PricingPlan {
  id: string;
  name: string;
  photosCount: number;
  price: string;
  pricePerPhoto: string;
  features: string[];
  isPopular?: boolean;
  whatsappMessage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SliderExample {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  originalUrl: string;
  beforeFilterClass: string; // Dynamic CSS filters representing the low quality
}
