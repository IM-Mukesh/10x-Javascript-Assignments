function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   let ans = []
   function check(value){
       if(value % 2 === 0){
           ans.push(value);
       }
   }
   arr.map(check);
   return ans;
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] * n;
    }
    return arr
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   let ans = [];
   for(let i=0; i<arr.length; i++){
       if(i===n){
           continue;
       }else{
           ans.push(arr[i]);
       }
   }
   return ans;
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}