let tamt=120000,mode="TAP",c=10000;
function deb(tamt,c)
{
    tamt-=c;
    console.log(tamt);
}
if(tamt>=0)
{
    if(mode=="TAP")
    {
        if(c<=5000 && c<=tamt)
        deb(tamt,c)
        else
        console.log("Insuffecient Ballance");
    }
    else if(mode=="UPI")
    {
        if(c<=100000 && c<=tamt)
        deb(tamt,c);
        else
        console.log("Insuffecient Ballance");
    }
    else if(mode=="BANK")
    {
        if(c<=50000 && c<=tamt)
        deb(tamt,c);
        else
        console.log("Insuffecient Ballance");
    }
}
else
console.log("Ballance is zero Rupees");