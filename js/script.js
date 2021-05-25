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
rectangle_black_assignment1.classList.add('rectangle');
rectangle_black_assignment1.classList.add('rectangle_black');
titleAssignment1.textContent = 'Assignment 1 / 2';

body.appendChild(assignment1);
assignment1.appendChild(container_assignment1);
container_assignment1.insertAdjacentElement('afterbegin', titleAssignment1);
container_assignment1.insertAdjacentElement('beforeend', rectangle_black_assignment1);
container_assignment1.insertAdjacentHTML('beforeend', button_wrapper_assingment1);

// action with elements
function changeStyle(elements) {
    elements.forEach(el => {
        el.style.display = 'none';
    })
};

function deleteElement(elements) {
    elements.forEach(el => {
        el.remove();
    })
};

function hiddenElement(elements) {
    elements.forEach(el => {
        el.classList.add('hidden');
    })
};

function removeHiddenStyle(elements) {
    elements.forEach(el => {
        el.classList.remove('hidden');
    });
};

function choiseHideOrShow(currentButton, elements) {
    if (currentButton.textContent == 'HIDE') {
        hiddenElement(elements);
    } else {
        removeHiddenStyle(elements);
    };
};

// on the background
function handleClick(e) {
    choiseAction(e.currentTarget);
};

function changingLabelButton(currentButton) {
    if (currentButton.textContent == 'HIDE') {
        currentButton.textContent = 'SHOW';
    } else {
        currentButton.textContent = 'HIDE';
    }
};

function findParent(childElement) {
    return (childElement.parentElement).parentElement;
}

function findRectangleToChange(parent) {
    return parent.querySelectorAll(".rectangle_black");
};

// shoise action
function choiseAction(currentButton) {
    let parent = findParent(currentButton);
    let elements = findRectangleToChange(parent);

    switch (true) {
        case (currentButton.textContent == 'CSS'):
            changeStyle(elements);
            break;
        case (currentButton.textContent == 'JS'):
            deleteElement(elements);
            break;
        case (currentButton.textContent == 'CSS+JS'):
            // deleteHiddenElement();
            checkPresence(parent, elements);
            break;
            // assignment 3
        case (currentButton == button_assingment3):
            changingLabelButton(currentButton);
            checkPresence(parent, elements);
            break;
        case (currentButton == button_assingment4):
            if (input.value.length > 0) {
                try {
                    elements = document.querySelectorAll(input.value);
                } catch {
                    alert('enter correct selector');
                    break;
                }
                if (elements.length == 0) {
                    alert('no item found for this selector');
                    break;
                };
                choiseHideOrShow(currentButton, elements);
                changingLabelButton(currentButton);;
                break;
            } else {
                alert('no selector, enter selector');
            };
    }
};

//  assignment 2
function checkPresence(parent, elements) {
    if (parent.querySelector('.hidden') != null) {
        elements.forEach(el => {
            el.classList.remove('hidden');
        });
    } else {
        hiddenElement(elements);
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
assignment3.style.backgroundColor = 'rgb(185, 250, 199)';
container_assignment3.insertAdjacentElement('afterbegin', titleAssignment3);
container_assignment3.insertAdjacentHTML('beforeend', rectangle_wrapper_assingment3);
container_assignment3.insertAdjacentElement('beforeend', button_assingment3);

//  assignment 4
const assignment4 = document.createElement('section'),
    titleAssignment4 = document.createElement('h2'),
    container_assignment4 = document.createElement('div'),
    input = document.createElement('input'),
    button_assingment4 = document.createElement('button');

assignment4.classList.add('assignment4');
container_assignment4.classList.add('container');
titleAssignment4.textContent = 'Assignment 4';
button_assingment4.classList.add('btn');
button_assingment4.textContent = 'HIDE';
input.classList.add('input_assignment4');
input.placeholder = 'enter CSS selector (for example: .rectangle .btn .css_btn)';


assignment3.insertAdjacentElement('afterend', assignment4);
assignment4.appendChild(container_assignment4);
assignment4.style.backgroundColor = 'rgb(255, 215, 215)';
container_assignment4.insertAdjacentElement('afterbegin', titleAssignment4);
container_assignment4.insertAdjacentElement('beforeend', input);
container_assignment4.insertAdjacentElement('beforeend', button_assingment4);

//  assignment 5
const assignment5 = document.createElement('section'),
    titleAssignment5 = document.createElement('h2'),
    container_assignment5 = document.createElement('div'),
    rectangle_assignment5 = document.createElement('div');

assignment5.classList.add('assignment5');
container_assignment5.classList.add('container');
titleAssignment5.textContent = 'Assignment 5';
rectangle_assignment5.classList.add('rectangle')
rectangle_assignment5.classList.add('rectangle_yellow')

assignment4.insertAdjacentElement('afterend', assignment5);
assignment5.appendChild(container_assignment5);
assignment5.style.backgroundColor = 'rgb(203, 210, 252)';
container_assignment5.insertAdjacentElement('beforeend', titleAssignment5);
container_assignment5.insertAdjacentElement('beforeend', rectangle_assignment5);
rectangle_assignment5.style.backgroundColor = ('rgb(245, 241, 9');
rectangle_assignment5.addEventListener('click', firstAction);

function firstAction() {
    alert('Hey everyone!');
    changeAction();
}

function changeAction() {
    rectangle_assignment5.removeEventListener('click', firstAction);
    rectangle_assignment5.addEventListener('click', secondAction);
}

function secondAction() {
    console.log()
    hiddenElement(assignment5.querySelectorAll('.rectangle_yellow'));
}





const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
});