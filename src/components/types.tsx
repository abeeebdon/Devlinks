import { ReactNode } from "react";

export interface ReviewType {
  author: string;
  text: string;
  rating: number;
}

export interface Faq {
  qs: string;
  ans: string;
}

export interface OptionType {
  value: string;
  label: string;
  imageUrl: ReactNode;
}
