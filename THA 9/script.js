var box=document.querySelectorAll('.seat');
var c1=Number(document.querySelector('.count1').innerHTML);
var c2=Number(document.querySelector('.count2').innerHTML);

box.forEach(function(seat){
    seat.addEventListener('click', () => {
        if(seat.classList.contains('sbooked')){
            seat.classList.remove('sbooked');
            seat.classList.add('seat');
            c1=c1-1;
            document.querySelector('.count1').innerHTML=c1;
            c2=c2+1
            document.querySelector('.count2').innerHTML=c2;

        }
        else{
            seat.classList.add('sbooked');
            seat.classList.remove('seat');
            c2=c2-1;
            document.querySelector('.count2').innerHTML=c2;
            c1=c1+1;
            document.querySelector('.count1').innerHTML=c1;
            
        }
    });
})
