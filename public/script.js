/*
3 funções

buy car 
buy notebook
buy smartphone

Objetivo:

    Dimunuir o saldo do cliente no front
    E fazer a verifiação para saber se o usario não ultapassou o seu saldo
Ids:
    cash

*/

/*Carregando Elementos */
let cash = document.getElementById('cash')
let currentcash = parseInt(cash.textContent)

/*Criando Funções:  */
/*Fasendo verificação para saber se o usuário não ultrapassou o saldo*/
function verify(){
    if(parseInt(cash.textContent)<0){
        alert('!!!!!!Você Ultrapassou seu saldo!!!!!!')
        location.reload()
    }
}

/*1° função buycar */
function buycar(){
    currentcash -= 50
    cash.textContent = currentcash
    verify()
}
/*2° função buynote*/
function buynote(){
    currentcash -=30
    cash.textContent = currentcash
    verify()
}
/*3° função buyphone */
function buyphone(){
    currentcash-=500
    cash.textContent = currentcash
    verify()
}




