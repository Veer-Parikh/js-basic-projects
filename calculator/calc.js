var a=""
var b=""
var sign=""

function operation(){
    switch(sign){
        case '+':
            a = String(Number(a)+Number(b))
            document.getElementById('numdisplay').innerHTML = a
            b = "";
            sign = "";
            break;
        case '-':
            a = String(Number(a)-Number(b))
            document.getElementById('numdisplay').innerHTML = a
            b = "";
            sign = "";
            break;
        case '*':
            a = String(Number(a)*Number(b))
            document.getElementById('numdisplay').innerHTML = a
            b = "";
            sign = "";
            break;
        case '/':
            if (b == '0') {
                document.getElementById('numdisplay').innerHTML = "Cannot divide by zero!";
                a = "";
                b = "";
                c = "";
                break;
            } else {
                a = String(Number(a) / Number(b));
                document.getElementById('numdisplay').innerHTML = a;
                b = "";
                sign = "";
                break;
            }
    }
}


function appendToInput(m){
    if (m === "=") {
        if((a !== "") && (b !== "") && (sign !== "")) {
            operation();
        }
    }
    else if ((m == "+") || (m == "-") || (m == "*") || (m == "/")) {
        if((a != "") && (b == "")) {
            sign=m;
            document.getElementById('numdisplay').innerHTML = a + sign;
        } else if ((a != "") && (b != "")) {
            operation();
            sign = m;
            document.getElementById('numdisplay').innerHTML = a + sign;
        }
    }
    else {
        if(sign=="")
		{
			a=a+m;
			document.getElementById('numdisplay').innerHTML=a;
		}
		else
		{
			b=b+m;
			document.getElementById('numdisplay').innerHTML=a+sign+b;
		}
    }
}

function appendToInput2(m) {
	switch(m) {
		case 'reset':
			location.reload();
			break;
		case 'bs':
			if((a!="")&&(sign!="")) {
				if(b=="") {
					sign="";
					document.getElementById('numdisplay').innerHTML=a;
				}
				else {
					var bx= new Array();
					bx=b.split("");
					bx.pop();
					b=bx.join("");
					document.getElementById('numdisplay').innerHTML=a+sign+b;
				}
			}
			else if((a!="")&&(sign=="")) {
				var ax=new Array();
				ax=a.split("");
				ax.pop();
				a=ax.join("");
				document.getElementById("numdisplay").innerHTML=a;
			}
		break;
	}
}