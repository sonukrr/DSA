/**INTRO-
 * Hash Table - They are used to have data in form of key - value pair.
 * Ex- JS has Objects and Maps, Java - Maps, Python - Dictionaries
 * Arrays are also a variation of hash table but they can only have integer keys and are ordered. So most of operations takes O(n)
 * HasTables can have any types for key as they are defined and are unordered. So operations like insertion, removal, search takes O(1)
 * 
 * DEV-
 * Hashing algorithm
 *          In order to look up values by key we need a way to convert keys into valid array indices. Ex- "pink" -> hashing fn -> 2 (array idx)
 *          A function that performs this task is called a Hash function 
 * Features of a good hash -
 *          1. Fast (constant time)
 *          2. Doesn't cluster outputs at same indices, but distributes uniformly.
 *          3. Deterministic (same input yields same results)
 * 
 * 
 */

// Basic Hash function
function hash(key, arrayLen){
    var total = 0;
    for(let i=0; i<key.length ; i++){
        // map 'a' - 1, 'b' - 2, 'c' - 3 ... 'z' - 26
        let value = key.charCodeAt(i) - 96;
        total = (total + value) % arrayLen;
    }    
    return total;
}

hash('pink', 10);
hash('blue', 10);
hash('yellow', 10);

//Refining our Hash (Problems with current hash)
/**
 * 1. Only Hashes strings(we won't worry about this)
 * 2. Not constant time - linear in key length
 * 3. Could be a little more random (clustering happens easily)
 */

