$(document).ready(function () {

    let option;
    const container = $('#container');
    const option1 = $('#option1');
    const option2 = $('#option2');
    const option3 = $('#option3')

    const setOption = (option) => {

        if (window.localStorage) {

            localStorage.setItem('setColorOption', JSON.stringify(option))
        }
    }

    const getOption = () => {

        if (localStorage.getItem('setColorOption') !== null) {
            let storedOption = JSON.parse(localStorage.getItem('setColorOption'));

            setColor(storedOption);
        }
    }

    const setColor = (option) => {
        
        $(option1).removeAttr('checked');
        if (option === 'option1') {

            $(container).removeClass('light-main-bg violet-main-bg').addClass('blue-main-bg');
            $(option1).attr('checked', true);

        } else if (option === 'option2') {
            $(container).removeClass('blue-main-bg violet-main-bg').addClass('light-main-bg');
            $(option2).attr('checked', true);

        } else if (option === 'option3') {

            $(container).removeClass('blue-main-bg light-main-bg').addClass('violet-main-bg');
            $(option3).attr('checked', true);

        }

    }

    getOption();


    $(option1).change(function (e) {

        option = $(this).attr('id');

        $(container).removeClass('light-main-bg violet-main-bg').addClass('blue-main-bg');

        setOption(option);

    });

    $(option2).change(function (e) {

        option = $(this).attr('id');

        $(container).removeClass('blue-main-bg violet-main-bg').addClass('light-main-bg');

        setOption(option);

    });

    $(option3).change(function (e) {

        option = $(this).attr('id');

        $(container).removeClass('blue-main-bg light-main-bg').addClass('violet-main-bg');

        setOption(option);

    });
});