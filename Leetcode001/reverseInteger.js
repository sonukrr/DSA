/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    let rev = 0;
    var sign = x < 0;
    x = Math.abs(x);

    while(x > 0){        
        rev = rev*10 + (x % 10);
        x = Math.floor(x/10);
    }
    if(rev > 0x7fffffff){
        return 0;
    }
    return sign ? -rev : rev;
};
console.log(reverse(-123));