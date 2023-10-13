const bit = 8192;
let byte;
let kByte;
let mByte;
let gByte;
let tByte;
let pByte;
let eByte;
let zByte;
let yByte;

function bitConvert(bit) {
    
    let byte = bit / 8;

    if(byte < 1) {
        
        byte = 0;
        return byte;

    } else {
        return byte;
    }

}

function unitConvert(unidade) {

    let unit = unidade / 1024;

    if(unit < 1) {
        
        unit = 0;
        return unit;

    } else {
        return unit;
    }

}

function armazena() {
    
    byte = bitConvert(bit);
    kByte = unitConvert(byte);
    mByte = unitConvert(kByte);
    gByte = unitConvert(mByte);
    tByte = unitConvert(gByte);
    pByte = unitConvert(tByte);
    eByte = unitConvert(pByte)
    zByte = unitConvert(eByte);
    yByte = unitConvert(zByte);
    
}

function exibe(medida, descricao1, descricao2) {
    if(medida <= 1) {
        console.log(medida, descricao1);
    } else {
        console.log(medida, descricao2);
    }
}

armazena();
exibe(bit, 'bit', 'bits');
exibe(byte, 'Byte', 'Bytes');
exibe(kByte, 'KByte', 'KBytes');
exibe(mByte, 'MegaByte', 'MegaBytes');
exibe(gByte, 'GigaByte', 'GigaBytes');
exibe(tByte, 'TeraByte', 'TeraBytes');
exibe(pByte, 'PetaByte', 'PetaBytes');
exibe(eByte, 'ExaByte', 'ExaBytes');
exibe(zByte, 'ZetaByte', 'ZetaBytes');
exibe(yByte, 'YottaByte', 'YottaBytes');