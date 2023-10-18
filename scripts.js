const Numerador = document.querySelector("#Numero-1")
const Multiplicator = document.querySelector("#Numero-2")
const Calcular = document.querySelector("#Calcular")
const Resultado = [];
const Lista = document.querySelector(".ImprimeResultado")


Calcular.addEventListener("click", (e) => {


    if ( Numerador.value === "" | Multiplicator.value === ""){
        console.log("Feio")
        return
    } 

    if ( Numerador.value === "" | Multiplicator.value === ""){
        console.log("Feio")
        return
    } 
    
    console.log("Lindo")

    const Numero = Numerador.value;

    const Multiplicador = Multiplicator.value;

    Lista.textContent = `Tabuada do ${Numero}`;

    for(i = 0; i <= Multiplicador; i++){
        Resultado[i] = Numero*i 

        console.log(`${Numero} X ${i} = ${Resultado[i]}`)

        const template = `<div class="row"> 
        <div class="operation"> ${Numero} X ${i} = ${Resultado[i]}</div>
        </div>`;

        const parser = new DOMParser();
        const htmltemplate = parser.parseFromString(template, "text/html");
        const row = htmltemplate.querySelector(".row");
        Lista.appendChild(row)

    console.log(Resultado)

    }
});