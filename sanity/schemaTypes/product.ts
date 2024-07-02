export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Product Price',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
