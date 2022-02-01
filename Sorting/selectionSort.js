function swapFn(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function selectionSort(arr){
    for(let i=0; i<arr.length-1;i++){
        let minMaxVar = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minMaxVar]){
                minMaxVar = j;
            }
        }
        if(minMaxVar != i){
            swapFn(arr,minMaxVar,i)
        }
    }
    return arr;
}

function selectionSortDesc(arr){
    for(let i=0; i<arr.length-1;i++){
        let minMaxVar = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] > arr[minMaxVar]){
                minMaxVar = j;
            }
        }
        if(minMaxVar != i){
            swapFn(arr,minMaxVar,i)
        }
    }
    return arr;
}

const ascendingSort = selectionSort([3,4.9,74,73,64,35]);
const decendingSort = selectionSortDesc([8,4,4,73,34,35]);

console.log(ascendingSort, decendingSort, "ascendingSortdecendingSort");