function merge(nums1, m, nums2, n) {

    let i = m;
    console.log(nums1[i]);
    let j = 0;
    while(j < nums2.length)
    {
        nums1[i] = nums2[j];
        j++;
        i++;
    }
    return nums1.sort((a,b) => a-b);
}

// optimal solution
function mergeOptimal(nums1, m, nums2, n) {
    let i = m - 1; // Last element in nums1
    let j = n - 1; // Last element in nums2
    let k = m + n - 1; // Last position in merged array

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}


let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
console.log(merge(nums1, m, nums2, n))