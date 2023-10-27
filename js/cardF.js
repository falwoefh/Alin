
//open cảt
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
//add item to cart
const addToCart = document.getElementsByClassName('button style1')
const productRow = document.getElementsByClassName('product-row');
for (var i = 0; i < addToCart.length; i++) {
	button = addToCart[i];
	button.addEventListener('click', addToCartClicked)
  }
  
  function addToCartClicked (event) {
	button = event.target;
	var cartItem = button.parentElement;
	var price = cartItem.getElementsByClassName('product-price')[0].innerText;
	var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
	addItemToCart (price, imageSrc);
	updateCartPrice()
  }
  
  function addItemToCart (price, imageSrc) {
	var productRow = document.createElement('div');
	productRow.classList.add('product-row');
	var productRows = document.getElementsByClassName('product-rows')[0];
	var cartImage = document.getElementsByClassName('cart-image');
	
	for (var i = 0; i < cartImage.length; i++){
	  if (cartImage[i].src == imageSrc){
		alert ('This item has already been added to the cart')
		return;
	  }
	}
	
	var cartRowItems = `
	<div class="product-row">
		  <img class="cart-image" src="${imageSrc}" alt="">
		  <span class ="cart-price">${price}</span><b>VNĐ</b>
		  <button class="button style3 small">Remove</button>
		  </div>
		  
		`
	productRow.innerHTML = cartRowItems;
	productRows.append(productRow);
	productRow.getElementsByClassName('button style3')[0].addEventListener('click', removeItem)
	updateCartPrice()
  }
  const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

function updateCartPrice() {
	var total = 0
	for (var i = 0; i < productRow.length; i += 2) {
	  cartRow = productRow[i]
	var priceElement = cartRow.getElementsByClassName('cart-price')[0]
	var price = parseFloat(priceElement.innerText.replace('VNĐ',''))
	total = total + price
	  
	}
	document.getElementsByClassName('total-price')[0].innerText = total+'.000'
}
function purchase() {
  alert ('Thank you for your purchase');
  updateCartPrice()
}
