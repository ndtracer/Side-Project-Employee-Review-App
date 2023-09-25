// Selectors \\


// Add, Edit, Remove Button and Menu(s) \\
const worksiteAddRemBtn = document.querySelector('#worksiteAddRemBtn');
const worksiteAddRemMenu = document.querySelector('#worksiteAddRemMenu');

// Add Button \\
const worksiteAddBtn = document.querySelector('#worksiteAddBtn')

// Add Form and Buttons \\
const worksiteAddForm = document.querySelector('.worksiteAddForm');
const worksiteAddTitle = document.querySelector('#worksiteAddTitle')
const worksiteAddCancel = document.querySelector('#worksiteAddCancel')
const worksiteAddSubmit = document.querySelector('#worksiteAddSubmit')

// Edit button and Menu\\
const worksiteEditButton = document.querySelector('.worksiteEditButton')
// Remove Button and Menu \\
const worksiteRemButton = document.querySelector('.worksiteRemButton')

// Events \\

// Add, Edit, Remove Toggle Listener \\
worksiteAddRemBtn.addEventListener('click', worksiteAddRemMenuToggle);

// Add Form Events \\
worksiteAddBtn.addEventListener('click', worksiteAddMenu);

worksiteAdd.addEventListener('submit', worksiteCreationSubmit);

// Edit Events \\


// Remove Events \\


// Functions \\


// Add, Edit, Remove Button Toggle \\
// Working \\
function worksiteAddRemMenuToggle() {
    const worksiteAddButton = document.querySelector('#worksiteAddBtn')

    const worksiteEditButton = document.querySelector('#worksiteEditBtn')

    const worksiteRemButton = document.querySelector('#worksiteRemBtn')

    if (worksiteAddButton.style.display === "none" || worksiteAddButton.style.display === '') {       
        worksiteAddButton.style.display = "flex";
    } else {
        worksiteAddButton.style.display = "none"
    };

    if (worksiteEditButton.style.display === "none" || worksiteEditButton.style.display === '') {       
        worksiteEditButton.style.display = "flex";
    } else {
        worksiteEditButton.style.display = "none"
    };

    if (worksiteRemButton.style.display === "none" || worksiteRemButton.style.display === '') {       
        worksiteRemButton.style.display = "flex";
    } else {
        worksiteRemButton.style.display = "none"
    };

    if (worksiteAddRemBtn.innerText === 'Cancel') {
        worksiteAddRemBtn.innerText = 'Add, Edit, Remove';
    } else {
        worksiteAddRemBtn.innerText = 'Cancel';
    };    
    }

// Add Menu button \\
//Working\\
function worksiteAddMenu () {
    const worksiteAddTitle = document.getElementById("worksiteAddTitle")
     
    const worksiteAddSubmit =document.getElementById("worksiteAddSubmit")
    const worksiteAddCancel = document.getElementById("worksiteAddCancel")
    
    const wrkstAddRemBtn = document.getElementById("worksiteAddRemBtn")
    

    if (worksiteAddTitle.style.display === "none" || worksiteAddTitle.style.display === '') {
        worksiteAddTitle.style.display = "flex";
        worksiteAddTitle.style.display = "justify-content: center";
    } else {
        worksiteAddTitle.style.display = "none"
    };

    if (worksiteAddCancel.style.display === "none" || worksiteAddCancel.style.display === '' || worksiteAddCancel.style.display === 'null') {
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

    
    
}


// Add Form Submit \\
// Not Complete
function worksiteCreationSubmit (e) {
    e.preventDefault();

const newTitle = document.getElementById("worksiteAddTitle")

if (newTitle.value === 'null' || newTitle.value === 'undefined' || newTitle.value === '') {
    alert ("Please Enter Worksite Name")
} else {
    const worksiteListItem = document.createElement('li');

    const worksiteRemBtn = 
    document.createElement('button');

    const worksiteButton = document.createElement('button');
    worksiteButton.innerHTML = newTitle.value;

    const worksiteEditBtn = document.createElement('button');

    

document.getElementById('WorksitePlacement').appendChild(worksiteListItem);

worksiteListItem.setAttribute("class",  "worksiteListItem")

worksiteListItem.appendChild(worksiteRemBtn);

worksiteListItem.appendChild(worksiteButton);

worksiteListItem.appendChild(worksiteEditBtn);

worksiteEditBtn.setAttribute("class",  "worksiteEditButton");

worksiteButton.setAttribute("class", "wrkstbtn")
worksiteButton.setAttribute("name", newTitle.value)

worksiteRemBtn.setAttribute("class",  "worksiteRemButton");
}



newTitle.value = '';
worksiteAddMenu();
worksiteAddRemMenuToggle();
}




// Add Cancel Submit \\