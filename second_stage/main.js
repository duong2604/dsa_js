// 1. Two Sum
// LeetCode 1

// Đề bài chi tiết
// Cho mảng số nguyên nums và số nguyên target.
// Hãy tìm index của hai số trong nums sao cho:

// nums[i] + nums[j] == target
// Mỗi input đảm bảo có đúng một cặp duy nhất thỏa mãn.
// Không dùng phần tử giống nhau hai lần.

// Ví dụ:

// nums = [3, 2, 4]
// target = 6

function twoSum(nums, target) {
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

//  Bài 2 – Majority Element
// LeetCode 169

// Đề bài chi tiết
// Cho mảng số nguyên nums.
// Hãy tìm phần tử xuất hiện nhiều hơn ⌊n/2⌋ lần trong mảng.
// Giả sử chắc chắn tồn tại đúng 1 phần tử thỏa mãn.

// Ví dụ 1:

// Input: nums = [3, 2, 3]
// Output: 3
// → 3 xuất hiện 2 lần, mảng có 3 phần tử, mà 2 > ⌊3/2⌋ = 1.5 → ok

// Ví dụ 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
// → 2 xuất hiện 4 lần, mảng có 7 phần tử, mà 4 > ⌊7/2⌋ = 3.5 → ok

// Practice with input nums = [1,1,1,2,2]

function majorityElement(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  for (let [key, value] of map) {
    if (value > nums.length / 2) {
      return key;
    }
  }
}

function boyerMooreVoting(nums) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      candidate = nums[i];
    }

    if ((nums[i] = candidate)) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

// Bài 3 – Contains Duplicate
// LeetCode 217

// Đề bài chi tiết
// Cho mảng số nguyên nums.
// Hãy kiểm tra xem có phần tử nào xuất hiện ít nhất 2 lần không.
// Nếu có → return true
// Nếu không → return false

// Ví dụ 1:

// Input: nums = [1,2,3,1]
// Output: true
// → Vì phần tử 1 xuất hiện 2 lần.

// Ví dụ 2:

// Input: nums = [1,2,3,4]
// Output: false
// → Vì không có phần tử nào lặp.

// Required nums = [1,2,3,4,5,1]

function containsDuplicate(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}

// Bài 4 – Remove Duplicates from Sorted Array
// LeetCode 26

// Đề bài chi tiết
// Cho mảng số nguyên nums đã được sắp xếp tăng dần.
// Hãy xoá các phần tử trùng lặp trực tiếp trên mảng.
// Trả về:

// Độ dài mới của mảng sau khi xoá trùng

// Các phần tử unique phải được sắp xếp ở đầu mảng

// Phần còn lại sau độ dài mới có thể là bất kỳ giá trị nào, không quan trọng.

// Ví dụ:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4, _, _, _, _, _]
// → Phần tử unique: [0,1,2,3,4]

// Requried with nums = [1,1,2,2,3,4,4,4,5]

function removeDuplicate(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] != nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  console.log("nums", nums);
}

// Bài 5 – Move Zeroes
// LeetCode 283

// Đề bài chi tiết
// Cho mảng số nguyên nums.
// Di chuyển tất cả các số 0 về cuối mảng, giữ nguyên thứ tự phần tử còn lại.
// Làm trực tiếp trên nums. Không dùng mảng mới nếu có thể.

// Ví dụ 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Ví dụ 2:

// Input: nums = [0,0,1]
// Output: [1,0,0]

