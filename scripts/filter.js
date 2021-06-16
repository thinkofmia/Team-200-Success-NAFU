export function filterData(listArray, filterOptions, categories){
    var filteredArr = [];
    var tempArr = [];

    if (categories.length==0) tempArr=listArray;
    else {
        for (var i=0;i<listArray.length;i++){
            if (categories.includes(listArray[i].category)) tempArr.push(listArray[i]);
        }
    }

    filteredArr = tempArr;
    //console.log("Filtered Array: ")
    //console.log(filteredArr);
    console.log(filterOptions)
    return filteredArr;
}