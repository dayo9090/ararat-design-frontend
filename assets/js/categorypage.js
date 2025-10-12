const API_URL = "https://arrarat-designs.onrender.com/api/v1";

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
  const categoryproductcontainer = document.getElementById(
    "category-product-container"
  );

  categoryproductcontainer.innerHTML = "";

  products.forEach((product) => {
    categoryproductcontainer.innerHTML += `
<div class="col-xl-4 col-6 col-grid-box">                                              
                                                    <div class="basic-product theme-product-1">                    
                                                        <div class="overflow-hidden">
                                                            <div class="img-wrapper">
                                                                <a href="product-page(accordian).html">
                                                                    <img src="${product.productImages[0].url}"
                                                                        class="w-100 img-fluid blur-up lazyload" alt="">
                                                                </a>
                                                                <div class="rating-label"><i
                                                                        class="ri-star-fill"></i><span>4.5</span>
                                                                </div>
                                                                <div class="cart-info">
                                                                    <a href="#!" title="Add to Wishlist"
                                                                        class="wishlist-icon">
                                                                        <i class="ri-heart-line"></i>
                                                                    </a>
                                                                    <button data-bs-toggle="modal"
                                                                        data-bs-target="#addtocart" title="Add to cart">
                                                                        <i class="ri-shopping-cart-line"></i>
                                                                    </button>
                                                                    <a href="#quickView" data-bs-toggle="modal"
                                                                        title="Quick View">
                                                                        <i class="ri-eye-line"></i>
                                                                    </a>
                                                                    <a href="compare.html" title="Compare">
                                                                        <i class="ri-loop-left-line"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="product-detail">
                                                                <div>
                                                                    <div class="brand-w-color">
                                                                        <a class="product-title"
                                                                            href="product-page(accordian).html">
                                                                             ${product.name}
                                                                        </a>
                                                                        <div class="color-panel">
                                                                            <ul>
                                                                                <li
                                                                                    style="background-color: papayawhip;">
                                                                                </li>
                                                                                <li
                                                                                    style="background-color: burlywood;">
                                                                                </li>
                                                                                <li
                                                                                    style="background-color: gainsboro;">
                                                                                </li>
                                                                            </ul>
                                                                            <span>+2</span>
                                                                        </div>
                                                                    </div>
                                                                    <h6>Purple Mini Dress</h6>
                                                                    <p>Elevate your style with our stunning Mini Dress,
                                                                        the epitome of chic and sophistication. Crafted
                                                                        with precision and designed to turn heads, this
                                                                        dress boasts a figure-flattering silhouette
                                                                        that
                                                                        accentuates your curves in all the right
                                                                        places.
                                                                    </p>
                                                                    <h4 class="price">$ 4.34<del> $5.00 </del><span
                                                                            class="discounted-price"> 5% Off
                                                                        </span>
                                                                    </h4>

                                                                </div>
                                                                <ul class="offer-panel">
                                                                    <li><span class="offer-icon"><i
                                                                                class="ri-discount-percent-fill"></i></span>
                                                                        Limited Time Offer: 5% off</li>
                                                                    <li><span class="offer-icon"><i
                                                                                class="ri-discount-percent-fill"></i></span>
                                                                        Limited Time Offer: 5% off</li>
                                                                    <li><span class="offer-icon"><i
                                                                                class="ri-discount-percent-fill"></i></span>
                                                                        Limited Time Offer: 5% off</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
 `;
  });
};

window.addEventListener("DOMContentLoaded", getAllProducts);