// Requried with  nums = [0,1,0,0,2,3,0,4]
function moveZeros(nums) {
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

// Bài 6 – Maximum Subarray
// LeetCode 53

// Đề bài chi tiết
// Cho mảng số nguyên nums (có thể có cả số âm).
// Tìm tổng lớn nhất của một dãy con liên tiếp bất kỳ (subarray).
// Chỉ cần trả về tổng lớn nhất, không cần trả về mảng con.

// Ví dụ 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// → Subarray lớn nhất: [4,-1,2,1] với tổng = 6

// Ví dụ 2:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// → Subarray lớn nhất: [5,4,-1,7,8]

// Requried with nums = [-2, 3, 2, -1, 4, -5, 2]

function maximumSubarray(nums) {
  let currentSum = 0;
  let maxSum = currentSum;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Bài 7 – Maximum Sum Subarray of Size K
// (Tương tự LeetCode 643)

// Đề bài chi tiết
// Cho mảng số nguyên nums và số nguyên k.
// Hãy tìm tổng lớn nhất của tất cả các subarray có độ dài đúng bằng k.

// Ví dụ 1:

// Input: nums = [1, 2, 3, 4, 5], k = 3
// Output: 12
// → subarray [3, 4, 5] có tổng = 12 (lớn nhất)

// Ví dụ 2:

// Input: nums = [2,1,5,1,3,2], k = 3
// Output: 9
// → subarray [5,1,3] có tổng = 9

// Required with nums = [2, 1, 5, 1, 3, 2] , k = 3

function maximumSumSubArrayWithSizeK(nums, k) {
  let currentSum = 0;
  let maxSum = 0;

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

// Bài 8 – Longest Substring Without Repeating Characters
// LeetCode 3

// Đề bài chi tiết
// Cho chuỗi s.
// Trả về độ dài dài nhất của substring không có ký tự lặp lại.

// Ví dụ 1:

// Input: s = "abcabcbb"
// Output: 3
// → Substring dài nhất: "abc"

// Ví dụ 2:

// Input: s = "bbbbb"
// Output: 1
// → Chỉ có "b"

// Required with s = "abcabcbb"

function longestSubstringWithoutRepeatingCharaters(string) {
  let left = 0;
  let maxLen = 0;

  const charSet = new Set();

  for (let right = 0; right < string.length; right++) {
    if (!charSet.has(string[right])) {
      charSet.add(string[right]);
      maxLen = Math.max(maxLen, right - left + 1);
    } else {
      while (left < right) {
        charSet.delete(left);
        left++;
      }
    }
  }
  return maxLen;
}

// Bài 9 – Minimum Size Subarray Sum
// LeetCode 209

// Đề bài chi tiết
// Cho mảng số nguyên dương nums và số nguyên target.
// Hãy tìm độ dài nhỏ nhất của subarray (các phần tử liên tiếp) sao cho:

// sum(subarray) ≥ target
// Nếu không tồn tại subarray nào thỏa mãn → trả về 0.

// Ví dụ 1:

// Input: nums = [2,3,1,2,4,3], target = 7
// Output: 2
// → Subarray [4,3] có tổng = 7 → độ dài = 2

// Ví dụ 2:

// Input: nums = [1,4,4], target = 4
// Output: 1
// → Subarray [4] có tổng = 4 → độ dài = 1

// Requried with nums = [2,3,1,2,4,3] , target = 7

function minumumSizeSubArray(nums, target) {
  let currentSum = 0;
  let left = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

//  Bài 10 – Longest Subarray Sum ≤ K
// (Không có số LeetCode y chang, nhưng là biến thể rất hay gặp)

// Đề bài chi tiết
// Cho mảng số nguyên nums (có thể âm, dương) và số nguyên k.
// Hãy tìm độ dài dài nhất của subarray liên tiếp sao cho:

// sum(subarray) ≤ k
// Ví dụ 1:

// Input: nums = [1,2,1,0,1,1,0], k = 4
// Output: 6
// → Subarray dài nhất: [2,1,0,1,1,0] có tổng = 5 > 4 → không được
// → Subarray [1,2,1,0] có tổng = 4 → độ dài = 4
// → Nhưng thực ra còn subarray [2,1,0,1] cũng tổng = 4 → dài 4
// → Độ dài dài nhất ≤ 4 là 4

// Required with nums = [1,2,1,0,1,1,0] k = 4

// Gợi ý cách tiếp cận
// Brute force:

// Duyệt mọi subarray

// Tính tổng từng đoạn

// Time O(n²)

// Sliding Window (áp dụng khi toàn số dương):

// Dùng left–right window

// Nếu sum > k → dịch left

// Time O(n)

// → Lưu ý:
// Nếu mảng có số âm, sliding window không luôn đúng vì giảm left không chắc làm sum nhỏ đi. Phải dùng Prefix Sum + Binary Search để tối ưu.'

function longestSubArraySumK(nums, target) {
  let currentSum = 0;
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum > target) {
      currentSum -= nums[left];
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Bài 11 – Longest Substring with At Most K Distinct Characters
// LeetCode 340

// Đề bài chi tiết
// Cho chuỗi s và số nguyên k.
// Tìm độ dài dài nhất của một substring (dãy ký tự liên tiếp) sao cho substring đó có tối đa k ký tự khác nhau.

// Ví dụ 1:

// Input: s = "eceba", k = 2
// Output: 3
// → Substring "ece" có đúng 2 ký tự khác nhau → dài nhất là 3

// Ví dụ 2:

// Input: s = "aa", k = 1
// Output: 2
// → Toàn bộ chuỗi "aa" chỉ có 1 ký tự khác nhau → dài 2

// Required with s = "eceba" k = 2

// Sliding Window Variable Size (Tối ưu):

// Dùng Hash Map hoặc Hash Set để đếm số ký tự khác nhau

// Nếu số ký tự unique > k:

// Dịch left

// Xoá ký tự ra khỏi map nếu count về 0

// Update maxLen:

// maxLen = max(maxLen, right - left + 1)
// → Time O(n)

function longestSubStringWithAtMostDistinceKCharacters(s, k) {
  const charMap = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    while (charMap.size > k) {
      charMap.set(s[left], charMap.get(s[left]) - 1);
      if (charMap.get(s[left]) === 0) {
        charMap.delete(s[left]);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

/**
 * Caculate prefix sum
 *
 *
 */
// nums = [3, -2, 5, -1, 2]

function buildPrefixSum(nums) {
  let prefix = [0];
  for (let i = 0; i < nums.length; i++) {
    console.log(`prefix& [${i}] =`, prefix[i]);
    prefix.push(prefix[i] + nums[i]);
  }
  return prefix;
}

function sumLeftToRight(left, right, prefix) {
  return prefix[right + 1] - prefix[left];
}

function run() {
  // prefix sum
  // let nums = [3, -2, 5, -1, 2];
  // let prefix = buildPrefixSum(nums);
  // console.log(sumLeftToRight(1, 3, prefix));
}

export { run };

// LeetCode – Array Problems
// 🎯 1. Array + Hash Map / Hash Set
// | LeetCode ID | Title                          | Ghi chú                                   |
// | ----------- | ------------------------------ | ----------------------------------------- |
// | 1           | Two Sum                        | Dạng cơ bản Hash Map (find pair with sum) | x
// | 217         | Contains Duplicate             | Hash Set kiểm tra phần tử trùng           | x
// | 169         | Majority Element               | Hash Map đếm tần suất                     | x
// | 454         | 4Sum II                        | Hash Map lưu sum 2 mảng                   | x
// | 594         | Longest Harmonious Subsequence | Hash Map đếm tần suất + hiệu 1            | x

// 🎯 2. Array + Two Pointers
// LeetCode ID	Title	Ghi chú
// | LeetCode ID | Title                               | Ghi chú                                        |
// | ----------- | ----------------------------------- | ---------------------------------------------- |
// | 26          | Remove Duplicates from Sorted Array | Dạng cơ bản Two Pointers                       | x
// | 27          | Remove Element                      | Two Pointers overwrite elements                | x
// | 283         | Move Zeroes                         | Two Pointers giữ non-zero ở đầu                | x
// | 80          | Remove Duplicates II                | Two Pointers cho phép mỗi phần tử tối đa k lần | x

// 🎯 3. Array + Prefix Sum / Kadane
// LeetCode ID	Title	Ghi chú
// | LeetCode ID | Title                                 | Ghi chú                  |
// | ----------- | ------------------------------------- | ------------------------ |
// | 53          | Maximum Subarray                      | Kadane’s Algorithm       | x
// | 560         | Subarray Sum Equals K                 | Prefix Sum + Hash Map    | x
// | 325         | Maximum Size Subarray Sum Equals k    | Prefix Sum + Hash Map    | -
// | 363         | Max Sum of Rectangle No Larger Than K | 2D Kadane (khá nâng cao) |

// 🎯 4. Sliding Window – Fixed Size
// | LeetCode ID | Title                                                 | Ghi chú                             |
// | ----------- | ----------------------------------------------------- | ----------------------------------- |
// | 643         | Maximum Average Subarray I                            | Tổng max với window size fixed      |
// | 1004        | Max Consecutive Ones III                              | Flip tối đa k số 0 → Sliding Window |
// | 1456        | Maximum Number of Vowels in Substring of Given Length | Window size fixed                   |

// 🎯 5. Sliding Window – Variable Size
// | LeetCode ID | Title                                          | Ghi chú                                   |
// | ----------- | ---------------------------------------------- | ----------------------------------------- |
// | 209         | Minimum Size Subarray Sum                      | Sliding Window Variable Size              |
// | 3           | Longest Substring Without Repeating Characters | Ký tự không lặp                           |
// | 76          | Minimum Window Substring                       | Window phải chứa đủ tất cả ký tự tần suất |
// | 30          | Substring with Concatenation of All Words      | Sliding Window với Hash Map               |

// 🎯 6. Array Miscellaneous
// | LeetCode ID | Title                    | Ghi chú                              |
// | ----------- | ------------------------ | ------------------------------------ |
// | 152         | Maximum Product Subarray | Tích lớn nhất → tương tự Kadane      |
// | 75          | Sort Colors              | Two Pointers + Counting              |
// | 42          | Trapping Rain Water      | Two Pointers / Stack (khá hay)       |
// | 239         | Sliding Window Maximum   | Dùng deque / Sliding Window nâng cao |
