export function updateBookmarkedArticles(listArray){
    var filteredArr = [];
    for (var i=0;i<listArray.length;i++){
        if (global.bookmarkedArticles.includes(listArray[i].id)) tempArr.push(listArray[i]);
    }
    return tempArr;
}

export function filterData(listArray, filterOptions, categories){
    var filteredArr = [];
    var tempArr = [];

    if (categories.length==0) tempArr=listArray;
    else {
        for (var i=0;i<listArray.length;i++){
            if (categories.includes(listArray[i].category)) tempArr.push(listArray[i]);
        }
    }
    
    switch(filterOptions){
        case 'Sort by Price: Descending':
            tempArr.sort(function(a, b) {
                return b.price - a.price;
              });
            break;
        case 'Sort by Price: Ascending':
            tempArr.sort(function(a, b) {
                return a.price - b.price;
              });
            break;
        
        case 'Sort by Date: Oldest':
            tempArr.sort((a, b) => a.date - b.date);
            break;
        case 'Sort by Date: Latest':
        default:
            tempArr.sort((a, b) => b.date - a.date);
            break;
    }

    filteredArr = tempArr;
    //console.log("Filtered Array: ")
    //console.log(filteredArr);
    console.log(filterOptions)
    return filteredArr;
}