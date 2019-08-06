function removeUrlAnchor(url){

    let temp = '';
    let result = '';

    for (let i = 0; i < url.length; i++){

        if ( url[i] == '#'){
            break;
        }

        temp = url[i];
        result += temp;

    }
    return result;
}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com?page=1'));

