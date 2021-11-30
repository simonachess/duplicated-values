function cleanDuplicatedValues(array) {

    console.log(array.filter((element, index) => array.indexOf(element) === index))

}

cleanDuplicatedValues(['a', 1, 'a', 2, '1'])