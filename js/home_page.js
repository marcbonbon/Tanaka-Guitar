// Bagian carousel
let slideke = 0;
const slide_item = document.getElementsByClassName('slide_item');
const totalslide = slide_item.length;

document.
    getElementById('button_next')
    .addEventListener("click", function () {
        ke_kanan();
    });

document.
    getElementById('button_prev')
    .addEventListener("click", function () {
        ke_kiri();
    });

function update_slideke(){
    for(let slider of slide_item) {
        slider.classList.remove('slide_item--visible');
        slider.classList.add('slide_item--hidden');
    }

    slide_item[slideke].classList.add('slide_item--visible');
}


function ke_kanan(){
    if (slideke == totalslide - 1)
    {
        slideke = 0
    }
    else
    {
        slideke++;
    }
    update_slideke();
}

function ke_kiri(){
    if (slideke == 0)
    {
        slideke = totalslide - 1;
    }
    else
    {
        slideke--;
    }
    update_slideke();
}