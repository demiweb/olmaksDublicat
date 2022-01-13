let getNamesInp = document.querySelector('.item-block-content .head h1');
let getCodesInp = document.querySelector('.item-block-content .head p span');
let getPriceInp = document.querySelector('.prod-info__price p');

function getInputPrices() {
    if (!getCodesInp) {

    } else {
        let formName1 = [...document.querySelectorAll('.modal-window .form form .nameproduct1')];
        let formPrice1 = [...document.querySelectorAll('.modal-window .form form .price1')];
        let formModel1 = [...document.querySelectorAll('.modal-window .form form .model1')];

        formName1.forEach((inp) => {
            inp.value = getNamesInp.innerHTML;
        })
        formPrice1.forEach((inp) => {
            inp.value = getPriceInp.innerHTML;
        })
        formModel1.forEach((inp) => {
            inp.value = getCodesInp.innerHTML;
        })

    }
}

getInputPrices();
