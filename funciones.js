//Funcion para sumar dos numeros y convertirlos a binario
function addBinary(a,b) {
  let suma = a + b;
  let binarioInvertido = "";
  let binarioCorrecto = "";
  while(suma > 0){
    if(suma % 2 == 0){
        binarioInvertido += "0";
    }
    else{
      binarioInvertido += "1";
    }
    suma = Math.floor((suma / 2));
  }
  
  for(i = binarioInvertido.length - 1; i >= 0; i--){
    binarioCorrecto += binarioInvertido[i];
  }
  return binarioCorrecto;
}
