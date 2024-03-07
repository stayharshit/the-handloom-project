export default {
    name : 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type : 'image'}],
            options : {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'String'
        },
        {
            name: 'Slug',
            title: 'Slug',
            type: 'Slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type:'Number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'String'
        }
    ]
}