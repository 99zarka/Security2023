
// Helper functions


Number.prototype.mod = function (n=26) {
    return ((this % n) + n) % n;
};

String.prototype.insert = function(index, string) {
    if (index > 0)
    {
      return this.substring(0, index) + string + this.substring(index, this.length);
    }
  
    return string + this;
};

const modInverse = function(a, b=26) {
    a %= b;
    for (let x = 1; x < b; x++) {
        if ((a*x)%b == 1) {
            return x;
        }
    }
}

const removeDublicates = function(t) {
    let res=""
    while (t) {
        res += t[0];
        t = t.replaceAll(t[0],'')
    }
    return res;
}

// Main functions

 const caesarCipher = function(p, k) {
    p = p.toUpperCase();
    let c = ''
    for (let i=0;i<p.length;i++){
        let charValue = p[i].charCodeAt(0)-65
        c += String.fromCharCode(((charValue+k).mod())+65)
    }
    return c;
}

 const caesarDecipher = (c,k)=> caesarCipher(c,26-k);
 const ROT13 = (p)=> caesarCipher(p,13);

 const Atbash = function(p) {
    p = p.toUpperCase();
    let c = ''
    for (let i=0;i<p.length;i++){
        let charValue = p[i].charCodeAt(0)-65

        c += String.fromCharCode(((25-charValue)%26)+65)
    }
    return c;
}

 const affineCipher = function(p,m,k) {
    p = p.toUpperCase();
    let c = ''
    for (let i=0;i<p.length;i++){
        let charValue = p[i].charCodeAt(0)-65;
        charValue *= m;
        charValue += k;
        charValue = charValue.mod();
        c+=String.fromCharCode(charValue+65)
    }
    return c;
}

 const affineDecipher = function(p,m,k) {
    p = p.toUpperCase();
    let c = ''
    for (let i=0;i<p.length;i++){
        let charValue = p[i].charCodeAt(0)-65;
        charValue -= k;
        charValue *= modInverse(m);
        charValue = charValue.mod();
        c += String.fromCharCode(charValue+65)
    }
    return c;
}

 const vigenereCipher = function(p,k="A") {
    if(k=="")k="A";
    p = p.toUpperCase();
    k = k.toUpperCase();
    let c = ''
    for (let i=0;i<p.length;i++){
        let charValue = p[i].charCodeAt(0)-65;
        let keyValue = k[i % k.length].charCodeAt(0)-65;
        charValue += keyValue;
        charValue = charValue.mod();
        c+=String.fromCharCode(charValue+65)
    }
    return c;
}

 const vigenereDecipher = function(p,k="A") {
    if(k=="")k="A";
    p = p.toUpperCase();
    k = k.toUpperCase();
    let c = ''
    for (let i=0;i<p.length;i++){
        let charValue = p[i].charCodeAt(0)-65;
        let keyValue = k[i % k.length].charCodeAt(0)-65;
        charValue -= keyValue;
        charValue = charValue.mod();
        c+=String.fromCharCode(charValue+65)
    }
    return c;
}

const playFairCipher = function(p,k) {
    const charOrder = (c) => (c.toUpperCase()<'J')?c.toUpperCase().charCodeAt(0)-65:c.toUpperCase().charCodeAt(0)-65-1;
    const getRow = (x) => Math.floor(charOrder(x)/5);
    const getCol = (x) => charOrder(x)%5;
    p = p.toUpperCase();
    let p2='';
    console.log(p2,p.length);
    let i=0
    while(i<p.length-1){
        p2+=p[i];
        if(p[i]==p[i+1]){
            p2+='X';
            i--;
        }
        else p2+=p[i+1];
        i+=2;
    }
    console.log(p2);

    if(p2.length%2 == 1)p2+='X';
    p=p2;
    let matrix = k + "abcdefghiklmnopqrstuvwxyz"
    matrix = matrix.toUpperCase();
    matrix = removeDublicates(matrix);
    let c = '';
    for (let i=0;i<p.length-1;i+=2){
        if(getRow(p[i])==getRow(p[i+1])){
            if(getCol(p[i])==4) c += matrix[getRow(p[i])*5]
            else c += matrix[getRow(p[i])*5+getCol(p[i])+1]
            if(getCol(p[i+1])==4) c += matrix[getRow(p[i+1])*5]
            else c += matrix[getRow(p[i+1])*5+getCol(p[i+1])+1]
        }
        else if(getCol(p[i])==getCol(p[i+1])){
            if(getRow(p[i])==4) c += matrix[getCol(p[i+1])]
            else c += matrix[getRow(p[i])*5+getCol(p[i])+5]
            if(getRow(p[i+1])==4) c += matrix[getCol(p[i+1])]
            else c += matrix[getRow(p[i+1])*5+getCol(p[i+1])+5]
        }
        else{
            let index1 = getRow(p[i])*5+getCol(p[i+1])
            let index2 = getRow(p[i+1])*5+getCol(p[i])
            c += matrix[index1]+matrix[index2];
        }
        
    }
    return c;
}

console.log(playFairCipher('helllo',''));




const playFairDecipher = function(p,k) {
    const charOrder = (c) => (c.toUpperCase()<'J')?c.toUpperCase().charCodeAt(0)-65:c.toUpperCase().charCodeAt(0)-65-1;
    const getRow = (x) => Math.floor(charOrder(x)/5);
    const getCol = (x) => charOrder(x)%5;
    p = p.toUpperCase();
    let p2='';
    for (let i=0;i<p.length/2+1;i+=2){
        p2+=p[i];
        if(p[i]==p[i+1]){
            p2+='X';
            i--;
        }
        else p2+=p[i+1];
    }

    if(p2.length%2 == 1)p2+='X';
    p=p2;
    let matrix = k + "abcdefghiklmnopqrstuvwxyz"
    matrix = matrix.toUpperCase();
    matrix = removeDublicates(matrix);
    let c = '';
    for (let i=0;i<p.length/2+1;i+=2){
        if(getRow(p[i])==getRow(p[i+1])){
            if(getCol(p[i])==0) c += matrix[getRow(p[i])*5+4]
            else c += matrix[getRow(p[i])*5+getCol(p[i])-1]
            if(getCol(p[i+1])==0) c += matrix[getRow(p[i+1])*5+4]
            else c += matrix[getRow(p[i+1])*5+getCol(p[i+1])-1]
        }
        else if(getCol(p[i])==getCol(p[i+1])){
            if(getRow(p[i])==0) c += matrix[getCol(p[i+1])+20]
            else c += matrix[getRow(p[i])*5+getCol(p[i])-5]
            if(getRow(p[i+1])==0) c += matrix[getCol(p[i+1])+20]
            else c += matrix[getRow(p[i+1])*5+getCol(p[i+1])-5]
        }
        else{
            let index1 = getRow(p[i])*5+getCol(p[i+1])
            let index2 = getRow(p[i+1])*5+getCol(p[i])
            c += matrix[index1]+matrix[index2];
        }
        
    }
    return c;
}

