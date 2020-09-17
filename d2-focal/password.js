function obfuscate (stringPass){
 
//  Every "a" in the string should be replaced with a "4".
//Every "e" in the string should be replaced with a "3".
//Every "o" (oh) in the string should be replaced with a "0" (zero).
//Every "l" (el) in the string should be replaced with a "1" (one)


var res = stringPass.replace("a", "4" | "e" , "3" | "o" , "0" | "l" ,"1");
return res;
};
console.log(obfuscate("password"));