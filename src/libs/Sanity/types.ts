// TODO: Instead import image type from sanity
interface Image {}

// TODO: Instead import actual portable text type
interface PortableText {}

export interface Genre {
  name: string;
  slug: string;
}

export interface Platform {
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  slug: string;
  updatedAt: string;
  image: Image & { alt: string };
  bio: string;
}

export interface Category {
  name: string;
  slug: string;
  color: string;
  updatedAt: string;
}

export interface Tag {
  name: string;
  slug: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  authors: Author[];
  image: Image & { alt: string; credits: string | null; blurDataURL: string };
  content: PortableText;
  publishedAt: string;
  updatedAt: string;
  categories: Category[];
  tags: Tag[];
  platforms: Platform[];
  genre: Genre[];
  estReadingTime: string;
}
