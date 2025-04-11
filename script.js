const images = [
    { name: "Lukisan Klasik 1", date: "2023-01-15", src: "image1.jpg" },
    { name: "Lukisan Klasik 2", date: "2023-02-20", src: "image2.jpg" },
    { name: "Lukisan Klasik 3", date: "2023-03-10", src: "image3.jpg" },
    { name: "Lukisan Klasik 4", date: "2023-04-05", src: "image4.jpg" },
    { name: "Lukisan Klasik 5", date: "2023-05-25", src: "image5.jpg" },
];

let currentImages = [...images];

function displayGallery(filteredImages) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    filteredImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${image.src}" alt="${image.name}">
            <div class="info">
                <h3>${image.name}</h3>
                <p>${image.date}</p>
            </div>
        `;
        gallery.appendChild(item);
    });
}

function sortGallery(criteria, order) {
    currentImages.sort((a, b) => {
        if (criteria === 'name') {
            return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (criteria === 'date') {
            return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
        }
    });
    displayGallery(currentImages);
}

document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filtered = images.filter(img => img.name.toLowerCase().includes(query));
    currentImages = [...filtered];
    displayGallery(currentImages);
});

displayGallery(currentImages);