function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableSortingBtn() {
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.border = '#121212 solid 1pt';
        btn.style.cursor = 'not-allowed';
    });
}

function enableSortingBtn() {
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.border = '';
        btn.style.cursor = 'pointer';
    });
}

function disableSizeSlider() {
    const sizeSlider = document.querySelector('.size-slider');
    sizeSlider.disabled = true;
    sizeSlider.style.cursor = 'not-allowed';
}

function enableSizeSlider() {
    const sizeSlider = document.querySelector('.size-slider');
    sizeSlider.disabled = false;
    sizeSlider.style.cursor = 'pointer'; 
}

function disableNewArraybtn() {
    const newArrayBtn = document.querySelector('.newArray');
    newArrayBtn.disabled = true;
    newArrayBtn.style.border = '#121212 solid 1pt';
    newArrayBtn.style.cursor = 'not-allowed';
}

function enableNewArraybtn() {
    const newArrayBtn = document.querySelector('.newArray');
    newArrayBtn.disabled = false;
    newArrayBtn.style.border = ''; 
    newArrayBtn.style.cursor = 'pointer'; 
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    });
}

let arraySize = document.querySelector('.size-slider');

arraySize.addEventListener('input', function () {
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector('.speed-slider');

delayElement.addEventListener('input', function () {
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

function createNewArray(noOfBars = 40) {
    deleteChild();

    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bars = document.querySelector("#bars");
    bars.innerHTML = '';
}

const newArrayBtn = document.querySelector('.newArray');
newArrayBtn.addEventListener('click', function () {
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

createNewArray(); 
