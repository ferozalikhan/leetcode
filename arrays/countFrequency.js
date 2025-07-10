function recurssionNormal(n) {
    if(n===0) return 
    console.log(n)
    recurssionNormal(n-1)
}

recurssionNormal(10);

function recurssionBactracking(n) {
    if(n===0) return 
    recurssionBactracking(n-1)
    console.log(n)
}

recurssionBactracking(10);
