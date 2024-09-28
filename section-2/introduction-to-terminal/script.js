class Solution {
   kthSmallest(arr, k) {
        function partition(arr, left, right) {
            let pivot = arr[right]; 
            let i = left;
            for (let j = left; j < right; j++) {
                if (arr[j] <= pivot) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]; 
                    i++;
                }
            }
            [arr[i], arr[right]] = [arr[right], arr[i]]; 
            return i;
        }

        function quickSelect(arr, left, right, k) {
            if (left <= right) {
                let pivotIndex = partition(arr, left, right);

                if (pivotIndex === k - 1) {
                    return arr[pivotIndex]; 
                } else if (pivotIndex > k - 1) {
                    return quickSelect(arr, left, pivotIndex - 1, k); 
                } else {
                    return quickSelect(arr, pivotIndex + 1, right, k); 
                }
            }
            return -1;
        }

        return quickSelect(arr, 0, arr.length - 1, k);
    }
}