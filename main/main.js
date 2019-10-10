'use strict';

// function loadItems (object) {

//     let objectC = {barcode: object.barcode};
//     return objectC;
// }
const fixturesMap = require('../__tests__/fixtures');

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

    return JSON.stringify(obj);
}

function loadItems(inputItems){

    let obj = {};
    let allItems = fixturesMap.loadAllItems();

    obj = allItems.map(n => {
        if (n.barcode === inputItems.barcode)
        {
            return n;
        }
    }
    //    return (n.barcode === inputItems.barcode) ? obj = obj + n : 0;
    ).filter(items => {
        if(items != undefined)
        {
        if(items.barcode === inputItems.barcode)
        {
            return items;
        }
    }
    }
       );


    console.log(obj);

    return obj[0];
}

function combineItems(objToBe)
{
    let obj = loadItems(objToBe);
    obj.count = parseFloat(objToBe.count);

    return obj;
}

module.exports = {
    // loadItems : loadItems,
    decodeBarcode : decodeBarcode,
    loadItems : loadItems,
    combineItems:combineItems
};
//TODO: Implement the exercise requirements in this file and remove this comment
