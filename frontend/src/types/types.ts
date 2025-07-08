export interface HeroHeading {
  lines: string[];
}

export interface HeroItems {
  heading: HeroHeading;
  subheading: string;
  description: string;
  freelancersCount: string;
}

export type MarqueeText = string[];
