
/*let pokemon = ["pikachu", 1000]
if (pokemon[1] <= 1000) {
    pokemon[1] += "Ferro"
    console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}"`)
}else{
    pokemon[1] += "Diamante"
    console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]} maior que o esperado"`)
}*/


let pokemon = ["pikachu", 1.001] 
if (pokemon[1] >= 1) {
    while (pokemon[1] <= 1.000) {
        pokemon[1] = "Ferro"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
    while (pokemon[1] <= 2.000) {
        pokemon[1] = "Bronze"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
    while (pokemon[1] <= 5.000) {
        pokemon[1] = "Prata"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
    while (pokemon[1] <= 7.000) {
        pokemon[1] = "Ouro"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
    while (pokemon[1] <= 8.000) {
        pokemon[1] = "Platina"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
    while (pokemon[1] <= 9.000) {
        pokemon[1] = "Ascendente"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
    while (pokemon[1] <= 10.000) {
        pokemon[1] = "Imortal"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
    while (pokemon[1] > 10.000) {
        pokemon[1] = "Radiante"
        console.log(`O Herói de nome ${pokemon[0]} está no nível de ${pokemon[1]}`)
        break
    }
}else{
    console.log('você não definiu um poder ao seu pokemon')
}