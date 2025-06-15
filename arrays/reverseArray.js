function reverseArray(array)
{
    // take i and j as two pointer
    // swap i with j until i < j
    let i = 0; 
    let j = array.length -1;
    while(i < j)
    {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
        i++;
        j--;
    }
    return array;
}

console.log(reverseArray([4,2,7,8,1,2,5]));