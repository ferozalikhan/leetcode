function hallowDiamond()
{
    let n = 4; 
    // top loop
    for(let i = 1; i <= n; i ++)
    {
        let row = "";
        for( let j = n; j >= 1; j --)
        {
            if(j === i)
            {
                row += "*";
            }
            else{
                row += " ";
            }
        }
        for( let k = 2 ; k <= n; k ++)
            {
                if(k === i)
                {
                    row += "*";
                }
                else{
                    row += " ";
                }
            }
            console.log(row);
    }
    // bottom loop
    for(let i = n; i >= 1; i --)
    {
        let row = "";
        for( let j = n; j >= 1; j --)
        {
            if(j === i)
            {
                row += "*";
            }
            else{
                row += " ";
            }
        }
        for( let k = 2 ; k <= n; k ++)
            {
                if(k === i)
                {
                    row += "*";
                }
                else{
                    row += " ";
                }
            }
            console.log(row);
    }
}

hallowDiamond();