// **LƯU Ý:**
// Giả định:
// 1. Ảnh lớn có ID là 'main-image'
// 2. Vùng mô tả có ID là 'image-description'
// 3. Ảnh giữ chỗ ban đầu là 'images/placeholder.jpg'

// Khai báo các biến toàn cục để lưu trạng thái ban đầu
const originalImageSrc = 'images/placeholder.jpg';
const originalImageAlt = 'Di chuột qua ảnh nhỏ để xem ở đây.';
const originalDescriptionText = 'Di chuột qua một ảnh nhỏ bên dưới để xem ảnh lớn và mô tả.';


/**
 * Hàm upDate: Xử lý sự kiện khi chuột di chuyển vào (onmouseover).
 * @param {HTMLElement} previewPic - Phần tử ảnh nhỏ (thumbnail) đang được di chuột qua.
 */
function upDate(previewPic) {
    // 1. Lấy đường dẫn ảnh (src) và mô tả (alt) từ ảnh nhỏ
    const newSrc = previewPic.src;
    const newAlt = previewPic.alt;

    // 2. Tìm phần tử ảnh lớn trong DOM
    const mainImage = document.getElementById('main-image');
    
    // 3. Cập nhật thuộc tính của ảnh lớn
    mainImage.src = newSrc;
    mainImage.alt = newAlt;

    // 4. Tìm phần tử mô tả
    const descriptionArea = document.getElementById('image-description');
    
    // 5. Cập nhật nội dung văn bản 
    descriptionArea.innerHTML = newAlt;
}


/**
 * Hàm unDo: Xử lý sự kiện khi chuột rời khỏi (onmouseleave).
 * Trả ảnh lớn và văn bản về trạng thái ban đầu.
 */
function unDo() {
    // 1. Tìm phần tử ảnh lớn
    const mainImage = document.getElementById('main-image'); 
    
    // 2. Trả về ảnh giữ chỗ và mô tả ban đầu
    mainImage.src = originalImageSrc;
    mainImage.alt = originalImageAlt;

    // 3. Tìm phần tử mô tả
    const descriptionArea = document.getElementById('image-description');
    
    // 4. Trả về văn bản ban đầu
    descriptionArea.innerHTML = originalDescriptionText;
}
