function removeDuplicate(array)
{
    // take i & j : i = 0, j = 1;
    array.sort((a,b)=> a-b);

    let i = 0;
    let j = 1;
    while(j < array.length)
    {
        if(array[i] < array[j])
        {
            let tmp = array [j];
            array[j] = array[i+1];
            array[i+1] = tmp;
            i++;
            j++
        }
        else if(array[i] >= array[j])
        {
            j++;
        }


    }
    return array.slice(0,i+1);
}

console.log(removeDuplicate([2,2,2,4,4,7,7,12,15]));
// Output: [2, 4, 7, 12, 15]

// test cases
console.log(removeDuplicate([1,1,2,3,4,5,5,6]));
// Output: [1, 2, 3, 4, 5, 6]
console.log(removeDuplicate([1,2,3,4,5, 1,2,3,4,5]));
// Output: [1, 2, 3, 4, 5]
console.log(removeDuplicate([1,1,1,1,1]));
// Output: [1]
console.log(removeDuplicate([5,5,5,5,5]));
