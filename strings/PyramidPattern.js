function pyramidPattern()
{
    let n = 4; 
    for(let i = 1; i <= n; i ++)
    {
        let row = "";
        let s = n - i;
        for(let j = s; j > 0; j -- )
        {
            row += " ";
        }
        // forward loop to i
        for(let f = 1; f < i; f ++)
        {
            row += f
        }
        // reverse loop to i
        for(let r = i; r >= 1; r --)
        {
            row += r
        }
        console.log(row);
    }
}

pyramidPattern();