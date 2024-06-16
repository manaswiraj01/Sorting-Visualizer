async function merge(ele, l, mid, r) {
    let temp = new Array(r - l + 1);
    let i = l;
    let j = mid + 1;
    let k = 0;

    while (i <= mid && j <= r) {
        ele[i].style.background = 'orange'; 
        ele[j].style.background = 'yellow'; 

        await waitforme(delay);

        if (parseInt(ele[i].style.height) < parseInt(ele[j].style.height)) {
            temp[k] = ele[i].style.height;
            ele[k].style.background = 'lightgreen'; 
            i++;
        } else {
            temp[k] = ele[j].style.height;
            ele[k + l].style.background = 'lightgreen'; 
            j++;
        }
        k++;
    }

    while (i <= mid) {
        ele[i].style.background = 'orange'; 
        await waitforme(delay);
        temp[k++] = ele[i++].style.height;
        ele[i - 1].style.background = 'lightgreen'; 
    }

    while (j <= r) {
        ele[j].style.background = 'yellow'; 
        await waitforme(delay);
        temp[k++] = ele[j++].style.height;
        ele[j - 1].style.background = 'lightgreen';
    }

    for (k = 0, i = l; k < temp.length; k++, i++) {
        await waitforme(delay);
        ele[i].style.height = temp[k];
        ele[i].style.background = 'green'; 
    }
}


async function mergeSort(ele, l, r){
    if(l >= r){
        return;
    }
    let mid = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, mid);
    await mergeSort(ele, mid+1, r);
    await merge(ele, l, mid, r);
}

const mergeSortbtn = document.querySelector(".mergesort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArraybtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArraybtn();
});