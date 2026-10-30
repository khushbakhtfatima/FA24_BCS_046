let searchInput = document.getElementById("searchInput");
let products = document.querySelectorAll(".product-item");
let productGrid = document.querySelector(".product-grid");
let noProducts = document.getElementById("noProducts");
function searchProducts() {
    let searchText = searchInput.value.toLowerCase();

    let selectedCategory = document.querySelector(
        'input[name="category"]:checked'
    ).id;

    let count = 0;
    products.forEach(function(product) {

        let productName = product.querySelector("h5").textContent.toLowerCase();

        let productCategory = product.dataset.category;

        let matchesSearch = productName.includes(searchText);

        let matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === productCategory;

        if (matchesSearch && matchesCategory) {
            product.classList.remove("search-hidden");
            count++;
        } else {
            product.classList.add("search-hidden");
        }

    });
    if (count === 0) {
        productGrid.hidden = true;
        noProducts.hidden = false;
    } else {
        productGrid.hidden = false;
        noProducts.hidden = true;
    }
}
searchInput.addEventListener("input", searchProducts);
document.querySelectorAll('input[name="category"]').forEach(function(radio) {
    radio.addEventListener("change", searchProducts);
});
