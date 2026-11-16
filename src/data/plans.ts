import { FaqItem, FeatureItem, LicenseOrder, PricingPlan, WorkflowStage } from '../types';

export const BKASH_NUMBER = '01714646907';
export const WHATSAPP_NUMBER = '8801983245897';
export const WHATSAPP_DISPLAY = '+880 1983-245897';
export const WHATSAPP_URL = 'https://wa.me/8801983245897';

export function getWhatsAppUrl(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const FEATURES: FeatureItem[] = [
  {
    number: '01',
    title: 'Automatic date booking',
    description:
      'Sweeps every available date across this month and next, retrying relentlessly until a payment page is reached.',
    colSpanClass: 'md:col-span-2',
  },
  {
    number: '02',
    title: 'Cloudflare handling',
    description:
      'Waits intelligently for the human-verification Turnstile checkbox before and after each date selection.',
    colSpanClass: 'md:col-span-1',
  },
  {
    number: '03',
    title: 'Reliable Auto smart file upload',
    description:
      'Uploads the primary applicant first, in order, and cross-checks that every file landed before continuing.',
    colSpanClass: 'md:col-span-1',
  },
  {
    number: '04',
    title: 'Smart Proxy IP — Better Chances To Slot Booking',
    description:
      'প্রতিটি লগইন সেশনে Dedicated Proxy IP ব্যবহার করে কানেকশন স্থিতিশীল রাখুন, Session Reliability বাড়ান এবং সফল Slot Booking-এর সুযোগ সর্বোচ্চ করুন।',
    colSpanClass: 'md:col-span-2',
  },
  {
    number: '05',
    title: 'Payment link capture',
    description:
      'Detects the payment redirect and network link (`getPaymentLink` / `payment/init`) and surfaces it instantly for one-click copy.',
    colSpanClass: 'md:col-span-1',
  },
  {
    number: '06',
    title: '৩টি Profile Set — এক Extension-এ',
    description:
      'একটি Extension-এর মধ্যেই ৩টি আলাদা Login Profile সংরক্ষণ ও পরিচালনা করুন। এক ক্লিকেই Profile Switch করুন, বারবার Login করার ঝামেলা কমান এবং অনেক সময় বাঁচান।',
    colSpanClass: 'md:col-span-2',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-30d',
    tierLabel: 'Starter · 30 Days',
    name: 'PRO 30 DAYS — PROXY IP & OTP BYPASS',
    shortName: '30 Days Plan',
    priceBdt: 3500,
    priceFormatted: '৳3,500',
    duration: '30 days',
    devicesSummary: '1 device · 3 browsers',
    features: [
      '1 device with 3 browsers support (30 days validity)',
      'Continuous date auto-booking and payment link copy from network Tab',
      'Cloudflare ভেরিফিকেশন হ্যান্ডলিং ও দ্রুত ফাইল আপলোড',
      'প্রতিটি লগইন সেশনে Dedicated Proxy IP ব্যবহার করে কানেকশন স্থিতিশীল রাখুন ও সফল Slot Booking-এর সুযোগ বাড়ান।',
      'একটি Extension-এর মধ্যেই ৩টি আলাদা Login Profile সংরক্ষণ ও এক ক্লিকেই Profile Switch করুন।',
      '১ মাসের নিয়মিত আপডেট ও ২৪/৭ কাস্টমার সাপোর্ট',
    ],
    ctaLabel: 'Buy 30 Days Plan',
  },
  {
    id: 'plan-60d',
    tierLabel: 'Standard · 60 Days',
    name: 'PRO 60 DAYS — HIGH SPEED VPS & OTP BYPASS',
    shortName: '60 Days Plan',
    priceBdt: 6000,
    priceFormatted: '৳6,000',
    duration: '60 days',
    devicesSummary: '2 devices · 6 browsers',
    features: [
      '2 devices with 6 browsers support (60 days validity)',
      'Continuous date auto-booking and payment link copy from network Tab',
      'Cloudflare ভেরিফিকেশন হ্যান্ডলিং ও দ্রুত ফাইল আপলোড',
      'প্রতিটি লগইন সেশনে Dedicated Proxy IP ব্যবহার করে কানেকশন স্থিতিশীল রাখুন, Session Reliability বাড়ান।',
      'একটি Extension-এর মধ্যেই ৩টি আলাদা Login Profile সংরক্ষণ ও এক ক্লিকেই Profile Switch সুবিধা।',
      'বিশেষ ট্রেনিং টিপস ও কৌশল শেয়ারের জন্য Special প্রাইভেট গ্রুপ',
      '২ মাসের নিয়মিত আপডেট ও ২৪/৭ কাস্টমার সাপোর্ট',
    ],
    ctaLabel: 'Buy 60 Days Plan',
  },
  {
    id: 'plan-6m',
    tierLabel: 'Extended · 6 Months',
    name: 'PRO 6 MONTHS — MULTI-PC & OTP BYPASS',
    shortName: '6 Months Plan',
    priceBdt: 10000,
    priceFormatted: '৳10,000',
    duration: '6 Months',
    devicesSummary: '3 devices · 9 browsers',
    features: [
      '3 devices with 9 browsers support (6 Months validity)',
      'Continuous date auto-booking and instant payment link copy from network Tab',
      'Cloudflare ভেরিফিকেশন হ্যান্ডলিং ও দ্রুত ফাইল আপলোড',
      'Dedicated Proxy IP ও OTP Bypass অ্যাপস সাপোর্ট',
      'একটি Extension-এ ৩টি আলাদা Login Profile + দ্রুত Profile Switch সুবিধা',
      '৬ মাসের নিয়মিত আপডেট, Special প্রাইভেট গ্রুপ ও ২৪/৭ দ্রুত সাপোর্ট',
    ],
    ctaLabel: 'Buy 6 Months Plan',
  },
  {
    id: 'plan-1y',
    tierLabel: 'Annual Agency · 1 Year',
    name: 'PRO 1 YEAR — HIGH SPEED AGENCY EDITION',
    shortName: '1 Year Plan',
    priceBdt: 15000,
    priceFormatted: '৳15,000',
    duration: '1 Year',
    devicesSummary: '4 devices · 12 browsers',
    features: [
      '4 devices with 12 browsers simultaneous automation support (1 full year)',
      'Continuous date auto-booking and instant payment link capture from network Tab',
      'Cloudflare ভেরিফিকেশন হ্যান্ডলিং, অটো ফাইল আপলোড ও Smart Proxy IP সাপোর্ট',
      'একটি Extension-এ ৩টি আলাদা Login Profile + দ্রুত Profile Switch সুবিধা',
      'OTP Bypass Apps ও প্রাইভেট ট্রেনিং গ্রুপের সম্পূর্ণ অ্যাক্সেস',
      '১ বছরের সকল মেজর আপডেট ও অগ্রাধিকার ২৪/৭ কাস্টমার সাপোর্ট',
    ],
    ctaLabel: 'Buy 1 Year Plan',
  },
  {
    id: 'lifetime-pro',
    tierLabel: 'One-Time Payment · No Renewal',
    name: 'LIFETIME PRO EDITION — UNLIMITED ACCESS',
    shortName: 'Lifetime Plan',
    priceBdt: 25000,
    priceFormatted: '৳25,000',
    duration: 'Lifetime',
    devicesSummary: '5 devices · 15 browsers',
    isFeatured: true,
    isLifetime: true,
    features: [
      'Lifetime License — এককালীন পেমেন্ট, কোনো মাসিক বা বাৎসরিক রিনিউয়াল ঝামেলা নেই',
      '5 devices with 15 browsers simultaneous automation support',
      'Continuous date auto-booking and instant payment link capture from network Tab',
      'Lifetime Chrome Extension updates (v15.5 ও ভবিষ্যতের সকল আপডেট সম্পূর্ণ ফ্রি)',
      'Cloudflare ভেরিফিকেশন হ্যান্ডলিং, অটো ফাইল আপলোড ও Smart Proxy IP সাপোর্ট',
      'একটি Extension-এ ৩টি আলাদা Login Profile + দ্রুত Profile Switch সুবিধা',
      'OTP Bypass Apps ও VIP সেটআপ গাইডলাইনের সম্পূর্ণ অ্যাক্সেস',
      'VIP প্রাইভেট গ্রুপ ও ২৪/৭ অগ্রাধিকার কাস্টমার সাপোর্ট',
    ],
    ctaLabel: 'Get Lifetime License',
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 1,
    name: 'Login',
    bnName: 'অটো লগইন',
    detail: 'Selects saved Profile (1, 2, or 3) and signs in over dedicated Proxy IP.',
    networkStatus: 'POST /auth/login · 200 OK',
  },
  {
    step: 2,
    name: 'OTP',
    bnName: 'OTP ভেরিফিকেশন',
    detail: 'Triggers OTP dispatch and syncs directly with OTP Bypass helper app.',
    networkStatus: 'POST /auth/send-otp · 200 OK',
  },
  {
    step: 3,
    name: 'OTP Success',
    bnName: 'সেশন নিশ্চিত',
    detail: 'Validates session token and locks browser cookies for uninterrupted run.',
    networkStatus: 'POST /auth/verify-otp · 200 OK',
  },
  {
    step: 4,
    name: 'Popup',
    bnName: 'অ্যালার্ট হ্যান্ডলিং',
    detail: 'Automatically clears notice overlays and initializes Webfile slots.',
    networkStatus: 'DOM Ready · 120ms',
  },
  {
    step: 5,
    name: 'Upload',
    bnName: 'স্মার্ট ফাইল আপলোড',
    detail: 'Uploads primary & co-applicant documents sequentially with integrity checks.',
    networkStatus: 'POST /webfiles/upload · 2/2 Verified',
  },
  {
    step: 6,
    name: 'Confirm Info',
    bnName: 'তথ্য যাচাই',
    detail: 'Confirms applicant details and advances straight to mission selection.',
    networkStatus: 'POST /application/confirm · 200 OK',
  },
  {
    step: 7,
    name: 'Mission/Center',
    bnName: 'মিশন ও সেন্টার',
    detail: 'Applies configured IVAC center, visa category, and Cloudflare Turnstile token.',
    networkStatus: 'Turnstile Token · Verified',
  },
  {
    step: 8,
    name: 'Dates & Pay Link',
    bnName: 'তারিখ ও পেমেন্ট লিংক',
    detail: 'Sweeps open dates, captures `getPaymentLink`, and alerts immediately with Copy Link.',
    networkStatus: 'GET /getPaymentLink · 200 Captured',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-lifetime',
    question: 'What is included in the Lifetime package compared to 30-day, 60-day, 6-month, and 1-year plans?',
    answer:
      'The Lifetime Pro Edition (৳25,000 one-time payment) never expires and requires zero renewals. It supports up to 5 devices and 15 browsers, includes all future extension version updates beyond v15.5, OTP bypass tools, and priority VIP support.',
  },
  {
    id: 'faq-payment',
    question: 'How do I buy a license and receive my activation key?',
    answer:
      'Click any package button to message us directly on WhatsApp (+8801983245897 / https://wa.me/8801983245897) with your chosen plan. Our team confirms payment and delivers your activation key and Chrome extension setup bundle within minutes.',
  },
  {
    id: 'faq-profiles',
    question: 'How do the 3 Login Profiles inside a single extension work?',
    answer:
      'You can store 3 separate applicant phone/password credentials inside the extension. With one click on the Profile selector, you can switch accounts without re-typing logins or losing Webfile configurations.',
  },
  {
    id: 'faq-proxy',
    question: 'Why does Proxy IP & Cloudflare handling improve slot success?',
    answer:
      'During peak IVAC slot windows, shared connections frequently hit rate limits or drop sessions. Dedicated Proxy IP keeps each browser session isolated while Turnstile handling pauses and resumes cleanly before and after date retries.',
  },
];

export const DEMO_LICENSES: LicenseOrder[] = [
  {
    orderId: 'ORD-88412',
    activationKey: 'IVAC-LIFE-1550-PROX-9981',
    planId: 'lifetime-pro',
    planName: 'LIFETIME PRO EDITION — UNLIMITED ACCESS',
    duration: 'Lifetime',
    priceFormatted: '৳25,000',
    customerName: 'Demo User (Lifetime)',
    phone: '01711000000',
    email: 'demo@ivacpro.local',
    bkashSender: '01711000000',
    trxId: 'BKS9L1FET1ME',
    status: 'Active',
    createdAt: '2026-10-01',
    expiresAt: 'Never expires (Lifetime)',
    devicesAllowed: 5,
    browsersAllowed: 15,
  },
];
