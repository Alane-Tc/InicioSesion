(() => {
    document.addEventListener("DOMContentLoaded", () => {
       let formulario = document.querySelector("#form-login");
       let div= document.querySelector("#valoresInput"); 
       let select= document.querySelector("#Paises");
       let div2= document.querySelector("#valores_paises");

       formulario.addEventListener("submit",(e) => {
        e.preventDefault(); 
        let country=["Mexico", "Eu", "Canada", "Argentina","Colombia"];
         let prueba=select.elements;
         
        // country.forEach(j =>div2.appendChild(crearparrafo(`Tus pais es ${prueba[j].name}= ${prueba[j].value} `)));

             //USAR NAME 
            let nameImputs = ["userName", "Password"];
            let inputs= formulario.elements;
        nameImputs.forEach(i => div.appendChild(crearparrafo(`El valor del imput ${inputs[i].name}= ${inputs[i].value}`)));
        });
       

    });

})();

let crearparrafo = text =>{
let parrafo = document.createElement("p");
 parrafo.innerText= text;
 return parrafo;
}
