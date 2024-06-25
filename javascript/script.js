document.getElementById("Orignal").innerHTML="<h1>25.12345</h1>" ;

function showoutput(output){
    document.getElementById("output").innerHTML=output;
}

function inputvalue(){
    document.getElementById("input").value;
}
function round (){
    let num=document.getElementById("input").value;
    if(!num){
        toast();
    }
    let total=Math.round(num);
    showoutput(total)
    
}
// ceil

function ceil(){
    let num=document.getElementById("input").value;
    if(!num){
        toast();
    }
    let total=Math.ceil(num);
    showoutput(total)
}
function floor(){
    let num=document.getElementById("input").value;
    if(!num){
        toast();
    }
    let total=Math.floor(num);
    showoutput(total)
}

function generate(){
   let num= Math.random();
    showoutput(num)
}

function dice(){
    let num=Math.random()
    num=(num*6)+1;
    let dice=Math.floor(num)
    let html=dice+'<p>Dice Generating a Number</p>'
    showoutput(html)

    // let num=Math.round(Math.random()*6)
    // showoutput(num)
}

// Generate password
function password(){
    let random=""
    let number="123456789";
    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let symbol="+-*/@!#$%^&*"
    let possible=uppercase+lowercase+symbol+number

    let limit=document.getElementById("input").value;
    if(!limit){
        toast()

       
    }
    for(i=0;i<limit;i++){
        let randomnumber=Math.random();
        random+=possible.charAt(Math.floor(randomnumber*possible.length));

    }
    let html='<h6>' + random +'</h1>'+'<p>Generating Random String & length is:'+limit+'</p>'
    document.getElementById("output").innerHTML=html;
}
// Toastify Function
function toast(){
    
        Toastify({
            text: "Please Enter a Number",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, red, black)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

// Converting String
function string(){
   let num="2555"
    num=parseInt(num)
    let num1=typeof(num)
    let html=num+"</br>"+'<h6>Its Data Type is:'+ num1+'</h6>'
    showoutput(html)
}
// Converting Length
function length(){
    let num=document.getElementById("input").value;
    if(!num){
        toast();
    }
    let num1=parseFloat(num)
    let html=num1.toFixed(4)
    showoutput(html)

}
//GST
function gst(){
    let price=document.getElementById("input").value;;
    let tax=1000*18/100;
    let sum=+price+tax;
    showoutput(sum)

}

