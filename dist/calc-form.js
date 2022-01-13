function formatAmount(amount) {
    return amount.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

$(function () {


    var $element = $('input[type="range"]');
    for (var i = 0; i < $element.length; i++) {
        let $ruler = $('<div class="ruler-' + $element[i].getAttribute('id') + '">' + $element[i].getAttribute('id') + '</div>');
        let label = $element[i].dataset.label;
        let $amount = $('#range-slider-' + label);
        let id = '#' + $element[i].getAttribute('id');
        console.log(id);
        $(id).rangeslider({polyfill: false}).on('input', function () {
            $amount[0].value = this.value;
            if (id === '#edit-range-price') {
                let value = formatAmount(Math.floor($('#edit-number').val() * this.value / 100));
                $('#edit-range-price-pr').val(value);
                $('#edit-range-price-pr-span').text(value);
            }
        });
        $amount.on('change', function () {
            $(id).val(this.value).change();
        });
    }
    $('#calc-form input').on('input', function () {
        if ($(this).attr("id") === 'edit-number') {
            let value = formatAmount(Math.floor(this.value * $('#edit-range-price').val() / 100));
            $('#edit-range-price-pr').val(value).change();
            $('#edit-range-price-pr-span').text(value);
        }
    });
})



function getRulerRange(min, max, step, id) {
    step = 5;
    if (id === '#edit-range-month') {
        step = 12;
    }
    let range = '';
    let i = min;
    let count = 1;
    while (i <= max) {
        var last = '';
        var first = '';
        if (i === max) {
            var lastt = ' last';
        }
        if (i === min) {
            var first = ' first';
        }
        range += '<span class="item-' + count + ' value-' + i + last + first + ' ">' + i + '</span>';
        i = i + step;
        count++;
    }
    return range;
}

let popupBtnFormLiz = [...document.querySelectorAll('.payment-form .popUp-btn')];

