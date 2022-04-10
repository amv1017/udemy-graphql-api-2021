export const people = [
  {
    id: 1,
    name: 'Mike',
    age: 34,
    gender: 'male',
  },
  {
    id: 2,
    name: 'Jill',
    age: 33,
    gender: 'female',
  },
  {
    id: 3,
    name: 'Simon',
    age: 36,
    gender: 'male',
  },
  {
    id: 4,
    name: 'Amanda',
    age: 28,
    gender: 'female',
  },
  {
    id: 5,
    name: 'Jonas',
    age: 38,
    gender: 'male',
  }
]

export const getById = (id) => {
  return people.find(p => p.id === id)
}
