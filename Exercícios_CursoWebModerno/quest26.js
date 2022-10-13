function acharPares1(){
let pares = 1
while (pares <= 100){
    if (pares % 2 == 0){
        console.log(pares)
    }
    pares++
}
}


function acharPares2 () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares1()
acharPares2()