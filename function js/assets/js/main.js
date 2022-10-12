


    var x=prompt("Entere the first number:");
    var y=prompt("Enter the second number:");
    
    
    var calc=prompt("1 (+), 2 (-), 3 (*), 4 (/)");
    
    switch(calc)
    
          
    {      
          
          case "1":
          top=Number(x)+Number(y);
          alert("Resault: " + top );
          break;
          
          
          case "2":
          cix=Number(x)-Number(y);
          alert("Resault: " + cix);
          break;
          
          
          case "3":
          vur=Number(x)*Number(y);
          alert("Resault: " + vur);
          break;
          
          
          case "4":
          bol=Number(x)/Number(y);
          alert("Resault: " + bol);
          break;
          
          default:
          alert("enter correctly")
    }    