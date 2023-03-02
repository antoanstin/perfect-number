var a=[3,6,28,30,35];
function perfectNum(a)
{
	let number;
	let perfect=[];
	
	for(i=0;i<a.length;i++)	
	{
		number=a[i];
		
	var k=0;
	for(j=1;j<number;j++)
	{
		if(number%j==0)
		{
			k+=j;
		}
	}
		if(k==number)
		{
			perfect.push(number)
		}
	}		
	return perfect;
}
	var a=[67,8,6,6,6]
	console.log(perfectNum(a))


