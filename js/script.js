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
assignment1.style.backgroundColor = 'rgb(235, 235, 231)';

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
            if (input_assignment4.value.length > 0) {
                try {
                    elements = document.querySelectorAll(input_assignment4.value);
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
        case (currentButton == button_assignment8):
            removeImg(img_wrapper_assignment8);
            addImgs(img_wrapper_assignment8, separationInput(input_assignment8.value));
            break;
        case (currentButton == button_assignment9):
            addImgs(img_wrapper_assignment9, separationInput(input_assignment9.value));
            break;
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
    input_assignment4 = document.createElement('input'),
    button_assingment4 = document.createElement('button');

assignment4.classList.add('assignment4');
container_assignment4.classList.add('container');
titleAssignment4.textContent = 'Assignment 4';
button_assingment4.classList.add('btn');
button_assingment4.textContent = 'HIDE';
input_assignment4.classList.add('input_assignment4');
input_assignment4.placeholder = 'enter CSS selector (for example: .rectangle .btn .css_btn)';


assignment3.insertAdjacentElement('afterend', assignment4);
assignment4.appendChild(container_assignment4);
assignment4.style.backgroundColor = 'rgb(255, 215, 215)';
input_assignment4.style.width = '50%';
container_assignment4.insertAdjacentElement('afterbegin', titleAssignment4);
container_assignment4.insertAdjacentElement('beforeend', input_assignment4);
container_assignment4.insertAdjacentElement('beforeend', button_assingment4);

//  assignment 5
const assignment5 = document.createElement('section'),
    titleAssignment5 = document.createElement('h2'),
    container_assignment5 = document.createElement('div'),
    rectangle_assignment5 = document.createElement('div');

assignment5.classList.add('assignment5');
container_assignment5.classList.add('container');
titleAssignment5.textContent = 'Assignment 5';
rectangle_assignment5.classList.add('rectangle');
rectangle_assignment5.classList.add('rectangle_yellow');

assignment4.insertAdjacentElement('afterend', assignment5);
assignment5.appendChild(container_assignment5);
assignment5.style.backgroundColor = 'rgb(203, 210, 252)';
container_assignment5.insertAdjacentElement('beforeend', titleAssignment5);
container_assignment5.insertAdjacentElement('beforeend', rectangle_assignment5);
rectangle_assignment5.style.backgroundColor = 'rgb(245, 241, 9)';
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
    hiddenElement(assignment5.querySelectorAll('.rectangle_yellow'));
}

//  assignment 6
const assignment6 = document.createElement('section'),
    titleAssignment6 = document.createElement('h2'),
    container_assignment6 = document.createElement('div'),
    rectangle_assignment6 = document.createElement('div'),
    button_assingment6 = document.createElement('button');

assignment6.classList.add('assignment6');
container_assignment6.classList.add('container');
titleAssignment6.textContent = 'Assignment 6';
rectangle_assignment6.textContent = 'Magic! YEP? :-D'
rectangle_assignment6.classList.add('rectangle');
rectangle_assignment6.classList.add('rectangle_red');
rectangle_assignment6.classList.add('hidden');
button_assingment6.classList.add('btn');
button_assingment6.textContent = 'SHOW INVISIBLE';
button_assingment6.style.height = '40px';

assignment5.insertAdjacentElement('afterend', assignment6);
assignment6.appendChild(container_assignment6);
assignment6.style.backgroundColor = 'rgb(227, 252, 203)';
container_assignment6.insertAdjacentElement('beforeend', titleAssignment6);
container_assignment6.insertAdjacentElement('beforeend', rectangle_assignment6);
container_assignment6.insertAdjacentElement('beforeend', button_assingment6);
rectangle_assignment6.style.backgroundColor = 'rgb(255, 0, 0)';
rectangle_assignment6.style.width = '50px';
rectangle_assignment6.style.height = '50px';

button_assingment6.addEventListener('mouseover', () => {
    removeHiddenStyle(container_assignment6.querySelectorAll(".rectangle_red"));
});
button_assingment6.addEventListener('mouseout', () => {
    hiddenElement(container_assignment6.querySelectorAll(".rectangle_red"));
});

//  assignment 7
const assignment7 = document.createElement('section'),
    titleAssignment7 = document.createElement('h2'),
    container_assignment7 = document.createElement('div'),
    input_assignment7 = document.createElement('input'),
    rectangle_assignment7 = document.createElement('div');

assignment7.classList.add('assignment7');
container_assignment7.classList.add('container');
rectangle_assignment7.classList.add('rectangle');
rectangle_assignment7.classList.add('rectangle_green');
rectangle_assignment7.classList.add('hidden');
titleAssignment7.textContent = 'Assignment 7';
input_assignment7.classList.add('input_assignment7');
input_assignment7.placeholder = 'type';
rectangle_assignment7.style.backgroundColor = 'rgb(16, 143, 5)';
rectangle_assignment7.style.width = '50px';
rectangle_assignment7.style.height = '20px';

assignment6.insertAdjacentElement('afterend', assignment7);
assignment7.appendChild(container_assignment7);
assignment7.style.backgroundColor = 'rgb(209, 209, 209)';
container_assignment7.insertAdjacentElement('afterbegin', titleAssignment7);
container_assignment7.insertAdjacentElement('beforeend', rectangle_assignment7);
container_assignment7.insertAdjacentElement('beforeend', input_assignment7);

input_assignment7.addEventListener('click', () => {
    removeHiddenStyle(container_assignment7.querySelectorAll(".rectangle_green"));
});

input_assignment7.addEventListener('keydown', () => {
    hiddenElement(container_assignment7.querySelectorAll(".rectangle_green"));
});


//  assignment 8
const assignment8 = document.createElement('section'),
    titleAssignment8 = document.createElement('h2'),
    container_assignment8 = document.createElement('div'),
    input_assignment8 = document.createElement('input'),
    button_assignment8 = document.createElement('button'),
    img_wrapper_assignment8 = document.createElement('div');

assignment8.classList.add('assignment8');
container_assignment8.classList.add('container');
titleAssignment8.textContent = 'Assignment 8';
input_assignment8.classList.add('input_assignment8');
input_assignment8.placeholder = 'Insert link to picture';
button_assignment8.classList.add('btn');
button_assignment8.classList.add('btn_big');
button_assignment8.textContent = 'SHOW IMAGE';
img_wrapper_assignment8.classList.add('img_wrapper');


assignment7.insertAdjacentElement('afterend', assignment8);
assignment8.appendChild(container_assignment8);

assignment8.style.backgroundColor = 'rgb(252, 188, 243)';
container_assignment8.insertAdjacentElement('afterbegin', titleAssignment8);
container_assignment8.insertAdjacentElement('beforeend', img_wrapper_assignment8);
container_assignment8.insertAdjacentElement('beforeend', input_assignment8);
container_assignment8.insertAdjacentElement('beforeend', button_assignment8);

function removeImg(parentNode) {
    if (parentNode.querySelector('img') != null) {
        parentNode.querySelector('img').remove();
    }
}

function separationInput(inputValue) {
    return inputValue.split('\n');
}

function addImgs(parentNode, imgList) {
    for (let i = 0; i < imgList.length; i++) {
        let img = document.createElement('img');
        img.src = imgList[i];
        parentNode.insertAdjacentElement('beforeend', img);
    }
}

//  assignment 9
const assignment9 = document.createElement('section'),
    titleAssignment9 = document.createElement('h2'),
    container_assignment9 = document.createElement('div'),
    input_assignment9 = document.createElement('textarea'),
    img_wrapper_assignment9 = document.createElement('div'),
    button_assignment9 = document.createElement('button');

assignment9.classList.add('assignment9');
container_assignment9.classList.add('container');
titleAssignment9.textContent = 'Assignment 9';
input_assignment9.classList.add('input_assignment9');
input_assignment9.placeholder = 'Insert link to pictures';
button_assignment9.classList.add('btn');
button_assignment9.classList.add('btn_big');
button_assignment9.textContent = 'SHOW IMAGE';
img_wrapper_assignment9.classList.add('img_wrapper');

assignment8.insertAdjacentElement('afterend', assignment9);
assignment9.appendChild(container_assignment9);

assignment9.style.backgroundColor = 'rgb(255, 246, 168)';
container_assignment9.insertAdjacentElement('afterbegin', titleAssignment9);
container_assignment9.insertAdjacentElement('beforeend', img_wrapper_assignment9);

container_assignment9.insertAdjacentElement('beforeend', input_assignment9);
container_assignment9.insertAdjacentElement('beforeend', button_assignment9);

// assignment 10
const assignment10 = document.createElement('div'),
    mouse_location = document.createElement('div'),
    coordinat_wrapper = `<div>Coord X: <span id ="coordX">0</span></div>
    <div>Coord Y: <span id ="coordY">0</span></div>`;

let coord_X = '0',
    coord_Y = '0';

assignment10.classList.add('assignment10');
assignment10.classList.add('info_box');
mouse_location.classList.add('coordinate_mouse');

assignment10.style.backgroundColor = 'rgb(68, 70, 69)';

body.insertAdjacentElement('afterbegin', assignment10);
assignment10.insertAdjacentElement('afterbegin', mouse_location);
mouse_location.innerHTML = ('afterbegin', coordinat_wrapper);

coord_X = assignment10.querySelector('#coordX'),
    coord_Y = assignment10.querySelector('#coordY');

body.addEventListener('mousemove', event => {
    coord_X.innerHTML = `${event.clientX}`;
    coord_Y.innerHTML = `${event.clientY}`;
})

body.addEventListener('mouseout', () => {
    coord_X.innerHTML = `0`;
    coord_Y.innerHTML = `0`;
})

// assignment 11
const assignment11 = document.createElement('div'),
    browser_language = document.createElement('div');

assignment11.classList.add('assignment11');
browser_language.classList.add('browser_language');

assignment10.insertAdjacentElement('beforeend', assignment11);
assignment11.insertAdjacentElement('afterbegin', browser_language);

browser_language.textContent = 'Browser language: ' + window.navigator.language;

// assignment 12
const assignment12 = document.createElement('div'),
    assignment12_message = document.createElement('div'),
    geolocation_latitude = document.createElement('div'),
    geolocation_longitude = document.createElement('div');

assignment12.classList.add('assignment12');
assignment12_message.classList.add('assignment12_message');
geolocation_latitude.classList.add('geolocation');
geolocation_longitude.classList.add('geolocation');

assignment10.insertAdjacentElement('beforeend', assignment12);

navigator.geolocation.getCurrentPosition(position => {
    assignment12_message.textContent = 'I SEE YOU 🤡 ';
    assignment12_message.style.color = 'rgb(202, 55, 55)';
    assignment12.insertAdjacentElement('afterbegin', assignment12_message);
    assignment12.insertAdjacentElement('beforeend', geolocation_latitude);
    assignment12.insertAdjacentElement('beforeend', geolocation_longitude);
    geolocation_latitude.textContent = 'latitude: ' + position.coords.latitude;
    geolocation_longitude.textContent = 'longitude: ' + position.coords.longitude;
});

checkGeo();

function checkGeo() {
    let coordGeo = assignment12.querySelector('geolocation');
    console.log(coordGeo);
    if (coordGeo == null) {
        assignment12_message.style.color = 'rgb(255, 180, 180)';
        assignment12_message.textContent = 'I`ll find you later...🤡'
        assignment12.insertAdjacentElement('beforeend', assignment12_message);
        assignment12.insertAdjacentElement('afterbegin', geolocation_latitude);
        assignment12.insertAdjacentElement('afterbegin', geolocation_longitude);
        geolocation_latitude.textContent = 'latitude: no data';
        geolocation_longitude.textContent = 'longitude: no data';
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', handleClick)

});