let noms = [
    "Finn",
    "Jack",
    "Princesa Chicle",
    "BMO",
    "Princesa Grumosa",
    "Princesa Llama"
];

let imatges = [
    "img/finn.jpg",
    "img/jack.jpg",
    "img/chicle.jpg",
    "img/BMO.gif",
    "img/lumpy.webp",
    "img/flame.png"
]

document.getElementById("boto").onclick = calculaNou;

for (let i = 0; i < imatges.length; i = i + 1) {
    let cadenaImg = "<img id='imatge" + i + "' src='" + imatges[i] + "'  width='150px'>";

    document.getElementById("totes").innerHTML += cadenaImg;
}


function calculaNou() {
    //Math.floor(valor) li treu els decimals a valor
    //Math.random() ens retorna núm atzar entre 0 i 1
    //    let posAtzar = Math.floor(Math.random() * 5);
    let posAtzar = Math.floor(Math.random() * noms.length);

    //alert(noms[posAtzar]);

    document.getElementById("nom").innerHTML = noms[posAtzar];
    document.getElementById("imatge").src = imatges[posAtzar];
    document.getElementById("imatge" + posAtzar).style.border = "solid 3px blue";

}

























