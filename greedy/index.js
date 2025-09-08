// Bài 1 – Coin Change (hệ xu chuẩn)

// Đề:
// Có các loại xu {1, 2, 5, 10}. Hãy đổi số tiền N = 27 sao cho số xu ít nhất.

// Yêu cầu:

// Dùng Greedy chọn xu lớn nhất trước.

// Xuất ra danh sách các xu đã chọn.

// Bài 2 – Hoạt động không trùng nhau (Activity Selection)

// Đề:
// Có 6 hoạt động:

// (1, 3)

// (2, 5)

// (4, 6)

// (6, 7)

// (5, 9)

// (8, 10)

// Hãy chọn nhiều hoạt động nhất mà không bị trùng giờ.

// Yêu cầu:

// Áp dụng greedy: chọn hoạt động kết thúc sớm nhất trước.

// In ra danh sách hoạt động được chọn.

// Bài 3 – Fractional Knapsack (Balo phân số)

// Đề:
// Balo có sức chứa W = 50. Có 3 vật:

// V1: weight = 10, value = 60

// V2: weight = 20, value = 100

// V3: weight = 30, value = 120

// Yêu cầu:

// Dùng greedy theo tỉ lệ value/weight.

// Tính giá trị tối đa có thể lấy được.

// Bài 4 – Tối đa hóa lợi nhuận từ công việc (Job Scheduling with Deadlines)

// Đề:
// Có 4 công việc, mỗi công việc có: (profit, deadline):

// J1: (20, 2)

// J2: (15, 2)

// J3: (10, 1)

// J4: (5, 3)

// Mỗi công việc mất 1 đơn vị thời gian. Deadline = hạn cuối phải hoàn thành.
// Mục tiêu: tối đa hóa tổng profit.

// Yêu cầu:

// Áp dụng greedy: sắp xếp theo profit giảm dần.

// Gán công việc vào slot trễ nhất còn trống trước deadline.

// Xuất ra danh sách công việc được chọn và tổng profit.

// Bài 5 – Huffman Coding (nén dữ liệu)

// Đề:
// Có các ký tự với tần suất:

// A: 5

// B: 9

// C: 12

// D: 13

// E: 16

// F: 45

// Yêu cầu:

// Dùng greedy xây cây Huffman.

// Tính tổng số bit tối thiểu để mã hóa chuỗi.

class Greedy {
  coinChangeGreedy(coins, n) {
    coins.sort((a, b) => b - a);

    const used = [];
    const counts = {};
    let remaining = n;

    for (const c of coins) {
      const k = Math.floor(remaining / c);
      counts[c] = k;
      for (let i = 0; i < k; i++) used.push(c);
      remaining -= k * c;
      if (remaining === 0) break;
    }

    return {
      target: n,
      totalCoins: used.length,
      used, // danh sách xu đã chọn, ví dụ: [10,10,5,2]
      counts, // map: {10:2, 5:1, 2:1, 1:0}
      remaining, // sẽ là 0 nếu đổi thành công
    };
  }
}

export default Greedy;
