'use strict';

// function loadItems (object) {

//     let objectC = {barcode: object.barcode};
//     return objectC;
// }

function decodeBarcode(stringBarcode){

    let obj = {};

    let stirngObj = stringBarcode.split('-');

    obj.barcode = stirngObj[0];
    obj.count = parseInt(stirngObj[1]);

    console.log(obj);

    return JSON.stringify(obj);
}

module.exports = {
    // loadItems : loadItems,
    decodeBarcode : decodeBarcode
};
//TODO: Implement the exercise requirements in this file and remove this comment
