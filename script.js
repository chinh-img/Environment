document.getElementById('search-btn').addEventListener('click', async () => {
    const input = document.getElementById('animal-input').value.trim().toLowerCase();
    const accessKey = 'JPKL6R1Y_wQYV1_7faEeIIGXgnzpHbdQesNQ1_Hf-Jc'; // Thay bằng Access Key từ Unsplash

    if (!input) {
        alert('Vui lòng nhập tên động vật!');
        return;
    }

    const url = `https://api.unsplash.com/search/photos?query=${input}&client_id=${accessKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            const animalImg = data.results[0].urls.regular; // URL của hình ảnh
            const imgElement = document.createElement('img');
            imgElement.src = animalImg;
            imgElement.alt = input;
            imgElement.style.width = '100%';

            // Hiển thị ảnh trong môi trường đất
            const container = document.querySelector('#land .animal-container');
            container.innerHTML = ''; // Xóa ảnh cũ
            container.appendChild(imgElement);
        } else {
            alert('Không tìm thấy hình ảnh cho động vật này!');
        }
    } catch (error) {
        console.error('Lỗi khi gọi API Unsplash:', error);
        alert('Có lỗi xảy ra, vui lòng thử lại!');
    }
});
