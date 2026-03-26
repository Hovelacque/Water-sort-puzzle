const cores = ['red', 'blue', 'green', 'yellow'];

function geraFase(
    capacidade = 4, // por tubo
    tubosExtras = 2 // tubos vazios extras
) {
    let contadorDePartes = cores.map(cor => {
        return {
            cor,
            quantidade: capacidade
        }
    });

    let tubos = [];
    for (let i = 0; i < capacidade; i++)
        tubos.push([]);

    let i = 0;
    do {
        let selectIndex = Math.floor(Math.random() * contadorDePartes.length);
        tubos[i].push(contadorDePartes[selectIndex].cor)
        contadorDePartes[selectIndex].quantidade--;
        if (contadorDePartes[selectIndex].quantidade == 0)
            contadorDePartes.splice(selectIndex, 1);
        i = (i == tubos.length - 1) ? 0 : i + 1
    } while (contadorDePartes.length > 0)

    for (let i = 0; i < tubosExtras; i++)
        tubos.push([]);

    return tubos;
}