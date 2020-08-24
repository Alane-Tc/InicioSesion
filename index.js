window.addEventListener("load", function () {

    function intervalo() {
        var tiempo = setInterval(function () {  //SET TIME OUT SOLO SE EJECUTA 1 VEZ
            console.log("Set interfal ejecutnado ")
            var titulo = document.querySelector("#Titulo");
            if (titulo == "red") {
                titulo.style.background = "white";
            } else {
                titulo.style.background = "red";
            }
            return true;
        }, 5000);
        return tiempo;
    }


});