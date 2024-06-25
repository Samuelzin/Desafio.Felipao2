function getVictoryBalance (numV , numD) {
    let victoryBalance = numV - numD
    return victoryBalance
}
let balance = getVictoryBalance (110 , 10)
let elo = ""
switch (true){
    case(balance <= 10):
        elo = "Ferro";
        break;
    case(balance >= 11 && balance <= 20):
        elo = "Bronze";
        break;
    case(balance >= 21 && balance <= 50):
        elo = "Prata";
        break;
    case(balance >= 51 && balance <= 80):
        elo = "Ouro";
        break;
    case(balance >= 81 && balance <= 90):
        elo = "Diamente";
        break;
    case(balance >= 91 && balance <= 100):
        elo = "Lendário";
        break;
    case(balance > 100):
        elo = "Imortal";
        break;
}
console.log ("O Herói tem de saldo de " + balance + " está no nível de " + elo)