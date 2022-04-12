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
