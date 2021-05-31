//  assignment 1
const body = document.body;
const assignment1 = document.createElement('section'),
    container_assignment1 = document.createElement("div"),
    rectangle_black_assignment1 = document.createElement('div'),
    title_assignment1 = document.createElement('h2'),
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
title_assignment1.textContent = 'Assignment 1 / 2';
assignment1.style.backgroundColor = 'rgb(235, 235, 231)';

body.appendChild(assignment1);
assignment1.appendChild(container_assignment1);
container_assignment1.insertAdjacentElement('afterbegin', title_assignment1);
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
    if (e.currentTarget == second_block_assignment15) {
        e.stopPropagation();
    }
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
        case (currentButton == button_assignment14):
            goTop();
            break;
        case (currentButton == first_block_assignment15):
            alert('nope, still missed');
            break;
        case (currentButton == second_block_assignment15):
            alert('yes, you hit target');
            break;
        case (currentButton == button_assignment16):
            removeHiddenStyle(body.querySelectorAll('.blocking_element'));
            document.body.style.overflow = 'hidden';
            body.classList.add('blocked');
            break;
        case (currentButton == blocking_element):
            hiddenElement(body.querySelectorAll('.blocking_element'));
            document.body.style.overflow = '';
            body.classList.remove('blocked');
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
    title_assignment3 = document.createElement('h2'),
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
title_assignment3.textContent = 'Assignment 3';
button_assingment3.classList.add('btn');
button_assingment3.textContent = 'HIDE';

assignment1.insertAdjacentElement('afterend', assignment3);
assignment3.appendChild(container_assignment3);
assignment3.style.backgroundColor = 'rgb(185, 250, 199)';
container_assignment3.insertAdjacentElement('afterbegin', title_assignment3);
container_assignment3.insertAdjacentHTML('beforeend', rectangle_wrapper_assingment3);
container_assignment3.insertAdjacentElement('beforeend', button_assingment3);

//  assignment 4
const assignment4 = document.createElement('section'),
    title_assignment4 = document.createElement('h2'),
    container_assignment4 = document.createElement('div'),
    input_assignment4 = document.createElement('input'),
    button_assingment4 = document.createElement('button');

assignment4.classList.add('assignment4');
container_assignment4.classList.add('container');
title_assignment4.textContent = 'Assignment 4';
button_assingment4.classList.add('btn');
button_assingment4.textContent = 'HIDE';
input_assignment4.classList.add('input_assignment4');
input_assignment4.placeholder = 'enter CSS selector (for example: .rectangle .btn .css_btn)';


assignment3.insertAdjacentElement('afterend', assignment4);
assignment4.appendChild(container_assignment4);
assignment4.style.backgroundColor = 'rgb(255, 215, 215)';
input_assignment4.style.width = '50%';
container_assignment4.insertAdjacentElement('afterbegin', title_assignment4);
container_assignment4.insertAdjacentElement('beforeend', input_assignment4);
container_assignment4.insertAdjacentElement('beforeend', button_assingment4);

//  assignment 5
const assignment5 = document.createElement('section'),
    title_assignment5 = document.createElement('h2'),
    container_assignment5 = document.createElement('div'),
    rectangle_assignment5 = document.createElement('div');

assignment5.classList.add('assignment5');
container_assignment5.classList.add('container');
title_assignment5.textContent = 'Assignment 5';
rectangle_assignment5.classList.add('rectangle');
rectangle_assignment5.classList.add('rectangle_yellow');

assignment4.insertAdjacentElement('afterend', assignment5);
assignment5.appendChild(container_assignment5);
assignment5.style.backgroundColor = 'rgb(203, 210, 252)';
container_assignment5.insertAdjacentElement('beforeend', title_assignment5);
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
    title_assignment6 = document.createElement('h2'),
    container_assignment6 = document.createElement('div'),
    rectangle_assignment6 = document.createElement('div'),
    button_assingment6 = document.createElement('button');

