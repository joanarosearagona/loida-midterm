var set=0;
	
	function setv()
	{
		salm();
		var hr2= document.getElementById('hour2').value;
		var min2= document.getElementById('min2').value;
		var sec2= document.getElementById('sec2').value;
		if(hr2<10)
			hr2='0'+hr2;
		if(min2<10)
			min2='0'+min2;
		if(sec2<10)
			sec2='0'+sec2;
		document.getElementById('d2').value=hr2+'*'+min2+'*'+sec2;
		set=1;
		document.getElementById('msg').innerHTML='Alarm ON';
		document.getElementById('db').style.visibility="visible";
		document.getElementById('alm').style.visibility="hidden";
	}
	function dis()
	{
		var dat= new Date();
		var hr=dat.getHours();
		var min=dat.getMinutes();
		var sec=dat.getSeconds();
		if(hr<10)
			hr='0'+hr;
		if(min<10)
			min='0'+min;
		if(sec<10)
			sec='0'+sec;
		document.getElementById('hour').value=hr;
		document.getElementById('min').value=min;
		document.getElementById('sec').value=sec;
		var dat2v=document.getElementById('d2').value;
		var dats =hr+'*'+min+'*'+sec;
		if(dat2v==dats && set)
			{
				
				document.getElementById('alm').play();
				document.getElementById('sb').style.visibility="visible";
				//alert("Wake Up Man!");
				set=0;
				document.getElementById('db').style.visibility="hidden";
				document.getElementById('msg').innerHTML='Alarm RINGING';
			}
		setTimeout("dis()",500);
	}
	/*function prtsel(x)
	{
		for(var i=0;i<x;i++)
		{
			if(i<10)
			{
				document.write("<option value="+i+">"+0+i+"</option>");
			}
			else 
			{
				document.write("<option value="+i+">"+i+"</option>");
			}
		}
	}*/
	function salm()
	{
		document.getElementById('alm').pause();
		document.getElementById('sb').style.visibility="hidden";
		document.getElementById('msg').innerHTML='Alarm OFF';
	}
	function dalm()
	{
		set=0;
		document.getElementById('db').style.visibility="hidden";
		document.getElementById('msg').innerHTML='Alarm is OFF';
	}