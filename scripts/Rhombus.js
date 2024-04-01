
function calculateRhombus(){

    const d1 = getInputValueById('Rhombus-d1');


    const d2 = getInputValueById('Rhombus-d2');
   

    const area = 0.5 * d1 * d2;
    console.log('area of the Rhombus is ', area);

    setInnerTextById('Rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);

    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}