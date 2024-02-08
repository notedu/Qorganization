// IDs
const notesTextarea = document.getElementById("notes-textarea");
const btnNotes = document.getElementById("btn-notes-submit");
const btnNotesRemove = document.getElementById("btn-notes-remove");
const notes = document.getElementById("notes");
const bgColor = ['#ffff51', '#96ff51', '#51b8ff', '#3dff8c', '#ff3d3d', '#663dff', '#ffa43d', '#ff3ded'];

// btnNotes --> Botão para adicionar as notas escritas
btnNotes.addEventListener('click', () => {
    if (notesTextarea.value) {
        if (notesTextarea.value.length < 6) {
            btnNotes.innerText = "O mínimo de caracteres é 6";
            setTimeout(() => {
                btnNotes.innerText = "Enviar";
            }, 1500);
        } else {
            const pghNotes = document.createElement("p");
            pghNotes.classList.add("pgh-notes");
            pghNotes.style.backgroundColor = bgColor[Math.floor(Math.random() * bgColor.length)];
            pghNotes.innerHTML += notesTextarea.value;
            notes.appendChild(pghNotes);
            btnNotesRemove.removeAttribute("disabled");
        }
    } else {
        btnNotes.innerText = "Digite algo!";
        setTimeout(() => {
            btnNotes.innerText = "Enviar";
        }, 1500);
    }
})

// btnNotesRemove --> Remover as notas que ja foram escritas
btnNotesRemove.addEventListener('click', () => {
    notes.removeChild(notes.lastChild);
    if (notes.childElementCount <= 0) {
        btnNotesRemove.setAttribute("disabled", "disabled");
    }
})