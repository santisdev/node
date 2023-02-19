# node_l

# POST

localhost:3000/admin/add-product
body:

`````json{
    "title": "book1",
    "imageUrl": "https>//image.url",
    "description": "This a new book",
    "price": "400"
}```

localhost:3000/cart
body:
````json
{
    "productId":"product Id"
}
```

localhost:3000/admin/edit-product
```json{
    "id": "id",
    "title": "book1",
    "imageUrl": "https>//image.url",
    "description": "This a new book edited",
    "price": "800"
}```

localhost:3000/admin/delete-product
```json{
    "id": "id"
}```

# GET

localhost:3000/products/prodId
localhost:3000/admin/edit-product/prodID
`````
