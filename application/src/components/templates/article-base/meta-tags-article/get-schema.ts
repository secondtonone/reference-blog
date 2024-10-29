import { dropTags, getDate, getReplacedBy } from '~/utils';
import { PageViewModel } from '~/view-model';

const cleanSchemaValue = (text: string) => getReplacedBy(dropTags(text), [[/"/g, '“']]);

interface Props {
  page: PageViewModel,
  appUrl?: string
}

const getSchema = ({
  page,
  appUrl = 'https://example.com'
}: Props) => {
  const {
    url,
    title = '',
    author,
    editedAt,
    category,
    extraImage,
    publishedAt,
    previewImage,
    metaDescription = '',
  } = page;

  const parsedPublishedAt = getDate(publishedAt, '');
  const parsedEditedAt = editedAt ? getDate(editedAt, '') : parsedPublishedAt;

  const cleanedTitle = cleanSchemaValue(title);
  const cleanedDesc = cleanSchemaValue(metaDescription);

  const schemaPerson = `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "image": {
        "@type": "ImageObject",
        "url": "${author?.photo ?? ''}"
      },
      "url": "${appUrl}/user/${author?.id ?? ''}",
      "name": "${author?.name ?? ''}"
    }
  `;

  const schemaBreadcrumbs = `
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement":
      [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "${appUrl}",
            "name": "example"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item":
          {
            "@id": "${appUrl}/blog/",
            "name": "Blog"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item":
          {
            "@id": "${appUrl}/${url}/",
            "name": "${cleanedTitle}"
          }
        }
      ]
    }
  `;

  const schemaArticle = `
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "url": "${appUrl}/${url}/",
      "wordCount": "",
      "mainEntityOfPage": {
        "@type": "Webpage",
        "@id": "https://google.com/article"
      },
      "headline": "${cleanedTitle}",
      "image": {
        "@type": "ImageObject",
        "url": "${(extraImage || previewImage) ?? ''}",
        "width": "885px",
        "height": "375px"
      },
      "datePublished": "${parsedPublishedAt}",
      "dateModified": "${parsedEditedAt}",
      "description": "${cleanedDesc}",
      "identifier": "${url ?? ''}",
      "publisher": {
        "@type": "Organization",
        "name": "example",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cdn.example.com/__static__/example-logo-700.jpg",
          "width": "700",
          "height": "700"
        }
      },
      "author": {
        "@type": "Person",
        "name": "${author?.name ?? ''}",
        "identifier": "${author?.id ?? ''}"
      },
      "genre": "${category?.name ?? ''}"
    }
  `;

  return [
    schemaPerson,
    schemaBreadcrumbs,
    schemaArticle
  ].map(scheme => scheme?.trim());
};

export default getSchema;
