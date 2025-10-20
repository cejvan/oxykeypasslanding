// src/types/Category.ts
export type Category = {
  _id: string;
  name: string;
  title: string;
  subTitle: string;
  url: string;
  meta: string;
  _html: string;
  isMain: boolean;
  isActive: boolean;
  count: number;
  filters: unknown[];
  created: string;
};
