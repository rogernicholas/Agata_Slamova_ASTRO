export default {
    name: '4d',
    title: '4D – Gallery Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Section Text',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'images',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
            fields: [
              {
                name: 'title',
                title: 'Image Title',
                type: 'string',
              },
              {
                name: 'desc',
                title: 'Image Description',
                type: 'string',
              },
            ],
            validation: Rule =>
              Rule.custom(image =>
                image?.asset ? true : 'Image file is required'
              ),
          },
        ],
      },
    ],
  };
  