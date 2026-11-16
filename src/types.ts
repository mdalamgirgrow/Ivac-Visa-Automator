export type PlanDuration = '30 days' | '60 days' | '6 Months' | '1 Year' | 'Lifetime';

export interface PricingPlan {
  id: string;
  tierLabel: string;
  name: string;
  shortName: string;
  priceBdt: number;
  priceFormatted: string;
  duration: PlanDuration;
  devicesSummary: string;
  isFeatured?: boolean;
  isLifetime?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
  colSpanClass: string;
}

export interface WorkflowStage {
  step: number;
  name: string;
  bnName: string;
  detail: string;
  networkStatus: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LicenseOrder {
  orderId: string;
  activationKey: string;
  planId: string;
  planName: string;
  duration: PlanDuration;
  priceFormatted: string;
  customerName: string;
  phone: string;
  email: string;
  bkashSender: string;
  trxId: string;
  status: 'Active' | 'Pending Verification';
  createdAt: string;
  expiresAt: string;
  devicesAllowed: number;
  browsersAllowed: number;
}
