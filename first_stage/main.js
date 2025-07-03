// Bài 1 – Tính tổng 2 số trong mảng
// Đề bài:
// Cho array nums = [2,7,11,15] và target = 9.
// Hãy trả về index của 2 phần tử có tổng = target.
// (Ví dụ: 2 + 7 = 9 → return [0,1])

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    console.log("i", i, "nums[i]", nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        console.log("j", j, "nums[j]", nums[j]);
        return [
          [i, j],
          [nums[i], nums[j]],
        ];
      }
    }
  }
  return [];
}

function twoSumHashMap(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}
/**------------------------------------------------------------------------------------------------------------------ */
// Bài 2 – Tìm phần tử xuất hiện nhiều hơn n/2 lần (Majority Element)
// Đề bài (LeetCode 169):
// Cho mảng số nguyên nums. Hãy tìm phần tử xuất hiện nhiều hơn n/2 lần.
// Đảm bảo luôn tồn tại phần tử như vậy.

// Ví dụ:

// makefile
// Copy
// Edit
// Input: nums = [3,2,3]
// Output: 3

function majorityElement(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // if (map.has(nums[i])) {
    //   map.set(nums[i], map.get(nums[i]) + 1);
    // } else {
    //   map.set(nums[i], 1);
    // }
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let [key, value] of map) {
    if (value > nums.length / 2) {
      return key;
    }
  }
}
/**------------------------------------------------------------------------------------------------------------------ */
// Bài 3 – Tìm phần tử xuất hiện nhiều hơn n/2 lần (Majority Element) – Boyer-Moore Voting Algorithm
// Đề bài (LeetCode 169):
// Cho mảng số nguyên nums. Hãy tìm phần tử xuất hiện nhiều hơn n/2 lần.
// Đảm bảo luôn tồn tại phần tử như vậy.

function majorityElementBoyerMoore(nums) {
  let count = 0;
  let candidate;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// Bài 4: Remove Duplicates from Sorted Array (LeetCode 26)
// Đề bài
// Cho mảng đã được sắp xếp nums.
// Hãy xóa các phần tử trùng lặp trực tiếp trên mảng, sao cho:

// Mỗi phần tử xuất hiện tối đa 1 lần

// Return độ dài mới của mảng sau khi xóa trùng

// Ví dụ:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeDuplicate(nums) {
  if (nums.length == 0) return 0;

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

/**------------------------------------------------------------------------------------------------------------------ */
// Bài 5: Contains Duplicate (LeetCode 217)
// Đề bài
// Cho mảng số nguyên nums.
// Hãy kiểm tra xem trong mảng có tồn tại phần tử lặp lại không.
// Trả về true nếu có ít nhất 1 phần tử xuất hiện nhiều hơn 1 lần.
// Ngược lại trả về false.

// Ví dụ
// Input: nums = [1,2,3,1]
// Output: true
// Vì số 1 xuất hiện 2 lần.

function containsDuplicateWithBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

function containsDuplicateWithHashSet(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }

  return false;
}

/**------------------------------------------------------------------------------------------------------------------ */
// Maximum Subarray (LeetCode 53)
// Đề bài
// Cho mảng số nguyên nums (có cả số âm).
// Tìm tổng lớn nhất của một dãy con (subarray) liên tiếp bất kỳ.

// Ví dụ:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// → Dãy con có tổng lớn nhất là [4,-1,2,1] = 6
/**------------------------------------------------------------------------------------------------------------------ */
function maximumSubarray(nums) {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let subarray = nums.slice(i, j + 1);
      let sum = subarray.reduce((acc, val) => {
        return acc + val;
      }, 0);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}
/**------------------------------------------------------------------------------------------------------------------ */
// Bài 6: Maximum Subarray (Kadane's Algorithm)
// Đề bài
// Cho mảng số nguyên nums (có cả số âm).
// Tìm tổng lớn nhất của một dãy con (subarray) liên tiếp bất kỳ.
// Ví dụ:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// → Dãy con có tổng lớn nhất là [4,-1,2,1]

function maximumSubarrayKadane(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Nâng cao hơn nữa: Trả về dãy con có tổng lớn nhất
function maximumSubarrayWithElements(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentSum) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }
  return {
    maxSum,
    subarray: nums.slice(start, end + 1),
  };
}

/**------------------------------------------------------------------------------------------------------------------ */
// Move Zeroes (LeetCode 283)
// Đề bài
// Cho array nums chứa các số nguyên.
// Hãy di chuyển tất cả số 0 về cuối mảng, nhưng vẫn giữ nguyên thứ tự các phần tử không phải 0.
// Làm ngay trên mảng, không dùng mảng phụ nếu có thể.

// Ví dụ
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

function run() {
  // console.log(
  //   "twoSumBruteForce function is called",
  //   twoSumBruteForce([2, 7, 11, 15], 9)
  // );
  // console.log(
  //   "twoSumHashMap function is called",
  //   twoSumHashMap([2, 7, 11, 15], 9)
  // );
  // console.log("majorityElement function is called", majorityElement([3, 2, 3]));
  // console.log(
  //   "majorityElementBoyerMoore function is called",
  //   majorityElementBoyerMoore([3, 2, 3])
  // );
  // console.log(
  //   "removeDuplicate function is called",
  //   removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
  // );
  // console.log(
  //   "containsDuplicateWithBruteForce function is called",
  //   containsDuplicateWithBruteForce([1, 2, 3, 4])
  // );
  // console.log(
  //   "containsDuplicateWithHashSet function is called",
  //   containsDuplicateWithHashSet([1, 2, 3, 4, 1])
  // );
  // console.log(
  //   "maximumSubarray function is called",
  //   maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // );
  // console.log(
  //   "maximumSubarrayKadane function is called",
  //   maximumSubarrayKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // );
  // console.log(
  //   "maximumSubarrayWithElements function is called",
  //   maximumSubarrayWithElements([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // );

  console.log("moveZeroes function is called", moveZeroes([0, 1, 0, 3, 12]));
}
export { run };
