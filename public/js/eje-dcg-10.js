//alert('Hola Mundo');
function sumaNumeros(){
   
    // declarcion de let y const
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //proceso
    const suma = n1 + n2;
    //Salida
    //alert('Resultado: ' + suma);
    resultado.innerHTML='Resiltado: ' +suma;
}
function restarNumeros(){
   // alert('Se restaran los dos numeros');
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //proceso
    const resta = n1 - n2;
    //Salida
    //alert('Resultado: ' + suma);
    resultado.innerHTML='Resiltado: ' + resta;
}
function multiplicaNumeros(){
    //alert('Se multiplicaran los dos numeros');
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //proceso
    const multiplicacion = n1 * n2;
    //Salida
    //alert('Resultado: ' + suma);
    resultado.innerHTML='Resiltado: ' + multiplicacion;
}
function divideNumeros(){
   // alert('Se dividiran los dos numeros');
   const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //proceso
    const division= n1 / n2;
    //Salida
    //alert('Resultado: ' + suma);
    resultado.innerHTML='Resiltado: ' + division;
}
