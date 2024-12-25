// Khởi tạo Swiper
const swiper = new Swiper(".swiper-container", {
  // Các tùy chọn cấu hình của Swiper
  //   loop: true, // Cho phép vòng lặp
  //   autoplay: {
  //     // delay: 3000, // Chuyển slide mỗi 3 giây
  //   },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBallets: true,
  },

  slidesPerView: 1, // Số lượng slide hiển thị cùng lúc
  spaceBetween: 10, // Khoảng cách giữa các slide
});

const texts = ["Hobby runner.", "Ui&UX designer.", "Freelancer."];
const carouselElement = document.getElementById("typing-text");

let currentIndex = 0;
let currentCharIndex = 0;
const displayDuration = 100;
const fullTextDuration = 2000;

function displayTextCharacterByCharacter(text) {
  carouselElement.textContent = "";
  currentCharIndex = 0;

  const interval = setInterval(() => {
    carouselElement.textContent += text[currentCharIndex];
    currentCharIndex++;

    if (currentCharIndex === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        displayTextCharacterByCharacter(texts[currentIndex]);
      }, fullTextDuration);
    }
  }, displayDuration);
}

displayTextCharacterByCharacter(texts[currentIndex]);

// Lấy tất cả các phần tử có class "item"
const items = document.querySelectorAll(".swiper-slide");

// Lấy phần tử để hiển thị kết quả (output)
const output = document.getElementById("run-text");

// Hàm để hiển thị từng phần tử
function showItemsSequentially() {
  items.forEach((item, index) => {
    setTimeout(() => {
      // Hiển thị phần tử tại vị trí index
      item.style.display = "block";
      output.innerHTML += `<p>${item.textContent}</p>`; // Thêm nội dung vào #output
    }, index * 1000); // Thời gian chờ trước khi hiển thị phần tử tiếp theo (1000ms)
  });
}

// Gọi hàm để bắt đầu hiệu ứng
showItemsSequentially();




