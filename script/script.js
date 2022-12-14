/* Consegna:
Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.  (anche brutalmente, basta che si vedano)
Bonus:
Provare a stampare sia con i template literals che con i nodi, manipolando il DOM.
*/

const list = ["pasta", "riso", "carne", "latte", "pane", "acqua", "coca-cola", "sugo", "pandoro"];

const pasteElement = document.getElementById("paste");
const form = document.getElementById("form")



form.addEventListener("submit", function (event) {
    event.preventDefault();
    let x = 0;
    while (x < list.length) {

        let item = document.createElement("li");
        item.innerHTML = list[x];
        pasteElement.append(item);
        x++;
        item.classList.add("list-group-item")
    }
})
