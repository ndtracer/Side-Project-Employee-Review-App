// Selectors \\


// Add, Edit, Remove Button and Menu(s) \\
const worksiteAddRemButton = document.querySelector('#worksiteAddRemButton');
console.log(worksiteAddRemButton)
const worksiteAddRemMenu = document.querySelector('#worksiteAddRemMenu');

// Add Button \\
const worksiteAddButton = document.querySelector('#worksiteAddButton')

// Add Form and Buttons \\
const worksiteAddForm = document.querySelector('#worksiteAddForm');
const worksiteAddTitle = document.querySelector('#worksiteAddTitle')
const worksiteAddCancel = document.querySelector('#worksiteAddCancel')
const worksiteAddSubmit = document.querySelector('#worksiteAddSubmit')

// Edit button and Menu\\
const worksiteEditButton = document.querySelector('#worksiteEditButton')

// Remove Button and Menu \\
const worksiteRemButton = document.querySelector('#worksiteRemButton')

// Events \\

// Add, Edit, Remove Toggle Listener \\
worksiteAddRemButton.addEventListener('click', worksiteAddRemMenuToggle);

// Add Form Events \\
worksiteAddButton.addEventListener('click', worksiteAddMenu);

worksiteAdd.addEventListener('submit', worksiteCreationSubmit);

worksiteAddCancel.addEventListener('click', worksiteAddFormCancel);

// Edit Events \\
worksiteEditButton.addEventListener('click', worksiteEditFormToggle)

// Remove Events \\


// Functions \\


// Add, Edit, Remove Button Toggle \\
// Working \\
function worksiteAddRemMenuToggle() {
        
    if (worksiteAddButton.style.display === "none" || worksiteAddButton.style.display === '') {       
        worksiteAddButton.style.display = "flex";
    } else {
        worksiteAddButton.style.display = "none"
    };

    if (worksiteAddRemButton.innerText === 'Cancel') {
        worksiteAddRemButton.innerText = 'Add, Edit, Remove';
    } else {
        worksiteAddRemButton.innerText = 'Cancel';
    };   

    const worksiteEditButtons = document.querySelectorAll('#worksiteEditButton')

    worksiteEditButtons.forEach(worksiteEditButton => {
    if (worksiteEditButton === null) {
        console.log("nothing yet")
    } else if
    (worksiteEditButton.style.display === "none" || worksiteEditButton.style.display === '') {       
        worksiteEditButton.style.display = "flex";
    } else {
        worksiteEditButton.style.display = "none"
    }
});

    const worksiteRemButtons = document.querySelectorAll('#worksiteRemButton')

    worksiteRemButtons.forEach(worksiteRemButton => {
    if (worksiteRemButton === null) {
        console.log("nothing yet")
    } else if
    (worksiteRemButton.style.display === "none" || worksiteRemButton.style.display === '') {       
        worksiteRemButton.style.display = "flex";
    } else {
        worksiteRemButton.style.display = "none"
    }; 
    });

};

// Add Menu button \\
//Working\\
function worksiteAddMenu () {
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

    if (worksiteAddRemButton.style.display === "block" || worksiteAddRemButton.style.display === '') {
        worksiteAddRemButton.style.display = "none";

    } else {
        worksiteAddRemButton.style.display = "block"
    };

    worksiteAddRemMenuToggle();
    
}

// Add Form Submit \\
// Working \\
function worksiteCreationSubmit (e) {
    e.preventDefault();

const newTitle = document.getElementById("worksiteAddTitle")

if (newTitle.value === 'null' || newTitle.value === 'undefined' || newTitle.value === '') {
    alert ("Please Enter Worksite Name")
} else {
    const worksiteListItem = document.createElement('li');
    worksiteListItem.style.display = "flex"

    const worksiteRemButton = 
    document.createElement('button');
    worksiteRemButton.innerHTML = '&minus;';
    
    const worksitediv = document.createElement('div')

    const worksiteButton = document.createElement('button');
    worksiteButton.innerHTML = newTitle.value;
    
    const worksitediv2 = document.createElement('div')
    const worksiteEditButton = document.createElement('button');
    worksiteEditButton.innerHTML = "i"
    
    

document.getElementById('WorksitePlacement').appendChild(worksiteListItem);

worksiteListItem.setAttribute("class",  "worksiteListItem")

worksiteListItem.appendChild(worksitediv)

worksitediv.setAttribute("class", "worksitediv")

worksitediv.appendChild(worksiteRemButton);


worksiteRemButton.setAttribute("id",  "worksiteRemButton");


worksiteListItem.appendChild(worksiteButton);

worksiteButton.setAttribute("id", "wrkstbtn")
worksiteButton.setAttribute("name", newTitle.value)


worksiteListItem.appendChild(worksitediv2)

worksitediv2.setAttribute("class", "worksitediv2")

worksitediv2.appendChild(worksiteEditButton);

worksiteEditButton.setAttribute("id",  "worksiteEditButton");

worksiteEditButton.setAttribute("name", "i")




}



newTitle.value = '';
worksiteAddMenu();
worksiteAddRemMenuToggle();
}

// Add Cancel Submit \\
// Working \\
function worksiteAddFormCancel () {
    const formText = document.getElementById("worksiteAdd")

    formText.reset();
    worksiteAddMenu();
}

// Edit Form Toggle \\
// Not Complete \\
function worksiteEditFormToggle () {
    // const editWorksiteName = this.getElementById("wrkstbtn")
    const editWorksiteForm = document.createElement('form')
    editWorksiteForm.style.display = "flex"

    const editWorksiteInput = document.createElement('input')
    editWorksiteInput.type = "text"

    const editWorksiteButton = document.createElement('button')
    editWorksiteButton.type = "submit"

    document.getElementsByClassName('this.worksiteListItem')
       
    worksiteListItem.appendChild("editWorksiteForm")
    
    editWorksiteForm.appendChild ("editWorksiteInput")
}