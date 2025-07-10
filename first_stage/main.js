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

/**------------------------------------------------------------------------------------------------------------------ */
// Bài 7: Maximum Sum of Subarray of Size K (LeetCode 209)
// Đề bài (LeetCode 209):
// Cho mảng số nguyên nums và số nguyên k.
// Hãy tìm tổng lớn nhất của mọi subarray có độ dài k.
// Input: nums = [1,2,3,4,5], k = 3
// Output: 12

function maximumSumOfSubarrayOfSizeK(nums, k) {
  if (k > nums.length) return 0;
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  maxSum = currentSum;
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Trả về subArray có tổng lớn nhất
function maximumSumOfSubarrayOfSizeKWithElements(nums, k) {
  let maxSum = 0;
  let subArray = [];
  if (k > nums.length) {
    return {
      maxSum: 0,
      subArray: [],
    };
  }

  let currentSum = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  maxSum = currentSum;
  end = k - 1;
  subArray = nums.slice(start, end + 1);

  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = i - k + 1;
      end = i;
    }
  }

  return {
    maxSum,
    subArray: nums.slice(start, end + 1),
  };
}

/**------------------------------------------------------------------------------------------------------------------ */
// Bài 8: Longest Substring Without Repeating Characters
// Đề bài (LeetCode 3):
// Cho string s.
// Trả về độ dài dài nhất của substring không lặp ký tự.
// Input: s = "abcabcbb"
// Output: 3
// → Substring “abc” dài nhất không lặp.
// Ví dụ:
// Input: s = "bbbbb"
// Output: 1

function longestSubStringWithoutRepeatingCharacters(s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  for (right = 0; right < s.length; right++) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Nâng cao hơn: Trả về substring dài nhất không lặp
function longestSubStringWithoutRepeatingCharactersWithElements(s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let start = 0;
  let end = 0;

  for (right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    if (maxLength < right - left + 1) {
      maxLength = right - left + 1;
      start = left;
      end = right;
    }
  }

  return {
    maxLength,
    substring: s.slice(start, end + 1),
  };
}

/**------------------------------------------------------------------------------------------------------------------ */
// Bài 9: Minimum Size Subarray Sum
// Đề bài (LeetCode 209):
// Cho array nums chứa các số nguyên dương và một số nguyên dương target.
// Hãy tìm độ dài nhỏ nhất của subarray liên tiếp có tổng ≥ target.
// Nếu không tồn tại subarray nào thỏa mãn, trả về 0.
// Ví dụ
// Input: nums = [2,3,1,2,4,3], target = 7
// Output: 2
// Vì subarray [4,3] có tổng = 7 → độ dài = 2.

function minimumSizeSubarraySum(nums, target) {
  let minLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      let currentSum = nums[i] + nums[j];
      if (currentSum >= target) {
        let length = j - i + 1;
        if (length < minLength && j > i) {
          minLength = length;
        }
      }
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Nâng cao hơn: Sử dụng Sliding Window để tìm độ dài nhỏ nhất của subarray có tổng ≥ target
function minimumSizeSubarraySumSlidingWindow(nums, target) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }
  return minLength;
}

/**------------------------------------------------------------------------------------------------------------------ */
// Bài 10: Longest Subarray With Sum ≤ K
// Cho array nums chứa các số nguyên dương, và số nguyên dương k.
// Hãy tìm độ dài dài nhất của subarray liên tiếp có tổng ≤ k.

// Ví dụ
// Input: nums = [1,2,1,0,1,1,0], k = 4
// Output: 5
// → Vì subarray dài nhất có tổng ≤ 4 là [1,0,1,1,0] tổng = 3.

function longestSubarraySumLEK(nums, k) {
  let left = 0;
  let sum = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
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
  // console.log("moveZeroes function is called", moveZeroes([0, 1, 0, 3, 12]));
  // console.log(
  //   "maximumSumOfSubarrayOfSizeK function is called",
  //   maximumSumOfSubarrayOfSizeK([1, 2, 3, 4, 5], 3)
  // );
  // console.log(
  //   "maximumSumOfSubarrayOfSizeKWithElements function is called",
  //   maximumSumOfSubarrayOfSizeKWithElements([5, 2, -1, 0, 3], 3)
  // );
  // console.log(
  //   "longestSubStringWithoutRepeatingCharacters function is called",
  //   longestSubStringWithoutRepeatingCharacters("abcabcbb")
  // );
  // console.log(
  //   "longestSubStringWithoutRepeatingCharactersWithElements function is called",
  //   longestSubStringWithoutRepeatingCharactersWithElements("pwwkew")
  // );
  // console.log(
  //   "minimumSizeSubarraySum function is called",
  //   minimumSizeSubarraySum([2, 3, 1, 2, 4, 3], 7)
  // );

  // console.log(
  //   "minimumSizeSubarraySumSlidingWindow",
  //   minimumSizeSubarraySumSlidingWindow([2, 3, 1, 2, 4, 3], 7)
  // );

  console.log(
    "longestSubarraySumLEK",
    longestSubarraySumLEK([1, 2, 1, 0, 1, 1, 0], 4)
  );
}
export { run };