assignment6.classList.add('assignment6');
container_assignment6.classList.add('container');
title_assignment6.textContent = 'Assignment 6';
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
container_assignment6.insertAdjacentElement('beforeend', title_assignment6);
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
    title_assignment7 = document.createElement('h2'),
    container_assignment7 = document.createElement('div'),
    input_assignment7 = document.createElement('input'),
    rectangle_assignment7 = document.createElement('div');

assignment7.classList.add('assignment7');
container_assignment7.classList.add('container');
rectangle_assignment7.classList.add('rectangle');
rectangle_assignment7.classList.add('rectangle_green');
rectangle_assignment7.classList.add('hidden');
title_assignment7.textContent = 'Assignment 7';
input_assignment7.classList.add('input_assignment7');
input_assignment7.placeholder = 'type';
rectangle_assignment7.style.backgroundColor = 'rgb(16, 143, 5)';
rectangle_assignment7.style.width = '50px';
rectangle_assignment7.style.height = '20px';

assignment6.insertAdjacentElement('afterend', assignment7);
assignment7.appendChild(container_assignment7);
assignment7.style.backgroundColor = 'rgb(209, 209, 209)';
container_assignment7.insertAdjacentElement('afterbegin', title_assignment7);
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
    title_assignment8 = document.createElement('h2'),
    container_assignment8 = document.createElement('div'),
    input_assignment8 = document.createElement('input'),
    button_assignment8 = document.createElement('button'),
    img_wrapper_assignment8 = document.createElement('div');

assignment8.classList.add('assignment8');
container_assignment8.classList.add('container');
title_assignment8.textContent = 'Assignment 8';
input_assignment8.classList.add('input_assignment8');
input_assignment8.placeholder = 'Insert link to picture';
button_assignment8.classList.add('btn');
button_assignment8.classList.add('btn_big');
button_assignment8.textContent = 'SHOW IMAGE';
img_wrapper_assignment8.classList.add('img_wrapper');


assignment7.insertAdjacentElement('afterend', assignment8);
assignment8.appendChild(container_assignment8);

assignment8.style.backgroundColor = 'rgb(252, 188, 243)';
container_assignment8.insertAdjacentElement('afterbegin', title_assignment8);
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
    title_assignment9 = document.createElement('h2'),
    container_assignment9 = document.createElement('div'),
    input_assignment9 = document.createElement('textarea'),
    img_wrapper_assignment9 = document.createElement('div'),
    button_assignment9 = document.createElement('button');

assignment9.classList.add('assignment9');
container_assignment9.classList.add('container');
title_assignment9.textContent = 'Assignment 9';
input_assignment9.classList.add('input_assignment9');
input_assignment9.placeholder = 'Insert link to pictures';
button_assignment9.classList.add('btn');
button_assignment9.classList.add('btn_big');
button_assignment9.textContent = 'SHOW IMAGE';
img_wrapper_assignment9.classList.add('img_wrapper');

assignment8.insertAdjacentElement('afterend', assignment9);
assignment9.appendChild(container_assignment9);

assignment9.style.backgroundColor = 'rgb(255, 246, 168)';
container_assignment9.insertAdjacentElement('afterbegin', title_assignment9);
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
    if (document.querySelector('.blocked') == null) {
        coord_X.innerHTML = `${event.clientX}`;
        coord_Y.innerHTML = `${event.clientY}`;
    } else {
        coord_X.innerHTML = `bloked`;
        coord_Y.innerHTML = `bloked`;
    }
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
    geolocation_latitude.textContent = 'latitude: ' + position.coords.latitude;
    geolocation_longitude.textContent = 'longitude: ' + position.coords.longitude;
    assignment12.insertAdjacentElement('afterbegin', assignment12_message);
    assignment12.insertAdjacentElement('beforeend', geolocation_latitude);
    assignment12.insertAdjacentElement('beforeend', geolocation_longitude);
});

checkGeo();

