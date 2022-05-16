var a,
b= false,
c= false,
d= false,
e= false,
sum=0,
password="abc";
var f,g,h,i;

function cal(a){
    console.log("abc");
    if(a==1){
        if(b==false){
            sum+=30;
            b=true;
            document.getElementById("id1").style.backgroundColor="red";
        }
        else{
            sum-=30;
            b=false;
            document.getElementById("id1").style.backgroundColor="white";
        }
    }
    else if(a==2){
        if(c==false){
            sum+=30;
            c=true;
            document.getElementById("id2").style.backgroundColor="red";

        }
        else{
            sum-=30;
            c=false;
            document.getElementById("id2").style.backgroundColor="white";
        }
    }
    else if(a==3){
        if(d==false){
            sum+=30;
            d=true;
            document.getElementById("id3").style.backgroundColor="red";
        }
        else{
            sum-=30;
            d=false;
            document.getElementById("id3").style.backgroundColor="white";
        }

    }
    else if(a==4){
        if(e==false){
            sum+=30;
            e=true;
            document.getElementById("id4").style.backgroundColor="red";
        }
        else{
            sum-=30;
            e=false;
            document.getElementById("id4").style.backgroundColor="white";
        }
    }
    document.getElementById("amo").innerHTML=sum;
}
/*document.getElementById("verify").addEventListener("click",verify);*/

function verify()
{
f=document.getElementById("p");
g=document.getElementById("q");
h=document.getElementById("r");
i=document.getElementById("s");

    console.log("abcd");
    if(f==""||g==""||h==""||i==""||sum==0||f==null||g==null||h==null||i==null)
{
alert("Incompleete data");
}
    else
    alert("Data is verified");

}

function passwordd()
{
 var input=prompt("Enter the password");
 document.getElementById("wrong").style.display="none";
 if(input==password){
     document.getElementById("bo").style.display="block";
 }
 else{
 document.getElementById("wrong").style.display="block";
}
}
