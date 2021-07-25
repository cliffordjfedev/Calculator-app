$(document).ready(function () {
    let setScreenValue = '';
    let firstValue = 0;
    let secondValue = 0;
    let result = 0;
    let operationType = '';
    let keyPressed = false;
    let equalPressed = false;
    let arrValue = new Array();
    const screenValue = $('#screenValue');
    const keyPad = $("button[data-button='required']");

    $(keyPad).click(function (e) {

        if (equalPressed === true) {
            resetAll($(this).val());
            setScreen($(this).val());
            console.log('reset');
            equalPressed = false;
        } else {
            setScreen($(this).val());
        }

    });

    const setScreen = (value) => {

        // value.toLocaleString('en-US');

        if (value === '.' && setScreenValue === '') {

            $(screenValue).val('0.');
            setScreenValue += '0.';
            //console.log('empty')

        }else if (setScreenValue !== '0') {
            setScreenValue += value;

            setScreenValue =  setScreenValue;
            $(screenValue).val(setScreenValue);
            //console.log('Full')

        } if ((setScreenValue === '0' && operationType === '') || (setScreenValue === '0' && operationType !== '')) {
            setScreenValue='';
            $(screenValue).val('0');
            console.log('Entro')
        }

        keyPressed = true;
    }

    const verifyNumber = (val, operationType) => {

        if (val === '' || isNaN(val)) {
            $(screenValue).val('Invalid Number');
            return false;


        } else {
            operation(val, operationType);
            setScreenValue = '';
        }
    }

    const operation = (val, operationType) => {
        arrValue.push(val);

        if (operationType !== '' && arrValue.length === 2) {

            try {
                switch (operationType) {
                    case '+':
                        result = (arrValue[0] + arrValue[1]);
                        console.log(arrValue[0] + '+' + arrValue[1])
                        break;

                    case '-':
                        result = (arrValue[0] - arrValue[1]);

                        break;

                    case '*':
                        result = (arrValue[0] * arrValue[1]);

                        break;
                    case '/':
                        result = (arrValue[0] / arrValue[1]);

                        if (arrValue[1] === 0) throw 'Cannot divide by zero';

                        break;
                    default:
                        break;


                }
                $(screenValue).val(result.toLocaleString('en-US'));
                arrValue.length = 0;
                arrValue.push(result);

                //console.log(result)

            } catch (error) {
                $(screenValue).val(error);
                //console.log(error);
            }

        } else { }
    }

    const verifyOpType = (value, optype) => {

        if (operationType === '' || operationType === optype) {
            operationType = optype
            verifyNumber(parseFloat(value), operationType);

        } else {
            verifyNumber(parseFloat(value), operationType);
            operationType = optype
        }
    }

    const checkKeyPress = (opSymbol) => {
        firstValue = parseFloat(($(screenValue).val()).replace(/,/g, ""));
        i = 0

        if (keyPressed === true) {
            verifyOpType(firstValue, opSymbol);
            //console.log(firstValue);
            keyPressed = false;
        } else {

            arrValue.length = 0;
            //console.log(firstValue);
            verifyOpType(firstValue, opSymbol);
        }

        equalPressed = false;
    }

    $('#btnSum').click(function (e) {

        checkKeyPress('+');
    });

    $('#btnSubtraction').click(function (e) {

        checkKeyPress('-');

    });

    $('#btnMultiply').click(function (e) {
        checkKeyPress('*');
    });

    $('#btnDivide').click(function (e) {
        checkKeyPress('/');
    });

    let i = 0;
    $('#btnEqual').click(function (e) {
        i++

        keyPressed = false;
        equalPressed = true;

        if (i <= 1) {
            secondValue = parseFloat(($(screenValue).val()).replace(/,/g, ""));
            verifyNumber(secondValue, operationType);
        } else {

            verifyNumber(parseFloat(secondValue), operationType)
        }

    });


    $('#btnReset').click(function (e) {

        resetAll();
    });

    $('#btnDelete').click(function (e) {
        if (equalPressed) {
            resetAll();
        } else if (keyPressed || operationType !== '') {
            $(screenValue).val('0');
            setScreenValue = '';

        }
    });

    const resetAll = (firstVal = 0) => {

        $(screenValue).val(firstVal);
        setScreenValue = '';
        arrValue.length = 0;
        keyPressed = false;
        equalPressed = false;
        firstValue = 0;
        secondValue = 0;
        result = 0;
    }


    // function addCommas(str){
    //     return str.replace(/^0+/, '').replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    // function commaSeparateNumber(val){
    //     while (/(\d+)(\d{3})/.test(val.toString())){
    //       val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    //     }
    //     return val;
    //   }

    function filter(__val__){
        var preg = /^([0-9]+\.?[0-9]{0,2})$/; 
        if(preg.test(__val__) === true){
            return true;
        }else{
           return false;
        }
        
    }
    


});