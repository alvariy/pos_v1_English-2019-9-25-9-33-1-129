'use strict';
const funcMap = require('../main/main');


it ('should return items without count', () => {

  const object = {barcode:"ITEM000001", count:0};

  let number = funcMap.loadItems(object);

  expect(number).toBe({barcode:"ITEM000001"});
});

it ('should decode barcodes with multiple quantity', () => {

  const barcode = "ITEM000001-2";
  let objToBe = {barcode:'ITEM000001', count:2}

  let obj = funcMap.decodeBarcode(barcode);

  expect(obj).toBe(JSON.stringify(objToBe));
});

it ('should decode barcodes with 1 quantity', () =>{

  const barcode = "ITEM000001";
  let objToBe = {barcode:'ITEM000001', count:1}

  let obj = funcMap.decodeBarcode(barcode);

  expect(obj).toBe(JSON.stringify(objToBe));

});

it ('should load items based on barcodes', () => {

  let objToBe = {barcode:'ITEM000001', count:1}
  let itemList = funcMap.loadItems(objToBe);
  expect(JSON.stringify(itemList)).toBe(JSON.stringify({
    barcode: 'ITEM000001',
    name: 'Sprite',
    unit: 'bottle',
    price: 3.00
  }));
});

it ('should combine items ', () => {

  let objToBe = {barcode:'ITEM000001', count:1}
  let itemList = funcMap.combineItems(objToBe);

  expect(JSON.stringify(itemList)).toBe(JSON.stringify({
    barcode: 'ITEM000001',
    name: 'Sprite',
    unit: 'bottle',
    price: 3.00,
    count: 1
  }));
});

it ('should decode tags', () => {

  const barcode = ["ITEM000001"];
  let obj = funcMap.decodeBarcode(barcode);
  let itemList = funcMap.combineItems(obj);
  let decodedTags = funcMap.decodedTags(itemList);
  
  expect(decodedTags).toBe([{
    barcode: 'ITEM000001',
    name: 'Sprite',
    unit: 'bottle',
    price: 3.00,
    count: 1
  }]);

});

it('should load promotions', () => 
{

  let obj = funcMap.loadPromotions();
  expect(obj).toBe([
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ]);
});

it('should calculate receipt items', () =>{

  let obj = [{
    barcode: 'ITEM000001',
    name: 'Sprite',
    unit: 'bottle',
    price: 3.00,
    count: 1
  }];

  let receiptItems = funcMap.calculateReceiptItems(obj);

  expect(receiptItems).toBe([{
    barcode: 'ITEM000001',
    name: 'Sprite',
    unit: 'bottle',
    price: 3.00,
    count: 1,
    subtotal: 3.00
  }]);
  
});

it('should calculate receipt total', () =>{

  let receiptItems = [{
    barcode: 'ITEM000001',
    name: 'Sprite',
    unit: 'bottle',
    price: 3.00,
    count: 1,
    subtotal: 3.00
  }];

  let total = funcMap.calculateReceiptTotal(receiptItems);

  expect(total).toBe(3.00);

});

it('should calculate receipt with discount', () =>{

  let itemList = [{
    barcode: 'ITEM000001',
    name: 'Sprite',
    unit: 'bottle',
    price: 3.00,
    count: 1
  }];

  let receipt = funcMap.calculateReceiptWithDiscount(itemList);

  expect(receipt).toBe(
    {
      receiptItems: [{
        barcode: 'ITEM000001',
        name: 'Sprite',
        unit: 'bottle',
        price: 3.00,
        count: 1,
        subtotal: 3.00
      }],
      total: 3.00,
      saving: 0
    }
  );

});

it('should render receipt', () =>{

  let receipt =  {
    receiptItems: [{
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00,
      count: 1,
      subtotal: 3.00
    }],
    total: 3.00,
    saving: 0
  };

  let expectedText = `***<store earning no money>Receipt ***
   Name：Sprite，Quantity：1 bottles，Unit：3.00(yuan)，Subtotal：3.00(yuan)
   ----------------------
   Total：3.00(yuan)
   Discounted prices：0.00(yuan)
   **********************`;

   let actualText = funcMap.renderReceipt(receipt);

   expect(actualText).toBe(expectedText);

});

it('should print receipt', () => {

  const barcode = ["ITEM000001"];

  expectedText = `***<store earning no money>Receipt ***
  Name：Sprite，Quantity：1 bottles，Unit：3.00(yuan)，Subtotal：3.00(yuan)
  ----------------------
  Total：3.00(yuan)
  Discounted prices：0.00(yuan)
  **********************`;

  let actualText = funcMap.printReceipt(barcode);

  expect(actualText).toBe(expectedText);

});

