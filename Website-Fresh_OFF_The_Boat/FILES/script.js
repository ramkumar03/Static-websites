
	
	function myFunction()
			 {
 			 var w = window.innerWidth;
  			var x=(w/1920)-0.04;
			document.getElementById("wrapper").style.zoom = x;



			}
	







function fn2()

{


  var str=document.form2.maddress.value;
  var l=str.length;
  var atf= str.indexOf('@');
  var df=str.indexOf('.');
  var atl= str.lastIndexOf('@');
  var dl=str.lastIndexOf('.');
 var x=l-dl;

 if((atf==atl)&(atf!==-1))
 {
	
	 if((df==dl)&(df!==-1))
	{
	
		if(x==4)
		{
		alert("Congrats!  Confirmation of the seats will be sent through email!");
		document.getElementById("seats").innerHTML = "";
		
			document.getElementById("seats").style.width ="419px";
			document.getElementById("seats").style.height ="561px";
			document.getElementById("seats").style.backgroundImage = "url('images/RESERVED.jpg')";

		}
		else
		{
		 alert(" Incorrect domain .TRY AGAIN");
		}

	}


	else
	{
	  alert(" Invalid usage of(.)Dot .TRY AGAIN");
	}
	
	
  }
  else
{
  alert(" Invalid use of @.TRY AGAIN");
}
  
}






function f1()

{


  var str=document.form1.raddress.value;
  var l=str.length;
  var atf= str.indexOf('@');
  var df=str.indexOf('.');
  var atl= str.lastIndexOf('@');
  var dl=str.lastIndexOf('.');
 var x=l-dl;

 if((atf==atl)&(atf!==-1))
 {
	
	 if((df==dl)&(df!==-1))
	{
	
		if(x==4)
		{
		alert("successfully subscribed");
		document.getElementById("Newsletter").innerHTML = "";
		document.getElementById("Newsletter").style.backgroundImage = "url('images/SUBSCRIBED.jpg')";


		}
		else
		{
		 alert(" Incorrect domain .TRY AGAIN");
		}

	}


	else
	{
	  alert(" Invalid usage of(.)Dot .TRY AGAIN");
	}
	
	
  }
  else
{
  alert(" Invalid use of @.TRY AGAIN");
}
  
}
