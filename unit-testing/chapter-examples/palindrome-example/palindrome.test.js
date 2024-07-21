// imports the function/file being tested
const isPalindrome = require("./palindrome.js");

//THE TEST !!!
// describe function: "describe" is a Jest function used to define/create a TEST suite
describe("palindrome", function() {
// Test Suite Code. uses "test" function. Also the "expect" and "tobe" function
        // POSITIVE Cases
    test("should return true for a single letter", function() {
        expect(isPalindrome("a")).toBe(true)
    });
    test("should return true for a single letter repeated", function() {
        expect(isPalindrome("aaa")).toBe(true);
     });

     test("should return true for a simple palindrome", function() {
        expect(isPalindrome("aba")).toBe(true);
     });

     test("should return true for a longer palindrome", function() {
        expect(isPalindrome("racecar")).toBe(true);
     }); 
        // NEGATIVE Cases
        test("should return false for a longer non-palindrome", function() {
            expect(isPalindrome("launchcode")).toBe(false);
         });
      
         test("should return false for a simple non-palindrome", function() {
            expect(isPalindrome("ab")).toBe(false);
         });
      
         test("should be case-sensitive", function() {
            expect(isPalindrome("abA")).toBe(false);
         });
      
         test("should consider whitespace", function() {
            expect(isPalindrome("so many dynamos")).toBe(false);
         });
         // EDGE Cases
         test("should consider the empty string a palindrome", function() {
            expect(isPalindrome("")).toBe(true);
         });

});