var anniu = document.getElementById('anniu');
var switcher = document.querySelector('.switcher');
var body = document.getElementById('body');
var temp = 1;
anniu.addEventListener('click',function(){
    if (temp==1) {
        this.className = 'hei';
        temp=0;
        switcher.style.border = '2px solid rgb(11, 243, 81)';
        body.style.backgroundColor = 'rgb(7, 7, 29)';
        body.style.color = 'white';
    } else {
        this.className = 'bai';
        temp=1;
        switcher.style.border = '2px solid black';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }

})
