function burger(){
    var a=document.querySelector('.cross')
    var y=document.querySelectorAll('.line');
    var x = document.getElementById("ul");
    var z=document.querySelector('.burger');
    var dlogo=document.querySelector('#dlogo')
    var logo=document.querySelector('#logo')
    var h1=document.querySelector('#h1');
if (x.style.display === "flex") {
x.style.display = "none";
a.style.visibility="hidden"
z.style.visibility="visible"
dlogo.style.display="block"
h1.style.display="block";
logo.style.display="none"
// mlogo.style.visibility="visible"
} else {
x.style.display = "flex";
// x.style.justifyContent="center"
x.style.flexDirection="column"
x.style.height="100vh"
x.style.backgroundColor="black"
// y[0].style.rotate="45deg"
// x.style.opacity=1;
z.style.visibility="hidden"
a.style.visibility="visible"
logo.style.display="block";
logo.style.margin="0px 1em 0px 0px"
dlogo.style.display="none";
h1.style.display="none";


}
}
function dev(){
    var b=document.querySelector('#dev');
    if(b.style.display==="flex"){
        b.style.display="none";
    }
    else{
        b.style.display="flex";
    }
}