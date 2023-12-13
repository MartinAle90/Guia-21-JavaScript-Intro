const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


function distributeGifts(packOfGifts, reindeers) {
    let pesoTotReg = 0;
    for (let regalo of packOfGifts) {
        pesoTotReg += regalo.length;
    }

    let pesoMaximo = 0;
    for (let reno of reindeers) {
        pesoMaximo += reno.length*2;
    }

    let cajasMaximas = 0;
    cajasMaximas = pesoMaximo/pesoTotReg;

    console.log(cajasMaximas);

    return cajasMaximas;
}


// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2


