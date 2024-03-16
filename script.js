function sum(a,b,...others){
    let sum=a+b;
    console.log(others);
    if(others.length>0){
        for (let value of others){
            sum=sum+value;
        }
    }
    console.log(sum);
}

sum(4,2);
sum(2,5,2,1);