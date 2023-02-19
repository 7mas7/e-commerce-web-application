// array that we gonna store on the products user bought
var arrayOfBoughtProducts = [];

$(document).ready(function(){
	// animation
	parentApp = $("#app");
	parentApp.toggle(500).toggle(500);
	homeFun();
	$(".nav-link").click(function(){
		console.log(this);
		$(".active__nav__content").removeClass("active__nav__content");
		$(this).addClass("active__nav__content");
	});
});


function loadProductsOnShop(){
	// loop throgh the products to append so user can buy
	for(let i = 0; i < arrayOfProducts[0].sneakers.length; i++){
		const prodImg = arrayOfProducts[0].sneakers[i].original_picture_url;
		const prodName = arrayOfProducts[0].sneakers[i].name;
		const prodId = arrayOfProducts[0].sneakers[i].id;
		const price = arrayOfProducts[0].sneakers[i].retail_price_cents / 100;
		document.getElementById('products__list__container').innerHTML += 
		`
			<div class="card prod__card buy__card" id="${prodId}">

	<div class="prod__container">

		<div class="card-top">
				<button class="prod__assets_button prod__info"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
				<button class="prod__assets_button prod__buy"><i class="fa-solid fa-bag-shopping"></i></button>		
			</div>

		  <div class="prod__ex">
		      <img src="${prodImg}" class="d-block w-100"  class="prod__img">
		  </div>

		  <div class="card-body">
		    <h5 class="card-title prod__title">${prodName}</h5>
		    <p class="card-text prod__price text-mute">$${price}</p>
		  </div>

		</div>	
	</div>

		`
		productsCards = document.querySelectorAll(".prod__card");
	}
}


function buyShoe(){
   prod__buy__button = document.querySelectorAll(".prod__assets_button.prod__buy");	
	for(let i = 0; i < prod__buy__button.length; i++){
		prod__buy__button[i].addEventListener("click",function(){
			 const container =  this.parentElement.parentElement.parentElement;
			 const name = container.children[0].children[2].children[0].innerHTML;
			 const price = container.children[0].children[2].children[1].innerHTML;
			 const prodImg = container.children[0].children[1].children[0].src;
			 const prodObj = {
			 	prod__name__obj : name,
			 	prod__price__obj : price,
			 	prod__img__obj : prodImg,
			 	prod__count : 1,
			 	prod__id : container.id
			 }
			 arrayOfBoughtProducts.push(prodObj);
			 document.querySelector('.shop__count__container').innerHTML = parseInt(document.querySelector('.shop__count__container').innerHTML) + 1;
		});
	}
}