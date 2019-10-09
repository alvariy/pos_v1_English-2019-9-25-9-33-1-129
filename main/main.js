'use strict';

// function loadItems (object) {

//     let objectC = {barcode: object.barcode};
//     return objectC;
// }

function decodeBarcode(stringBarcode){

    let obj = {};

    let stirngObj = stringBarcode.split('-');

    obj.barcode = stirngObj[0];

    if(stirngObj[1] != undefined)
    {
    obj.count = parseFloat(stirngObj[1]);
    }
    else {
        obj.count = 1;
    }
    console.log(stirngObj[1]);
    console.log(obj);

    return JSON.stringify(obj);
}

module.exports = {
    // loadItems : loadItems,
    decodeBarcode : decodeBarcode
};
//TODO: Implement the exercise requirements in this file and remove this comment
