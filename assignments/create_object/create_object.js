function CreateObject(arr) {
    // Write your code here
    let ans = {}
    for(let i = 0; i<arr.length; i+=2){
        ans[arr[i]] = arr[i+1]
    }
    return ans
}

module.exports = CreateObject;
