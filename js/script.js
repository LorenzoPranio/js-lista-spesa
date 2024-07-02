//Creare una lista della spesa (ingredienti) e la mostro a schermo 

const ingredienti = ["Uova", "Pane","Riso","Cioccolato","Gelato","Piadine","Prosciutto Cotto","Sottilette","Insalata","Funghi"]

//Recupero l'elemento che deve contenere la spesa

const lista_spesa = document.getElementById("lista-spesa")

//dichiaro una variabile i = 0

let i = 0

//4.> Ciclo l'array con CICLE WHILE i < ingrendienti.length

while(i < ingredienti.length){
    //Creo un nuovo list item

    let li = document.createElement("li")

    //Inserisco il testo all'interno li = [i]

    li.innerHTML = ingredienti[i]

    //APPEND list item all'interno

    lista_spesa.append(li)
    i++

}



