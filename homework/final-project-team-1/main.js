function hideTags(n) {
    const tags = document.getElementsByClassName('tags');
    if (n > 0 && n <= tags.length) {
        let targetTag = tags[n - 1];
        if (targetTag.style.display === "none") {
            targetTag.style.display = "block"; // Hiển thị phần tử
        } else {
            targetTag.style.display = "none"; // Ẩn phần tử
        }
    } else {
        console.log("Không tìm thấy phần tử thứ " + n);
    }
}

console.log(hideTags(3));
console.log(hideTags(5));
console.log(hideTags(6));