function checkGeo() {
    let coordGeo = assignment12.querySelector('geolocation');
    if (coordGeo == null) {
        assignment12_message.style.color = 'rgb(255, 180, 180)';
        assignment12_message.textContent = 'I`ll find you later...🤡'
        geolocation_latitude.textContent = 'latitude: no data';
        geolocation_longitude.textContent = 'longitude: no data';
        assignment12.insertAdjacentElement('beforeend', assignment12_message);
        assignment12.insertAdjacentElement('afterbegin', geolocation_latitude);
        assignment12.insertAdjacentElement('afterbegin', geolocation_longitude);
    }
}

// assignment 13
const assignment13 = document.createElement('section'),
    container_assignment13 = document.createElement('div'),
    title_assignment13 = document.createElement('h2'),
    subtitle_localStorage = document.createElement('h3'),
    subtitle_cookies = document.createElement('h3'),
    subtitle_sessionStorage = document.createElement('h3'),
    text_area_localStorage = document.createElement('div'),
    text_area_cookies = document.createElement('div'),
    text_area_sessionStorage = document.createElement('div');


assignment13.classList.add('assignment13');
assignment13.style.backgroundColor = ' rgb(200, 208, 252)';
container_assignment13.classList.add('container');
title_assignment13.textContent = 'Assignment 13';
subtitle_cookies.textContent = 'Cookies';
subtitle_localStorage.textContent = 'LocalStorage';
subtitle_sessionStorage.textContent = 'SessionStorage';
text_area_localStorage.classList.add('text_area');
text_area_localStorage.classList.add('text_area_local');
text_area_localStorage.setAttribute('contenteditable', 'true');
text_area_cookies.classList.add('text_area');
text_area_cookies.classList.add('text_area_local');
text_area_cookies.setAttribute('contenteditable', 'true');
text_area_sessionStorage.classList.add('text_area');
text_area_sessionStorage.classList.add('text_area_local');
text_area_sessionStorage.setAttribute('contenteditable', 'true');

assignment9.insertAdjacentElement('afterend', assignment13);
assignment13.appendChild(container_assignment13);
container_assignment13.insertAdjacentElement('afterbegin', title_assignment13);
container_assignment13.insertAdjacentElement('beforeend', subtitle_localStorage);
container_assignment13.insertAdjacentElement('beforeend', text_area_localStorage);
container_assignment13.insertAdjacentElement('beforeend', subtitle_cookies);
container_assignment13.insertAdjacentElement('beforeend', text_area_cookies);
container_assignment13.insertAdjacentElement('beforeend', subtitle_sessionStorage);
container_assignment13.insertAdjacentElement('beforeend', text_area_sessionStorage);

function enteredText(e) {
    choiseActionTextArea(e.currentTarget);
}

function choiseActionTextArea(curretnArea) {
    switch (true) {
        case (curretnArea === text_area_localStorage):
            saveLocal();
            break;
        case (curretnArea == text_area_cookies):
            saveCookies();
            break;
        case (curretnArea == text_area_sessionStorage):
            saveSession();
            break;
    }
}

function saveLocal() {
    localStorage.setItem('local-input', text_area_localStorage.innerHTML);
};

function saveCookies() {
    document.cookie = text_area_cookies.innerHTML;
};

function saveSession() {
    sessionStorage.setItem('session-input', text_area_sessionStorage.innerHTML);
};

function loadCache() {
    text_area_localStorage.innerHTML = localStorage.getItem('local-input');
    text_area_cookies.innerHTML = document.cookie;
    text_area_sessionStorage.innerHTML = sessionStorage.getItem('session-input');
};

// assignment14
const assignment14 = document.createElement('section'),
    container_assignment14 = document.createElement('container'),
    title_assignment14 = document.createElement('h2'),
    button_assignment14 = document.createElement('button');

assignment14.classList.add('assignment14');
container_assignment14.classList.add('container');
button_assignment14.classList.add('btn');
title_assignment14.textContent = 'Assignment 14';
title_assignment14.style.color = 'white';
button_assignment14.classList.add('btn_go_top');
button_assignment14.classList.add('hidden');
button_assignment14.textContent = 'go top';
button_assignment14.style.color = 'white';
container_assignment14.style.minHeight = '100px';
assignment14.style.backgroundColor = 'rgb(105, 104, 211)';

