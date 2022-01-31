
// Ascending sort
    
function swapFn(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return temp; 
}



function bubbleSort(arr, order){
    for(let i=0; i<arr.length-1; i++){
        console.log(i, arr, "inside first loop");
        let  swapped = false;
        for(let j=i+1; j<=arr.length; j++){
            console.log(j, i, arr, "inside second loop");
            if(order === 'ascending' ){
                if(arr[i] > arr[j]){
                    console.log(j+1, j, arr, "inside  loop");
                    swapped =true;
                  swapFn(arr, i, j);
                }
            }
            else{
                if(arr[i] < arr[j]){
                    console.log(j+1, j, arr, "inside  loop");
                    swapped =true;
                  swapFn(arr, i, j);
                }
            }
        }
        if(swapped){
            break;
        }
        
    }
    return arr;
}

const asce = bubbleSort([5,2,7,6,11], 'ascending');
const dece = bubbleSort([5,2,7,6,11], 'decending');
console.log("Both bubble sort array:", asce, dece);
