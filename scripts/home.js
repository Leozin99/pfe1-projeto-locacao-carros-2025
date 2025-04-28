
function openModal(name, brand, color, mileage, price) {
    document.getElementById('modalCarName').textContent = name;
    document.getElementById('modalCarBrand').textContent = brand;
    document.getElementById('modalCarColor').textContent = color;
    document.getElementById('modalCarMileage').textContent = mileage;
    document.getElementById('modalCarPrice').textContent = price;
    document.getElementById('carModal').style.display = 'flex';
}


function closeModal() {
    document.getElementById('carModal').style.display = 'none';
}


window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) {
        closeModal();
    }
}
