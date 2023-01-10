let count=document.getElementById("CountDown");

function countdown(){
    let data=count.value;
    let countDown=setInterval(function (){
        data --;
        console.log(data);
        document.getElementById('time').innerHTML = data
        if(data < 0){
            clearInterval(countDown);
            document.getElementById('time').innerHTML = "time out"
        }
    },1000)
}
