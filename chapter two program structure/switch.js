// !Despachar un valor con switch 

switch (prompt("Como esta el día?")){
    case "lluvioso":
        console.log("Recuerda llevar un paraguas");
        break;
    case "soleado":
        console.log("Ponete algo ligero");
    case "nublado":
        console.log("Sal al exterior");
        break;
    default:
        console.log("Tipo de clima desconocido");
        break;
}

// ! En switch el flujo del programa seguira su camino de acuerdo al caso, hasta que encuentra un break, sino seguira
// ! recorriendo y compartiendo codigo con los otro casos, como por ejemplo con el caso SOLEADO de nuestro ejemplo.
