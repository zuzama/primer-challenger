function encriptar() 
    {
        let texto = document.getElementById ("texto").value;
        let tituloMensaje = document.getElementById ("titulo-mensaje"); 
        let parrafo = document.getElementById("parrafo");
        let muneco = document.getElementById("muneco");


        let textoCifrado = texto //como se reemplaza las vocales por otra palablras
              .replace(/a/gi, "mat")
              .replace(/i/gi, "imes")
              .replace(/o/gi, "lol")
              .replace(/u/gi, "mut")
              .replace(/e/gi, "cow")
              .replace(/z/gi, "cos");
        if (document.getElementById ("texto").value.length !=0)// condicional
            {
                document.getElementById ("texto").value = textoCifrado;//reemplaza el texto por el encriptado
                tituloMensaje.textContent = "texto exitosamente encriptado";//anuncio exitoso
                parrafo.textContent = "";//mostrar frase encriptada
                muneco.src = "./img/encriptar.img";//se coloca la nueva imagen a encriptar
            }
        else
            {
                muneco.src = "./img/pensando.img";//devolver a la imagen inicial
                tituloMensaje.textContent ="No encontramos ningún mensaje para encriptar";
                parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
                swal("ups!", "no ingreasate un texto", "warning");
                //alert ("Debes ingresar algun texto");//texto de alerta
            }
        


    }

    //para desencriptar es invertir lo cifrado y la misma programacion

  function desencriptar () 
  {
        let texto = document.getElementById ("texto").value;
        let tituloMensaje = document.getElementById ("titulo-mensaje"); 
        let parrafo = document.getElementById("parrafo");
        let muneco = document.getElementById("muneco");

        let textoCifrado = texto
                .replace(/mat/gi, "a")
                .replace(/imes/gi, "i")
                .replace(/lol/gi, "o")
                .replace(/mut/gi, "u")
                .replace(/cow/gi, "e")
                .replace(/cos/gi, "z");

        if (texto.length != 0)// validar 
            {
                document.getElementById ("texto").value = textoCifrado;//reemplaza el texto por el encriptado
                tituloMensaje.textContent = "texto exitosamente desencriptado";//anuncio exitoso
                parrafo.textContent = "";//mostrar frase encriptada
                muneco.src = "./img/desencriptar.img";//se coloca la nueva imagen a encriptar
            }
        else
            {
                muneco.src = "./img/pensando.img";//devolver a la imagen inicial
                tituloMensaje.textContent ="No encontramos ningún mensaje para encriptar";
                parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
                alert ("Debes ingresar algun texto");//texto de alerta
            }
  }  