function getVictoryBalance (numV , numD) {
    let victoryBalance = numV - numD
    return victoryBalance
}
let balance = getVictoryBalance (10 , 10)
let elo = undefined
if(balance <= 10){
    elo = "Ferro"
}else if(balance >= 11 && balance <= 20){
    elo = "Bronze"
}else if(balance >= 21 && balance <= 50){
    elo = "Prata"
}else if(balance >= 51 && balance <= 80){
    elo = "Ouro"
}else if(balance >= 81 && balance <= 90){
    elo = "Diamante"
}else if(balance >= 91 && balance <= 100){
    elo = "Lendário"
}else{
    elo = "Imortal"
}
if(elo !== undefined){
    console.log ("O Herói tem de saldo de " + balance + " está no nível de " + elo)
}
