const instanceBrandName = process.env.INSTANCE_BRAND_NAME || 'NodeTube';

const categories = [
  {
    name: 'all',
    displayName: 'All Uploads',
    subcategories: []
  },
  {
    name: 'overview',
    displayName: 'Category Overview',
    subcategories: []
  },
  {
    name: 'painting',
    displayName: 'Painting',
    subcategories: []

  },
  {
    name: 'photograph',
    displayName: 'Photograph',
    subcategories: []
  },
  {
    name: 'blogPost',
    displayName: 'Blog Post',
    subcategories: []
  },
  {
    name: 'uncategorized',
    displayName: 'Uncategorized',
    subcategories: []
  }
];

module.exports = categories;