// | #  | Chủ đề                         | LeetCode # | Tên bài                                        | Link bài tập                                                                          | Đã học / Gợi ý luyện |
// | -- | ------------------------------ | ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------- |
// | 1  | Array – Hash Map               | 1          | Two Sum                                        | [Link](https://leetcode.com/problems/two-sum/)                                        | Đã học               |
// | 2  | Array – Hash Map Counting      | 169        | Majority Element                               | [Link](https://leetcode.com/problems/majority-element/)                               | Đã học               |
// | 3  | Array – Hash Set               | 217        | Contains Duplicate                             | [Link](https://leetcode.com/problems/contains-duplicate/)                             | Đã học               |
// | 4  | Array – Hash Map               | 136        | Single Number                                  | [Link](https://leetcode.com/problems/single-number/)                                  | Gợi ý luyện          |
// | 5  | Array – Hash Map               | 387        | First Unique Character in a String             | [Link](https://leetcode.com/problems/first-unique-character-in-a-string/)             | Gợi ý luyện          |
// | 6  | Array – Hash Map               | 49         | Group Anagrams                                 | [Link](https://leetcode.com/problems/group-anagrams/)                                 | Gợi ý luyện          |
// | 7  | Array – Hash Map               | 128        | Longest Consecutive Sequence                   | [Link](https://leetcode.com/problems/longest-consecutive-sequence/)                   | Gợi ý luyện          |
// | 8  | Array – Two Pointer            | 26         | Remove Duplicates from Sorted Array            | [Link](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)            | Đã học               |
// | 9  | Array – Two Pointer            | 283        | Move Zeroes                                    | [Link](https://leetcode.com/problems/move-zeroes/)                                    | Đã học               |
// | 10 | Array – Two Pointer            | 27         | Remove Element                                 | [Link](https://leetcode.com/problems/remove-element/)                                 | Gợi ý luyện          |
// | 11 | Array – Two Pointer            | 167        | Two Sum II – Input Array Is Sorted             | [Link](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)               | Gợi ý luyện          |
// | 12 | Array – Two Pointer            | 75         | Sort Coolrs (Dutch National Flag)              | [Link](https://leetcode.com/problems/sort-colors/)                                    | Gợi ý luyện          |
// | 13 | Array – Prefix Sum/Kadane      | 53         | Maximum Subarray                               | [Link](https://leetcode.com/problems/maximum-subarray/)                               | Đã học               |
// | 14 | Array – Prefix Sum/Kadane      | 152        | Maximum Product Subarray                       | [Link](https://leetcode.com/problems/maximum-product-subarray/)                       | Gợi ý luyện          |
// | 15 | Array – Prefix Sum             | 560        | Subarray Sum Equals K                          | [Link](https://leetcode.com/problems/subarray-sum-equals-k/)                          | Gợi ý luyện          |
// | 16 | Sliding Window – Fixed Size    | 643        | Maximum Average Subarray I                     | [Link](https://leetcode.com/problems/maximum-average-subarray-i/)                     | Đã học (tương tự)    |
// | 17 | Sliding Window – Fixed Size    | 567        | Permutation in String                          | [Link](https://leetcode.com/problems/permutation-in-string/)                          | Gợi ý luyện          |
// | 18 | Sliding Window – Variable Size | 3          | Longest Substring Without Repeating Characters | [Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Đã học               |
// | 19 | Sliding Window – Variable Size | 209        | Minimum Size Subarray Sum                      | [Link](https://leetcode.com/problems/minimum-size-subarray-sum/)                      | Đã học               |
// | 20 | Sliding Window – Variable Size | (Custom)   | Longest Subarray With Sum ≤ K                  | (Custom problem)                                                                      | Đã học               |
// | 21 | Sliding Window – Variable Size | 424        | Longest Repeating Character Replacement        | [Link](https://leetcode.com/problems/longest-repeating-character-replacement/)        | Gợi ý luyện          |
// | 22 | Sliding Window – Variable Size | 1004       | Max Consecutive Ones III                       | [Link](https://leetcode.com/problems/max-consecutive-ones-iii/)                       | Gợi ý luyện          |
// | 23 | Sliding Window – Variable Size | 121        | Best Time to Buy and Sell Stock                | [Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)                | Gợi ý luyện          |
