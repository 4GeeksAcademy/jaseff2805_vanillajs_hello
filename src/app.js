let pronoun = ['the', 'our']
let adj = ['great', 'big']
let noun = ['jogger', 'racoon']
let extenxion = ['.he','.ur','.at','.ig','.er','.on']

for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let e of extenxion) {
              if (n.endsWith(e.slice(1))) { // .endsWith junto con .slice sirve para identificar si el noun "n" termina con alguna de las extensiones
                let hackNoun = n.slice(0, -e.length + 1)
                console.log(p + a + hackNoun + e + ' ---Dominio Hackeado---')
              } else {
                console.log(p + a + n + e);
              }  
            }
        }
    }
}
