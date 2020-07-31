(() => {
    document.addEventListener("DOMContentLoaded", () => {
        //console.log(document.querySelector("p"));
        //document.write("Hola putos");
        //alert("Estp es una alerta");
        let nombre = "";
        var personas = new Array(4);
        // 0, 1 ,2 ,3 ,4
       
        for (let i = 0; i < personas.length; i++) {
            personas = prompt("Hola Humano, ¿Como te llamas? ");
            document.write("  " + personas);
            console.log(personas);
        }

    });

})();