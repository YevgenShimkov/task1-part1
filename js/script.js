//  assignment 1
const body = document.body;
const assignment1 = document.createElement('section'),
    container_assignment1 = document.createElement("div"),
    rectangle_black_assignment1 = document.createElement('div'),
    titleAssignment1 = document.createElement('h2'),

    button_wrapper_assingment1 = `
        <div class = 'button_wrapper'>
            <button class='btn css_btn'>CSS</button>
            <button class='btn js_btn'>JS</button>
            <button class='btn cssJs_btn'>CSS+JS</button>
            </div>`;
assignment1.classList.add('assignment1');
container_assignment1.classList.add('container');
rectangle_black_assignment1.classList.add('rectangle_black');
titleAssignment1.textContent = 'Assignment 1 / 2';
body.appendChild(assignment1);
assignment1.appendChild(container_assignment1);
container_assignment1.insertAdjacentElement('afterbegin', titleAssignment1);
container_assignment1.insertAdjacentElement('beforeend', rectangle_black_assignment1);
container_assignment1.insertAdjacentHTML('beforeend', button_wrapper_assingment1);

const assignment1Rectangle = document.querySelector('.rectangle_black');

function changeStyle() {
    assignment1Rectangle.style.display = 'none';
};

function deleteElement() {
    assignment1Rectangle.remove();
};

function deleteHiddenElement() {
    assignment1Rectangle.classList.add('hidden');
};

function hiddenElement(currentButton) {
    rectangle_assignment3.forEach(rec => {
        rec.classList.add('hidden');
    });
    currentButton.textContent = 'SHOW';
};

function handleClick(e) {
    const currentButton = e.currentTarget;
    choiseAction(currentButton);
};

function choiseAction(currentButton) {
    switch (true) {
        case (currentButton.textContent == 'CSS'):
            changeStyle();
            break;
        case (currentButton.textContent == 'JS'):
            deleteElement();
            break;
        case (currentButton.textContent == 'CSS+JS'):
            // deleteHiddenElement();
            checkPresenceAssignment1();
            break;
            // assignment 3
        case (currentButton.textContent == 'HIDE' || currentButton.textContent == 'SHOW'):
            checkPresenceAssignment3(currentButton);
            break;
    }
};

//  assignment 2
function checkPresenceAssignment1() {
    if (assignment1.querySelector('.hidden') != null) {
        assignment1Rectangle.classList.remove('hidden');
    } else {
        deleteHiddenElement();
    };
}
//  assignment 3
function checkPresenceAssignment3(currentButton) {
    if (assignment3.querySelector('.hidden') != null) {
        rectangle_assignment3.forEach(rec => {
            rec.classList.remove('hidden');
        });
        currentButton.textContent = 'HIDE';
    } else {
        hiddenElement(currentButton);
    };
}




//  assignment 3
const assignment3 = document.createElement('section'),
    titleAssignment3 = document.createElement('h2'),
    container_assignment3 = document.createElement('div'),
    rectangle_black_assignment3 = document.createElement('div'),
    button_assingment3 = document.createElement('button'),
    rectangle_wrapper_assingment3 = `
    <div class = 'rectangle_wrapper'>
        <div class='rectangle rectangle_black'></div>
        <div class='rectangle rectangle_black'></div>
        <div class='rectangle rectangle_black'></div>
        <div class='rectangle rectangle_black'></div>
        <div class='rectangle rectangle_black'></div>
        </div>`;

assignment3.classList.add('assignment3');
container_assignment3.classList.add('container');
titleAssignment3.textContent = 'Assignment 3';
button_assingment3.classList.add('btn');
button_assingment3.textContent = 'HIDE';

assignment1.insertAdjacentElement('afterend', assignment3);
assignment3.appendChild(container_assignment3);
assignment3.style.backgroundColor = 'rgb(218, 248, 204)';
container_assignment3.insertAdjacentElement('afterbegin', titleAssignment3);
container_assignment3.insertAdjacentHTML('beforeend', rectangle_wrapper_assingment3);
container_assignment3.insertAdjacentElement('beforeend', button_assingment3);

const rectangle_assignment3 = assignment3.querySelectorAll('.rectangle_black');

//  assignment 4





const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
});