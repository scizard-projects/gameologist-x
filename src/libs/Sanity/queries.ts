const postFields = `
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  authors[]->{ 
    name,
    "image": image.asset->url,
    "slug": slug.current
  },
  "image": image.asset->url,
  "imageCredits": image.credits,
  "imageBlurData": image.asset->metadata.lqip,
  categories[]->{ 
    name,
    "color": color.hex,
    "slug": slug.current
  },
  "estReadingTime": round(length(pt::text(content)) / 5 / 180 ),
  publishedAt
`;

export const postsQuery = (limit: number) => `
  *[_type == "post"]
  | order(publishedAt desc)
  [0..${limit - 1}] {
    ${postFields}
  }
`;

export const postBySlugQuery = () => `
  *[_type == "post" && slug.current ==  $slug][0] {
    ${postFields},
    content[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        "blurDataURL": asset->metadata.lqip
      },
      markDefs[] {
        ...,
        _type == "post" => {
          "post": @.reference->slug.current,
          "category": ^.^.categories[0]->slug.current
        }
      }
    },
  }
`;
