// Lấy các phần tử HTML cần thiết
const rollButton = document.getElementById("roll");
const img1Element = document.querySelector(".img1");
const img2Element = document.querySelector(".img2");

// Mảng chứa tên các hình ảnh xúc sắt
const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

// Hàm để ngẫu nhiên lấy một số từ 1 đến 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Xử lý sự kiện khi nút "Roll" được nhấn
rollButton.addEventListener("click", () => {
    // Lấy số ngẫu nhiên cho cả hai người chơi
    const player1Roll = rollDice();
    const player2Roll = rollDice();

    // Hiển thị hình ảnh xúc sắt tương ứng
    img1Element.src = `img/${diceImages[player1Roll - 1]}`;
    img2Element.src = `img/${diceImages[player2Roll - 1]}`;
});
