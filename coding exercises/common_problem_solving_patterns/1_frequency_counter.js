/**
 * Makeing use of Objects or Map to maintain the frequency of elements
 */

/**
 * @description Anagram
 * TC - O(n)
 */
function anagram(str1, str2){

    if(str1.length != str2.length || str1.length == str2.length == 0)
        return false;    
    
    const frequencyCounterObj1 = {};
    const frequencyCounterObj2 = {};
    for(let val of str1){
        frequencyCounterObj1[val] = (frequencyCounterObj1[val] || 0) + 1;        
    }

    for(let val of str2){
        frequencyCounterObj2[val] = (frequencyCounterObj2[val] || 0) + 1;        
    }


    for(const key in frequencyCounterObj1){
        if(frequencyCounterObj1[key] != frequencyCounterObj2[key])
            return false;
    }

    return true;
}


console.log( anagram('', ''));
console.log( anagram('cinema', 'iceman'));
console.log( anagram('cinema', 'icemaq'));
console.log( anagram('cinemaforyou', 'youforcinema'));


