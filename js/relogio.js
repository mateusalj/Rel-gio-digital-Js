//vareduras de elementos html
const hr = document.getElementById('horas');
const min = document.getElementById('minutos');
const seg = document.getElementById('segundos');

//hora do sistema 
const relogio = setInterval(function tempo (){
    let dataDeHoje = new Date();

    let hora = dataDeHoje.getHours();
    let minuto = dataDeHoje.getMinutes();
    let segundos = dataDeHoje.getSeconds();
   
    // condicional com ternario 
    hora < 10 ? hora = "0" +hora : hora
    minuto < 10 ? minuto = "0" +minuto : minuto
    segundos < 10 ? segundos = "0" +segundos : segundos
    
    hr.textContent = hora;
    min.textContent = minuto;
    seg.textContent = segundos;

});