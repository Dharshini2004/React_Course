function Sum (...args)
{
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i];
    }
    return sum;
}
console.log(Sum(1,2,3,4))
console.log(Sum(10,20,30,40))