body.insertAdjacentElement('beforeend', assignment14);
assignment14.appendChild(container_assignment14);
container_assignment14.insertAdjacentElement('afterbegin', title_assignment14);
container_assignment14.insertAdjacentElement('beforeend', button_assignment14);

function goTop() {
    window.scrollTo(top);
}

function checkPosition() {
    if (window.pageYOffset > (document.documentElement.scrollHeight * 0.7)) {
        removeHiddenStyle(assignment14.querySelectorAll('.btn_go_top'));
    } else {
        hiddenElement(assignment14.querySelectorAll('.btn_go_top'))
    }
}

// assignment15
const assignment15 = document.createElement('section'),
    container_assignment15 = document.createElement('container'),
    title_assignment15 = document.createElement('h2'),
    first_block_assignment15 = document.createElement('div'),
    second_block_assignment15 = document.createElement('div');

assignment15.classList.add('assignment15');
container_assignment15.classList.add('container');
title_assignment15.textContent = 'Assignment 15';
first_block_assignment15.classList.add('block');
second_block_assignment15.classList.add('block');
second_block_assignment15.classList.add('block_small');
second_block_assignment15.textContent = 'Push the button';
assignment15.style.backgroundColor = 'rgb(189 191 148)';

assignment13.insertAdjacentElement('afterend', assignment15);
assignment15.appendChild(container_assignment15);
container_assignment15.insertAdjacentElement('afterbegin', title_assignment15);
container_assignment15.insertAdjacentElement('beforeend', first_block_assignment15);
first_block_assignment15.insertAdjacentElement('afterbegin', second_block_assignment15);

// assignment 16
const assignment16 = document.createElement('section'),
    container_assignment16 = document.createElement('container'),
    title_assignment16 = document.createElement('h2'),
    blocking_element = document.createElement('div'),
    button_assignment16 = document.createElement('button');

assignment16.classList.add('assignment16');
container_assignment16.classList.add('container');
button_assignment16.classList.add('btn');
blocking_element.classList.add('blocking_element');
blocking_element.classList.add('hidden');
title_assignment16.textContent = 'Assignment 16';
button_assignment16.textContent = 'switch';
assignment16.style.backgroundColor = 'rgb(255, 255, 255)';
blocking_element.style.backgroundColor = 'rgb(81, 81, 85)';

assignment15.insertAdjacentElement('afterend', assignment16);
assignment16.appendChild(container_assignment16);
container_assignment16.insertAdjacentElement('afterbegin', title_assignment16);
container_assignment16.insertAdjacentElement('beforeend', button_assignment16);
body.insertAdjacentElement('afterbegin', blocking_element);

blocking_element.addEventListener('click', handleClick)

// assignment 17
const assignment17 = document.createElement('section'),
    container_assignment17 = document.createElement('container'),
    title_assignment17 = document.createElement('h2'),
    form_assignment17 = document.createElement('form'),
    input_assignment17 = document.createElement('input');

assignment17.classList.add('assignment17');
container_assignment17.classList.add('container');
title_assignment17.textContent = 'Assignment 17';
assignment17.style.background = 'rgb(168, 226, 212)';
form_assignment17.setAttribute('onsubmit', 'return drawShelves();');
input_assignment17.setAttribute('type', 'submit');
input_assignment17.setAttribute('value', 'GO');
assignment16.insertAdjacentElement('afterend', assignment17);
assignment17.appendChild(container_assignment17);
container_assignment17.insertAdjacentElement('afterbegin', title_assignment17);


container_assignment17.insertAdjacentElement('beforeend', form_assignment17);
form_assignment17.insertAdjacentElement('afterbegin', input_assignment17)

function drawShelves() {
    return false;
}




const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
    block.addEventListener('click', handleClick);
});

const text_areas = document.querySelectorAll('.text_area');
text_areas.forEach(area => {
    area.addEventListener('input', enteredText);
})

window.addEventListener("load", loadCache);
window.addEventListener('scroll', checkPosition);