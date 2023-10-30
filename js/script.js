//Commentare la riga qua sotto dopo aver verificato che ci sia l' alert e che quindi sia tutto collegato
//alert("Test di collegamento")

const splittaDigit = () => {
    console.log("splittaDigit()");
    let valoreValue = document.querySelector("#valore").value;
    let decine = 0;
    let unita = 0;

    unita = valoreValue % 10;
    decine = valoreValue / 10 - (unita / 10);
    console.log("Decine:" + decine + ":")
    console.log("Unita:" + unita + ":")
    document.querySelector("#unita").innerHTML = "Unità: " + unita;
    document.querySelector("#decine").innerHTML = "Decine: " + decine;
}