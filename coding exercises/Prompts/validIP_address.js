// TC - O(1) as atmax there can be 12 number of digits. For 4 parts of 8 bits each we get total 32 bits. 
// In worst case there will be 2^32 possible valid ip address. O(2^32) = O(1)
function validIPAddresses(string) {
    const ipAddressesFound = [];
  
    for (let i = 0; i < Math.min(string.length, 4); i++) {
        const currentIPAddressParts = ["", "", "", ""];
        currentIPAddressParts[0] = string.slice(0, i);
  
        if(!isValidPart(currentIPAddressParts[0])) continue;
  
        for (let j = i+1; j < i + Math.min(string.length-i, 4); j++) {
            currentIPAddressParts[1] = string.slice(i, j);
  
            if(!isValidPart(currentIPAddressParts[1])) continue;
  
            for (let k = j+1; k < j + Math.min(string.length-j, 4); k++) {
                currentIPAddressParts[2] = string.slice(j,k);
                currentIPAddressParts[3] = string.slice(k);
                
                if(isValidPart(currentIPAddressParts[2]) && isValidPart(currentIPAddressParts[3])){
                    ipAddressesFound.push(currentIPAddressParts.join('.'));
                }
            }
            
        }
        
    }
    return ipAddressesFound;
  }
  
  function isValidPart(string){
      const stringAsInt = parseInt(string); // remove any leading 0's
      if(stringAsInt > 255) return false;
  
      return string.length === stringAsInt.toString().length;
  }
var ipAdd = "1921680";

console.log(validIPAddresses(ipAdd));
