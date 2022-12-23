function fancyBarcodes(array){

    let quantityBarcode = array.shift();
    let barcodes = array;
    let validBarcodePattern = /(@[#]+)(?<name>[A-Z]+[A-Za-z0-9]{4,}[A-Z]+)(@[#]+)/;
    let numberPattern = /(?<number>[0-9]+)/g;

    for(const barcode of barcodes){

        let match = barcode.match(validBarcodePattern);

        if(match !== null){

            let productGroup = barcode.match(numberPattern);

            console.log(`Product group: ${productGroup ? (`${productGroup.join(``)}`) : '00'}`)
        } else {
            console.log(`Invalid barcode`)
        }
    }
}

// fancyBarcodes(["3",
// "@#FreshFisH@#",
// "@###Brea0D@###",
// "@##Che4s6E@##"])

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])