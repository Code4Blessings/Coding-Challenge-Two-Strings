//What is the edge case?
// => None are uppercase
// => None are integers

//What is ascii[a-z]?  => Ok they are all lowercase

//Need a function where 2 strings are inputted.
//When looped over, the function determines if there is a common string
//Then if s2 has a character that is included in s1, then return yes
//If not return No

const twoStrings = (s1, s2) => {
    //Can use the anagram algorithm.  
    //Make an object called check
    const check = {}
    for (let i = 0; i < s1.length; i++) {
        const letter1 = s1[i];
        check[letter1] = true;
    }

    for (let i = 0; i < s2.length; i++) {
        const letter2 = s2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (check[letter2]) {
            return 'YES';
        }
    }
    return "NO";
}

console.log(twoStrings('robin', 'bird'))

