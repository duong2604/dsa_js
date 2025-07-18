// Bài tập: Longest Substring with At Most K Distinct Characters
// Cho chuỗi s và số nguyên k. Trả về độ dài chuỗi con dài nhất mà có tối đa k ký tự khác nhau.

// Ví dụ 1:
// Input: s = "eceba", k = 2
// Output: 3
// Giải thích: "ece" có 2 ký tự khác nhau.

// Ví dụ 2:
// Input: s = "aa", k = 1
// Output: 2
// Giải thích: Chuỗi con "aa" chỉ có 1 ký tự khác nhau.
// 👉 Gợi ý cách tư duy (Không code):
// ✅ Xác định dạng:

// Substring (liên tiếp) → Sliding Window

// Kích thước thay đổi vì ta chưa biết dài bao nhiêu → Variable size

// ✅ Ý tưởng chính:

// Duyệt từng ký tự bằng right pointer.

// Thêm ký tự vào map hoặc hash để đếm tần suất.

// Nếu số ký tự khác nhau > k:

// Dịch left lên → xóa bớt ký tự

// Cập nhật maxLength = right - left + 1 khi số ký tự khác nhau ≤ k

// Câu hỏi tự hỏi:

// Khi nào dịch left?
// → Khi có hơn k ký tự khác nhau trong window.

// Dữ liệu cần giữ
// HashMap/HashSet đếm tần suất từng ký tự

// left, right pointer

// maxLen để lưu độ dài dài nhất tìm được

// Required with s = "aaabbc", k = 2

// | left | right | window | unique | action     | maxLen
// | ---- | ----- | ------ | ------ | ---------- |
// | 0    | 0     | a      | 1      | OK         | 1
// | 0    | 1     | aa     | 1      | OK         | 2
// | 0    | 2     | aaa    | 1      | OK         | 3
// | 0    | 3     | aaab   | 2      | OK         | 4
// | 0    | 4     | aaabb  | 2      | OK         | 5
// | 0    | 5     | aaabbc | 3      |(Dich left) | 5
// | 1    | 5     | bbbc   | 3      |            | 5

function longestSubstring(s, k) {
  let left = 0;
  let maxLen = 0;
  let map = new Map();

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// LeetCode 209 – Minimum Size Subarray Sum
// Đề bài (Tóm tắt):
// Cho một mảng số nguyên dương nums và một số nguyên dương target.
// Tìm độ dài nhỏ nhất của subarray liên tiếp sao cho tổng ≥ target.
// Nếu không có, trả về 0.

// Ví dụ
// Input: target = 7, nums = [2,3,1,2,4,3]

// Output: 2

// → Vì subarray [4,3] có tổng = 7, độ dài = 2 → nhỏ nhất.

// Ý tưởng sliding window
// Vì nums > 0, nên sum tăng dần → ta có thể co cửa sổ để giảm size.

// Sử dụng 2 pointer: left, right

// Duyệt right từ 0 → n-1

// Mỗi lần:

// Cộng nums[right] vào currentSum.

// Nếu currentSum ≥ target:

// Update minLen = min(minLen, right - left + 1).

// Trừ nums[left] ra khỏi currentSum → left++.

// Lặp lại việc co cửa sổ đến khi currentSum < target.

// Ví dụ diễn biến
// Input: target = 7, nums = [2,3,1,2,4,3]

// right = 0 → sum = 2

// right = 1 → sum = 5

// right = 2 → sum = 6

// right = 3 → sum = 8 → đủ target
// → minLen = 4
// → trừ nums[0]=2 → sum=6 → left++

// right = 4 → sum = 10 → đủ target
// → minLen = 3
// → trừ nums[1]=3 → sum=7 → minLen=2 → left++
// → trừ nums[2]=1 → sum=6 → left++

// tiếp tục…

// → Kết quả: minLen = 2

function miniumSubArraySum(nums, target) {
  let left = 0;
  let currentSum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }
  return minLen === "Infinity" ? 0 : minLen;
}

//  LeetCode 1004 – Max Consecutive Ones III
// Đề bài (tóm tắt):

// Cho mảng nhị phân nums (chỉ gồm 0 và 1) và một số nguyên k.

// Bạn được phép lật tối đa k số 0 thành 1.

// Hãy tìm độ dài dãy con liên tiếp dài nhất chỉ toàn số 1 mà bạn có thể đạt được sau khi lật tối đa k số 0.

// Ví dụ:
// Example 1
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6

// Giải thích:
// Lật 2 số 0 tại vị trí 4 và 5 thành 1.
// Mảng thành [1,1,1,0,0,1,1,1,1,1,1]
// Dãy con dài nhất chỉ toàn 1 là 6.
// Ý tưởng sliding window
// Khởi tạo cửa sổ [left, right].

// Di chuyển right sang phải.

// Khi số lượng số 0 trong window > k → cần dịch left để giảm số 0 xuống ≤ k.

// Mỗi bước update max window size.

// Gợi ý thuật toán:
// Dùng biến countZeros đếm số 0 trong window.

// Mỗi lần nums[right] == 0 → tăng countZeros.

// Nếu countZeros > k:

// Di chuyển left tới khi countZeros ≤ k.

// Cập nhật maxLength = right - left + 1.

// → Độ phức tạp O(n).

function maxConsecutiveOne(nums, k) {
  let left = 0;
  let countZeros = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      countZeros++;
    }

    while (countZeros > k) {
      if (nums[left] === 0) {
        countZeros--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function run() {
  console.log(
    ">>>>> maxConsecutiveOne",
    maxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)
  );
}

export { run };
