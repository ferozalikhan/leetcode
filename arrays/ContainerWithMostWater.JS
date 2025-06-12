function maxArea(heights) {
    // Two pointers approach
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;
    while (left < right) {
        // Calculate the area with the current left and right pointers
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);
        const area = width * height;
        
        // Update maxArea if the current area is larger
        maxArea = Math.max(maxArea, area);
        
        // Move the pointer pointing to the shorter line inward
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
        
}

let heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights)); 