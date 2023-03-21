function createID(n) {
    const id = 10**n + Math.floor(Math.random() * 9 * 10 ** n)
    return id
}

console.log(createID(4))
console.log(createID(5))
console.log(createID(6))
console.log(createID(7))
