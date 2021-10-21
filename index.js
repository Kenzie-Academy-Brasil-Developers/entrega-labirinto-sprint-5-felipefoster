const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];



function criaMap() {
    const container = document.createElement('div')
    container.classList.add("container")
    document.body.appendChild(container)
    for(let i = 0; i < map.length; i++){
        const linhaMap = document.createElement("div")
        linhaMap.classList.add("linhaMap")
        container.appendChild(linhaMap)
        for(let j = 0; j < map[i].length; j++){
            const celulaMap = document.createElement("div")
            celulaMap.classList.add("celulaMap")
            linhaMap.appendChild(celulaMap)
            if(map[i][j] === 'W'){
                const w = document.createElement('p')
                w.classList.add('parede')
                const text = document.createTextNode(' ')
                celulaMap.appendChild(w)
                w.appendChild(text)
            } else if (map[i][j] === ' '){
                const espaco = document.createElement('p')
                const textespaco = document.createTextNode(' ')
                celulaMap.appendChild(espaco)
                espaco.appendChild(textespaco)
            } else if (map[i][j] === 'S'){
                const s = document.createElement('p')
                const bola = document.createElement("div")
                bola.classList.add('bola')
                linhaMap.appendChild(bola)
                const texts = document.createTextNode('S')
                celulaMap.appendChild(s)
                s.appendChild(texts)
            } else if (map[i][j] === 'F'){
                const f = document.createElement('p')
                const textf = document.createTextNode('F')
                celulaMap.appendChild(f)
                f.appendChild(textf)
            } else if (map[i][j] === ' '){
                const espaco = document.createElement('p')
                const textespaco = document.createTextNode(' ')
                celulaMap.appendChild(espaco)
                espaco.appendChild(textespaco)
            }
        }
    }
}


criaMap()

document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
});

let moveBola = document.getElementsByClassName('bola')
