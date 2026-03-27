function createLink(level) {
    let code = '';
    const tubes = [...level.filter(x => x.length > 0)]
    for (let i = 0; i < tubes.length; i++) {
        const tube = level[i];
        for (let j = 0; j < tube.length; j++) {
            code += cores.findIndex(cor => cor == tube[j]);
        }

        if (i < tubes.length - 1)
            code += '-'
    }
    const empty = level.length - tubes.length
    return `${window.location.pathname}?id=${empty}-${code}`
}

function createLevelFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('id')
    const split = code.split('-')
    const level = []
    const empty = split[0];
    for (let i = 1; i < split.length; i++) {
        const tube = []
        for (let j = 0; j < split[i].length; j++) {
            tube.push(cores[split[i][j]])
        }
        level.push(tube)
    }

    for (let i = 0; i < empty; i++)
        level.push([])

    return level;
}

function haveLevelInURL(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.size
}