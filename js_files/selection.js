async function selection(){
    const ele = document.querySelectorAll('.bar');

    for(let i=0; i<ele.length; i++){
        let min = i;
        ele[i].style.background = 'blue';

        for(let j=i+1; j<ele.length; j++){
            ele[j].style.background = 'red';
            await waitforme(delay);

            if(parseInt(ele[j].style.height) < parseInt(ele[min].style.height)){
                if(min !== i){
                    ele[min].style.background = 'cyan';
                }
                min = j;
            }
            else{
                ele[j].style.background = 'cyan';
            } 
        }
        await waitforme(delay);
        swap(ele[min], ele[i]);
        ele[min].style.background = 'cyan';
        ele[i].style.background = 'green';
    }
}


const selectionSortBtn = document.querySelector('.selectionsort');
selectionSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArraybtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArraybtn();
});