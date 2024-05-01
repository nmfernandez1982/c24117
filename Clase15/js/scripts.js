function calcular()
{
    var valor1=document.getElementById("valor1").value;
    var valor2=document.getElementById("valor2").value;

   
    var select=document.getElementById("operacion");
    var select_activo=select.options[select.selectedIndex].value;

    var resultado=0;

    switch(select_activo=Number(select_activo))
    {
        case 1:
            resultado=(parseInt(valor1)+ parseInt(valor2));
            break;
        case 2:
            resultado=(valor1-valor2);
            break;
        case 3:
            resultado=(valor1*valor2);
            break;
        case 4:
            if(valor2==0)
            {
                valor2=1;
                alert("Ojo con la div por cero");  
            }        
            resultado=(valor1/valor2);
            break;       
    }

document.getElementById("valor3").value=resultado;

}