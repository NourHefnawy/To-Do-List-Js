let input = document.getElementById("in");
const list = document.getElementById("list");


function addTask() {
    if (input.value === '') {
        alert("You must write something!");
    } else {

        //add li
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);

        //add x
        let delet = document.createElement("span");
        delet.innerHTML = "\u00d7";
        delet.id = "x";
        li.appendChild(delet);

        //add edit
        let editIcon = document.createElement("span");
        editIcon.innerHTML = "<i style='font-size:25px' class='fas'>&#xf044;</i>";
        editIcon.id = "edit";
        li.appendChild(editIcon);

        // edit fun
        editIcon.addEventListener("click", function (e) {
          
            let currentText = li.textContent.trim();

            if (currentText.length > 0) {
                // Remove the last 2 characters
                currentText = currentText.slice(0, -2);
            }
            
            li.textContent = '';

            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = currentText;
            editInput.id = "inp";
            li.appendChild(editInput);

            editInput.focus();

            let saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.id = "save";
            li.appendChild(saveButton);

            saveButton.addEventListener("click", function () {
                let trimmedValue = editInput.value.trim();
                if (trimmedValue !== '') {
                    // Update <li> with the edited text
                    li.textContent = trimmedValue;
                    li.appendChild(delet);
                    li.appendChild(editIcon);
                } else {
                    // If input is empty, revert back to original text
                    li.textContent = currentText;
                    li.appendChild(delet);
                    li.appendChild(editIcon);
                }
            });

        });


    }
    input.value = "";
}
list.addEventListener("click", function (e) {
    if (e.target.tagName === "li") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.id === "x") {

        e.target.parentElement.remove();

    }
});