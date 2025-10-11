const API_URL = "https://arrarat-designs.onrender.com/api/v1";

//async - await method
const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);

    const data = await response.json();

    displayProducts(data.data.products);
  } catch (error) {
    console.log("Error Fetching Products", error);
  }
};

const displayProducts = async (products) => {
  const specialProductContainer = document.getElementById(
    "special-product-container"
  );

  specialProductContainer.innerHTML = "";

  products.forEach((product) => {
    specialProductContainer.innerHTML += `
<div>
                                        <div class="basic-product theme-product-4">
                                            <div class="img-wrapper">
                                                <a href="product-page(thumbnail).html"><img
                                                        src="${product.productImages[0].url}"
                                                        class="img-fluid blur-up lazyload w-100" alt=""></a>
                                                <div class="cart-info">
                                                    <!-- <a href="#!" title="Add to Wishlist" class="wishlist-icon">
                                                        <i class="ri-heart-line"></i>
                                                    </a> -->
                                                    <button data-bs-toggle="modal" data-bs-target="#addtocart"
                                                        title="Add to cart">
                                                        <i class="ri-shopping-cart-line"></i>
                                                    </button>
                                                    <a href="#quickView" data-bs-toggle="modal" title="Quick View">
                                                        <i class="ri-eye-line"></i>
                                                    </a>
                                                    <!-- <a href="compare.html" title="Compare">
                                                        <i class="ri-loop-left-line"></i>
                                                    </a> -->
                                                </div>
                                            </div>
                                            <div class="product-detail">
                                                <a class="product-title" href="product-page(accordian).html">
                                                   ${product.name}
                                                </a>
                                                <div class="rating-w-count mb-0 d-sm-inline-flex d-none">
                                                    <div class="rating"><i class="ri-star-fill"></i> <i
                                                            class="ri-star-fill"></i> <i class="ri-star-fill"></i>
                                                        <i class="ri-star-fill"></i> <i class="ri-star-fill"></i>
                                                    </div>
                                                    <span>(10)</span>
                                                </div>
                                                <h4 class="price">NGN ${product.price}<del> NGN 125.00 </del> </h4>

                                            </div>
                                        </div>
                                    </div>
`;
  });
};

window.addEventListener("DOMContentLoaded", getAllProducts);
