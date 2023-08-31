function actualizar(){
    var nombre=document.getElementById('txtnombre').value;
    var nota1=parseFloat(document.getElementById('txtnota1').value);
    var nota2=parseFloat(document.getElementById('txtnota2').value);
    var nota3=parseFloat(document.getElementById('txtnota3').value);
    var examen=parseFloat(document.getElementById('txtExamen').value);
    var lblpromedio=document.getElementById("lblPromedio");
    var Observacion=document.getElementById("lblObservacion");
    var prom;

    if(nombre!=""){
        prom=((nota1+nota2+nota3+examen)/4);
        if(examen>=20 && prom>=30){
            lblpromedio.innerHTML = ""+prom;
            Observacion.innerHTML ="Aprobado";
        }else if(prom>=30 && examen<20){
            lblpromedio.innerHTML = ""+prom;
            Observacion.innerHTML ="Reprobado, no cumple la base del examen";
        }else if(examen<20 && prom<30){
            lblpromedio.innerHTML = ""+prom;
            Observacion.innerHTML ="Reprobado";
        }
        prom=0;
    }else{
        Observacion.innerHTML ="Debes ingresar un nombre ";
    }
    prom=0;  
}

function agregarEstudiante(){
    var tblDatos=document.getElementById('tblDatos').insertRow(1);
    var col1=tblDatos.insertCell(0);
    var col2=tblDatos.insertCell(1);
    var col3=tblDatos.insertCell(2);
    var col4=tblDatos.insertCell(3);
    var col5=tblDatos.insertCell(4);
    var col6=tblDatos.insertCell(5);
    var col7=tblDatos.insertCell(6);

    col1.innerHTML=("<input class='txt' type='text' id='txtnombre'>");
    col2.innerHTML=("<input class='txt' type='number' id='txtnota1'>");
    col3.innerHTML=("<input class='txt' type='number' id='txtnota2'>");
    col4.innerHTML=("<input class='txt' type='number' id='txtnota3'>");
    col5.innerHTML=("<input class='txt' type='number' id='txtExamen'>")
    col6.innerHTML=("<label class='txt' id='lblPromedio' onmousemove='actualizar()'>...</label>")
    col7.innerHTML=("<label class='txt2' id='lblObservacion' onmousemove='actualizar()'>...</label>")
}


function calcular(){
    var nombre=document.getElementById("txtNombre").value;
    var edad=parseInt(document.getElementById("txtEdad").value);
    var ciudad=document.getElementById("txtCiudad").value;
    var genero=document.getElementsByName("rtgenero");
    var resp=document.getElementById("lblresp");
    var reporte=document.getElementById("lblreporte");
    var valor=6;
    var g;

    const tiempo=Date.now;
    const hoy=new Date(tiempo);

    if(genero[0].checked){
        g="Masculino";
    }else if(genero[1].checked){
        g="Femenino";
    }

    if(nombre!=""){
        if(ciudad!=""){
            if(g=="Masculino"){//para mujer
                if(edad<1){
                    alert("No existe edad negativa o igual a cero");
                }else{
                    if(edad>=18 && edad<=65){//se considera mas 12%
                        valor=(valor*0.12)+valor;
                        resp.innerHTML=valor+"$";
                    }else if(edad>=65){//mayor de 65 -20%
                        valor=valor-(valor*0.20);
                        resp.innerHTML=valor+"$";
                    }else if(edad>=16 && edad<=18){
                        valor=valor-(valor*0.2);
                        resp.innerHTML=valor+"$";
                    }else if(edad>=12 && edad<=16){
                        resp.innerHTML=valor+"$";
                    }else if(edad<=12){
                        resp.innerHTML="Su entrada es gratuita";
                    }
                    if(edad>=100){
                        alert("Revise su entrada, es posible que la edad ingresada pertenezca a una persona muerta");
                    }
                }
            }else{
                if(g=="Femenino" && hoy.toLocaleDateString()=="08/03/2022"){
                    resp.innerHTML="Su entrada es gratuita";
                }
            } 
            reporte.innerHTML="Hola "+nombre+", usted de genero: "+g+
            " y una edad de "+edad+" perteneciente a la ciudad de: "+ciudad+
            " debe pagar un valor final de: "+valor;
        }else{
            alert("Ingrese un nombre");
        }   

    }else{
        alert("Ingrese un nombre");
    }

    
    
}