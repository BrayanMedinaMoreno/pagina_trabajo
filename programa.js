let mes= new Date(), elmes=0, año=mes.getFullYear(), dia=mes.getDate();

let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
elmes=meses[mes.getMonth()];

document.getElementById("fechas").innerHTML= 'Mes: <br>'+ elmes+"<br> Año: <br>"+año+'<br> Dia: <br>'+dia

let visitas = localStorage.getItem('visitas');
    if(visitas == null){
        localStorage.setItem('visitas', 1);
    }
    else {
        localStorage.setItem('visitas', parseInt(visitas)+1);
        document.getElementById('visitas').innerHTML = `Cantidad de visitas: ${visitas}`;
    }