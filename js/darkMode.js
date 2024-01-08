const btnRound = document.querySelector('.btn-round');

btnRound.onclick = function(){
    if(this.classList.contains('active-dark')){
        this.classList.remove('active-dark')
        document.body.classList.remove('light');
    }else{
        this.classList.add('active-dark');
        document.body.classList.add('light');
    }
}
