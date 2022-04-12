Add movie:
```sh
mutation {
  addMovie(name: "Титаник", score: 9.9){
    name
  } 
}
```
---
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
