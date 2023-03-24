const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    let testArr = [1, 2, 3, 4, 5]
    test("return an array of the same length as the argument sent in", () => {
        expect(typeof shuffleArray(testArr)).toHaveLength(testArr.length)
    })

    test("items in the array have been shuffled", () => {
        expect(typeof shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })
})