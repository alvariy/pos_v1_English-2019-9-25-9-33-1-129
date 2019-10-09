'use strict';
const funcMap = require('../main/main');


// it ('should return items without count', () => {

//   const object = {barcode:"ITEM000001", count:0};

//   let number = funcMap.loadItems(object);

//   expect(number).toBe({barcode:"ITEM000001"});
// });

// it ('should return items without count', () => {

//   const object = {barcode:"ITEM000001", count:0};

//   let number = funcMap.loadItems(object);

//   expect(number).toBe({barcode:"ITEM000001"});
// });

it ('should decode barcodes', () => {

  const barcode = "ITEM000001-2";
  let objToBe = {barcode:'ITEM000001', count:2}

  let obj = funcMap.decodeBarcode(barcode);

  expect(obj).toBe(JSON.stringify(objToBe));
});


// describe('pos', () => {

//   it('should print text', () => {

//     const tags = [
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000003-2.5',
//       'ITEM000005',
//       'ITEM000005-2',
//     ];

//     spyOn(console, 'log');

//     printReceipt(tags);

//     const expectText = `***<store earning no money>Receipt ***
// Name：Sprite，Quantity：5 bottles，Unit：3.00(yuan)，Subtotal：12.00(yuan)
// Name：Litchi，Quantity：2.5 pounds，Unit：15.00(yuan)，Subtotal：37.50(yuan)
// Name：Instant Noodles，Quantity：3 bags，Unit：4.50(yuan)，Subtotal：9.00(yuan)
// ----------------------
// Total：58.50(yuan)
// Discounted prices：7.50(yuan)
// **********************`;

//     expect(console.log).toHaveBeenCalledWith(expectText);
//   });
// });


