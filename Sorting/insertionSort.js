function insertionSortAscending(arr){
    for(let i=1;i<arr.length;i++){
        let temp = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j]> temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

function insertionSortDescending(arr){
    for(let i =1; i<arr.length; i++){
        let temp = arr[i];
        let j= i-1;
        while(j>=0 && arr[j] < temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}


const sortedArrAscending = insertionSortAscending([83,73,4,463,45,62]);
const sortedArrDescending = insertionSortDescending([83,73,4,463,45,62]);
console.log("insertion sort: ",sortedArrAscending, sortedArrDescending)