function movimentoValido(origem, destino, capacidade) {
    if (origem.length === 0) return false;
    if (destino.length === capacidade) return false;
    if (destino.length === 0) return true;
    return destino[destino.length - 1] === origem[origem.length - 1];
}

function embaralhar(tubos, capacidade, movimentos = 100) {
    for (let i = 0; i < movimentos; i++) {
        let from = Math.floor(Math.random() * tubos.length);
        let to = Math.floor(Math.random() * tubos.length);
        if (from === to) continue;

        if (movimentoValido(tubos[from], tubos[to], capacidade)) {
            tubos[to].push(tubos[from].pop());
        }
    }
}

function geraFase() {
    const cores = ['red', 'blue', 'green', 'yellow']; // pode ser mais
    const capacidade = 4; // por tubo
    const tubosPorCor = 1; // normalmente 1
    const tubosExtras = 2; // tubos vazios extras

    let tubos = cores.map(cor => Array(capacidade).fill(cor));

    for (let i = 0; i < tubosExtras; i++) {
        tubos.push([]);
    }

    embaralhar(tubos, capacidade, 10);
    return tubos;
}