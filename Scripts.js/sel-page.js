// Selectors \\

// Worksite Add, Edit, and Remove Query Selectors \\
const workstAddRemBtn = document.querySelector('#worksiteAddRemBtn');
const worksiteAddRemMenu = document.querySelector('#worksiteAddRemMenu');

const worksiteAddBtn = document.querySelector('#worksiteAddBtn');

const worksiteAdd = document.querySelector('#worksiteAdd');
const worksiteAddTitle = document.querySelector('#worksiteAddTitle');
const worksiteAddSubmit = document.querySelector('#worksiteAddSubmit');
const worksiteAddCancel = document.querySelector(".worksiteAddCancel")

const worksiteEditBtn = document.querySelector('#worksiteEditBtn');

const worksiteRemBtn = document.querySelector('#worksiteRemBtn');
const worksiteRemSubmit = document.querySelector('#worksiteRemSubmit')
const worksitePlacement = document.querySelectorAll('#worksitePlacement')

// Events \\
workstAddRemBtn.addEventListener('click', worksiteAddRemMenuToggle);

worksiteAddBtn.addEventListener('click', worksiteAddMenu);
worksiteAdd.addEventListener('submit', worksiteCreationSubmit);
worksiteAddCancel.addEventListener('click', worksiteCancelAdd)

worksiteRemBtn.addEventListener('click', worksiteRemMenu);

// Functions \\

// Working \\
function worksiteAddRemMenuToggle() {
    const worksiteMenuOpen1 = document.getElementById("worksiteAddBtn");
    
    const worksiteMenuOpen2 = document.getElementById ("worksiteEditBtn"); 
    
    const worksiteMenuOpen3 = document.getElementById ("worksiteRemBtn");

    
    
    
    // document.getElementById("worksiteAddRemMenu");
    
    if (worksiteMenuOpen1.style.display === "none" || worksiteMenuOpen1.style.display === '') {
        // worksiteAddBtn.style.
        // worksiteEditBtn
        // worksiteRemBtn
        worksiteMenuOpen1.style.display = "flex";
    } else {
        worksiteMenuOpen1.style.display = "none"
    };

    if (worksiteMenuOpen2.style.display === "none" || worksiteMenuOpen2.style.display === '') {
        // worksiteAddBtn.style.
        // worksiteEditBtn
        // worksiteRemBtn
        worksiteMenuOpen2.style.display = "flex";
    } else {
        worksiteMenuOpen2.style.display = "none"
    };


    if (worksiteMenuOpen3.style.display === "none" || worksiteMenuOpen3.style.display === '') {
        // worksiteAddBtn.style.
        // worksiteEditBtn
        // worksiteRemBtn
        worksiteMenuOpen3.style.display = "flex";
    } else {
        worksiteMenuOpen3.style.display = "none"
    };





    if (worksiteAddRemBtn.innerText === 'Cancel') {
        worksiteAddRemBtn.innerText = 'Add/Remove Location'
    } else {
        worksiteAddRemBtn.innerText = 'Cancel'
    };    
     
    

    }

// Working \\
function worksiteAddMenu () {
    const worksiteAddTitle = document.getElementById("worksiteAddTitle")

    const worksiteAddSubmit =document.getElementById("worksiteAddSubmit")

    const worksiteAddCancel = document.getElementById("worksiteAddCancel")
    
    const wrkstAddRemBtn = document.getElementById("worksiteAddRemBtn")

    const wrkstEditBtn = document.getElementById("worksiteEditBtn")

    const wrkstRemBtn = document.getElementById("worksiteRemBtn")

    if (worksiteAddTitle.style.display === "none" || worksiteAddTitle.style.display === '') {
        worksiteAddTitle.style.display = "flex";
        worksiteAddTitle.style.display = "justify-content: center";

    } else {
        worksiteAddTitle.style.display = "none"
    };

    if (worksiteAddCancel.style.display === "none" || worksiteAddCancel.style.display === '') {
        worksiteAddCancel.style.display = "flex";
        worksiteAddCancel.style.display = "justify-content: center";

    } else {
        worksiteAddCancel.style.display = "none"
    };

    if (worksiteAddSubmit.style.display === "none" || worksiteAddSubmit.style.display === '') {
        worksiteAddSubmit.style.display = "flex";
    
    } else {
        worksiteAddSubmit.style.display = "none"
    };

    if (wrkstAddRemBtn.style.display === "block" || wrkstAddRemBtn.style.display === '') {
        wrkstAddRemBtn.style.display = "none";

    } else {
        wrkstAddRemBtn.style.display = "block"
    };

    if (wrkstEditBtn.style.display === "block" || wrkstEditBtn.style.display === '') {
        wrkstEditBtn.style.display = "none";

    } else {
        wrkstEditBtn.style.display = "block"
    };

    if (wrkstRemBtn.style.display === "block" || wrkstRemBtn.style.display === '') {
        wrkstRemBtn.style.display = "none";

    } else {
        wrkstRemBtn.style.display = "block"
    };

    if (worksiteAddBtn.innerText === 'back') {
        worksiteAddBtn.innerText = 'Add a Worksite'
    } else {
        worksiteAddBtn.innerText = 'back'
    }; 
}
// Working \\
function worksiteCreationSubmit (e) {
        e.preventDefault()
    
    const newTitle = document.getElementById("worksiteAddTitle")

    if (newTitle.value === 'null' || newTitle.value === 'undefined' || newTitle.value === '') {
        alert ("Please Enter Worksite Name")
    } else {
        const worksiteListItem = document.createElement('li');


        const worksiteButton = document.createElement('button');
        worksiteButton.innerHTML = newTitle.value;

        

    document.getElementById('WorksitePlacement').appendChild(worksiteListItem);

    worksiteListItem.setAttribute("class",  "worksiteListItem")

    worksiteListItem.appendChild(worksiteButton);

    

    worksiteButton.setAttribute("class", "wrkstbtn")
    worksiteButton.setAttribute("name", newTitle.value)
    }

    newTitle.value = '';
    worksiteAddMenu();
    worksiteAddRemMenuToggle();
}



function worksiteRemMenu () {

}

// Starting App \\



// Trial with Edit
worksiteEditBtn.addEventListener('click', newButton)

function newButton() {
    const button = document.createElement('button');
    button.innerHTML = 'click me';
    document.getElementById('WorksitePlacement').appendChild(button);
    document.body.appendChild(button);
    
};
