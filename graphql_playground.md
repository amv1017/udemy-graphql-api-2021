Get all movies:
```sh
query {
  movies {
    id
    name
    score
  }
}
```
---
Add movie:
```sh
mutation {
  addMovie(name: "Титаник", score: 9.9){
    name
  } 
}
```
---
Delete movie:
```sh
mutation {
  deleteMovie(id: 3) 
}
```
---
Get all movies (REST API wrapped in GraphQL):
```sh
query {
  movies {
    id
    title
    rating
    medium_cover_image
    summary
    language
  }
}
```
