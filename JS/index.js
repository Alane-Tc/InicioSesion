window.addEventListener("load", function () {
   var boton = document.querySelector(".Boton");
   var registro = document.querySelector("#Mensaje_Registro");
   function Saludo() {
      alert("Quedate en tu puta casa");

   }

   function Registro() {
      registro.innerHTML = "Animo Joder!!";
   }
   registro.addEventListener("click", function () {
      Registro();
   })

   function cuadroPrincipal() {
      var cuadro = document.querySelector(".Cuadro");
      cuadro.addEventListener("mouseover", function () {
         cuadro.style.background = "yellow";
      });
      cuadro.addEventListener("mouseout", function () {
         cuadro.style.background = "white";
      });
   }
   //-------------------------------------------------- 
   function cuadroContraseña() {
      var contraseña = document.querySelector("#password");
      contraseña.addEventListener("mouseover", function () {
         contraseña.style.background = "yellow";
      });
      contraseña.addEventListener("mouseout", function () {
         contraseña.style.background = "white";
      });
   }

   var cuadro = cuadroPrincipal();
   var contraseña = cuadroContraseña();

   boton.addEventListener("click", function () {
      Saludo();
   })

});