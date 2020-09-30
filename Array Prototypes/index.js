const arr = [
    { name: 'Krystian', age: 25, hobbies: ['Test1', 'Test2'] },
    { name: 'Paweł', age: 30, hobbies: ['Test2', 'Test3'] },
    { name: 'Karol', age: 25, hobbies: ['Test2', 'Test1']  },
    { name: 'Seba', age: 26, hobbies: []  }
  ]
  
//   1. Przefiltruj Wszystkich użytkowników którzy zaawierają literę K
//   2. Przefiltruj Wszystkich użytkowników którzy zaawierają literę Ł
//   3. Przefiltruj Wszystkich użytkowników którzy nie mają hobbies
//   4. Przefiltruj Wszystkich użytkowników którzy maja hobbies o wartosci test1 i test2
//   5. Przefiltruj Wszystkich użytkowników którzy maja hobbies o wartosci test3 lub nie mają hobbies




// const includes_K = arr.filter(item => item.includes('K') ? item : 'nie zawiera')
// console.log(Object.values(arr[0]).some(item => item.includes('K')), 'test')
// console.log(Object.values(arr[3]).some(item => console.log(item)))
// const filterByLetter = (array, letter) => {
//     return array.filter(obj => {
//         Object.values(obj).some(item => (String(item).includes(letter))) ? obj : 'brak'
//     })
// }
const arr = [
    { name: 'Krystian', age: 25, hobbies: ['Test1', 'Test2'] },
    { name: 'Paweł', age: 30, hobbies: ['Test2', 'Test3'] },
    { name: 'Karol', age: 25, hobbies: ['Test2', 'Test1']  },
    { name: 'Seba', age: 26, hobbies: []  }
  ]

const existAnyKrystian = arr.some(item => item.name === "Krystian")
const existOnlyKrystian = arr.every(item => item.name === "Krystian")
const existAfter20 = arr.every(item => item.age > 25)
//every sprawdza kazde           some sprawdzi ze jeden sie zgadza i wychodzi

//   1. Przefiltruj Wszystkich użytkowników którzy zaawierają literę K
//   2. Przefiltruj Wszystkich użytkowników którzy zaawierają literę Ł
const filterByLetterInUser = (array, letter) => {
    return array.filter(item =>item.name.toLocaleLowerCase().includes(letter.toLocaleLowerCase()))
}


const includes_K = filterByLetterInUser(arr, 'K')
const includes_Ł = filterByLetterInUser(arr, 'Ł')



//   3. Przefiltruj Wszystkich użytkowników którzy nie mają hobbies
const filterByEmptyHobbies = (array) => {
    return array.filter(item => item.hobbies.length === 0)
}
const withoutHobbies = filterByEmptyHobbies(arr)


//   4. Przefiltruj Wszystkich użytkowników którzy maja hobbies o wartosci test1 i test2
const specificArrValues = arr.filter(item => item.hobbies.includes("Test1") && item.hobbies.includes("Test2"))

//   5. Przefiltruj Wszystkich użytkowników którzy maja hobbies o wartosci test3 lub nie mają hobbies
const specificArrValues2 = arr.filter(item => item.hobbies.includes("Test3") || item.hobbies.length === 0)



//   1. Zmapuj każdy obiekt na { name: 'Krystian25' } name + age
const newObj = arr.map(item => {
    return {
        name: item.name + item.age
    }
})

//   2. Zmapuj każdy obiekt na { full: 'Krystian, Test1, Test2' } name + hobbies
const newObj2 = arr.map(item => {
    return {
        full: item.hobbies.length > 0 ? `${item.name}, ${item.age}, ${item.hobbies.join(', ')}}` : `${item.name}, ${item.age}`
    }
})

//   3. Zmapuj każdy obiekt na { name: 'Krystian', age: 25, hobbies: ['Test1', 'Test2'], (dodatkowo), role: 'Admin' }
const newObj3 = arr.map(item => {
    return {
        ...item,
        role: 'Admin'
    }
})
//dziwnie zwraca obiekt, klucze nie pokolei

const sortUp = arr.sort((prev, next) => {
    const prevName = prev.name.toLocaleLowerCase()
    const nextName = prev.name.toLocaleLowerCase()

    return prevName > nextName ? 1 : -1
})

const sortDown = arr.sort((prev, next) => {
    const prevName = prev.name.toLocaleLowerCase()
    const nextName = prev.name.toLocaleLowerCase()

    return prevName > nextName ? -1 : 1
})
//   1. Posortuj aflabetycznie po name rosnąco

//   3. Posortuj po age po name rosnąco

const sortAgeNameUp = arr.sort((prev, next) => {
    const prevName = prev.name.toLocaleLowerCase()
    const nextName = prev.name.toLocaleLowerCase()
    const prevAge = prev.age
    const nextAge = next.age

    return (prevName > nextName && prevAge > nextAge) ? 1 : -1
})

const sortAgeNameDown = arr.sort((prev, next) => {
    const prevName = prev.name.toLocaleLowerCase()
    const nextName = prev.name.toLocaleLowerCase()
    const prevAge = prev.age
    const nextAge = next.age

    return (prevName < nextName && prevAge < nextAge) ? 1 : -1
})



//albo znak albo cyferki

//   1. Posortuj aflabetycznie po name rosnąco
//   2. Posortuj aflabetycznie po name malejaco
//   3. Posortuj po age po name rosnąco
//   4. Posortuj po age po name malejaco
//   1. Zmapuj każdy obiekt na { name: 'Krystian25' } name + age
//   2. Zmapuj każdy obiekt na { full: 'Krystian, Test1, Test2' } name + hobbies
//   3. Zmapuj każdy obiekt na { name: 'Krystian', age: 25, hobbies: ['Test1', 'Test2'], (dodatkowo), role: 'Admin' }


// WZORZEC FACTORY

const newObj4 = arr.map(item => {
    return {
        ...item,
        role: 'Admin'
    }
})

const adminFactory = (obj) => {
    return {
        ...obj,
        role: 'Admin'
    }
}

const admins = arr.map(item => {
    return adminFactory(item)
})

// const admins = arr.map(item => adminFactory(item))
// const admins = arr.map(adminFactory) PRO niejawnie przesyła item do funkcji


//reduce + reduce right + class es6 (potem strategia ew. singleton, proxy)


