function teste()
{
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    var imc = peso/(altura*altura)

    if (imc < 18.5)
    {
        alert("abaixo do peso")
    }
    else if(imc >= 18.5 && imc < 25)
    {
        alert("peso normal")
    }
    else if(imc >= 25 && imc < 30 )
    {
        alert("sobrepeso")
    }
    else if(imc >= 30 && imc < 40)
    {
        alert("obesidade")
    }
    else
    {
        alert("obesidade grave")
    }

}