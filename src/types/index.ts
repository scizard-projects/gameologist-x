export interface Short {
  path: string;
}

export interface Ads {
  unitId: string;
  size: string;
}

export interface Section {
  type: string;
  title?: string;
  compact?: boolean;
  isPackage?: boolean;
  horizontal?: boolean;
  isFirstPostFeatured?: boolean;
  length: number;
  data?: Post[] | Ads[] | Short[];
}

export interface Author {
  image: any;
  name: string;
  slug: string;
}

export interface Category {
  color: string;
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  image: string;
  imageCredits: string;
  imageBlurData: string;
  excerpt: string;
  content?: any; // TODO set content
  estReadingTime: number;
  categories: Category[];
  authors: Author[];
  publishedAt: string;
}
