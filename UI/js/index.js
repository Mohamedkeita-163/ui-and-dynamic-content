const textField = document.getElementById("itemInput");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("itemList");
const feedback = document.querySelector(".feedback");

function addItem(){

    const li = document.createElement("li");

    if(textField.value.trim() !== ""){

        li.textContent = textField.value;
        list.appendChild(li);

        feedback.textContent = "";
        textField.value = "";
        textField.focus();

    } else {

        feedback.textContent = "Nothing entered!";
    }
}

addButton.addEventListener("click", addItem);

/* ENTER key bonus */
textField.addEventListener("keypress", e => {
    if(e.key === "Enter") addItem();
});