async function Bubble() {
    const ele = document.querySelectorAll('.bar');
    for (let i = 0; i < ele.length - 1; i++) {
        for (let j = 0; j < ele.length - 1 - i; j++) {
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
        }
        ele[ele.length - 1 - i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubbleSortButton = document.querySelector('.bubblesort');

bubbleSortButton.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArraybtn();
    await Bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArraybtn();
});
