let nome = "Wladson";
let xp = 500;

if (xp < 1000) {
    console.log("O Herói de nome " + nome + " está no nível Ferro!");
} else if (xp > 1000 && xp <= 2000) {
    console.log("O Herói de nome " + nome + " está no nível Bronze!");
} else if (xp > 2000 && xp <= 5000) {
    console.log("O Herói de nome " + nome + " está no nível Prata!");
} else if (xp > 5000 && xp <= 7000) {
    console.log("O Herói de nome " + nome + " está no nível Ouro!");
} else if (xp > 7000 && xp <= 8000) {
    console.log("O Herói de nome " + nome + " está no nível Platina!");
} else if (xp > 8000 && xp <= 9000) {
    console.log("O Herói de nome " + nome + " está no nível Ascendente!");
} else if (xp > 9000 && xp <= 10000) {
    console.log("O Herói de nome " + nome + " está no nível Imortal!");
} else {
    console.log(`O Herói de nome ${nome} está no nível Radiante!`);
}
       
