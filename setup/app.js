const colors = [
    "green",
    "red",
    "rgba(133,122,200)",
    "f15025",
    "#2e8b57",
    "#f4a460",
    "#ffd6bf",
    "#d7aa9f"
];
//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//console.log(btns);//for test

btns.forEach(function (btn) {
   
    //console.log(item);//for test
    btn.addEventListener('click', function (e) {
        //console.log(e.currentTarget.classList);//mevcutta hangi butona basıldığını görmek için yapılan test
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else if(styles.contains("reset")){
            count =0;
        }
        if(count>0 && count<=10){
            value.style.color = "green";
        }else if(count>10){
            value.style.color = "blue"
        }
        if(count>=-10 && count<0){
            value.style.color = "red";
        }else if(count<-10){
            value.style.color = "purple";
        }
        if(count === 0 ){
            value.style.color = "yellow";
            let randomNumber = getRandomNumber();
            document.body.style.backgroundColor = colors[randomNumber];
            console.log(randomNumber);
        }
        
        value.textContent = count;
    });
});
function getRandomNumber(){

    return Math.round(Math.random()*colors.length);
}