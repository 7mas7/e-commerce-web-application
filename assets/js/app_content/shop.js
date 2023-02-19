function shopFun(){
	parentApp.toggle(500).toggle(500);
	parentApp.html(
	`

	<h1  id="descripe__header">
		<font color="darkorange">New's</font> and <font color="crimson">Greatest</font>
	</h1>

  <swiper-container class="show__examples__slider" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
    slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
    coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
    <swiper-slide>
      <img src="https://image.goat.com/attachments/product_template_pictures/images/018/951/283/original/492186_00.png.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://image.goat.com/attachments/product_template_pictures/images/016/928/118/original/155573_00.png.png" />
    </swiper-slide>
     <swiper-slide>
      <img src="https://image.goat.com/attachments/product_template_pictures/images/012/598/505/original/348063_00.png.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://image.goat.com/attachments/product_template_pictures/images/020/249/956/original/EF3326.png.png" />
    </swiper-slide>       
    <swiper-slide>
      <img src="https://image.goat.com/attachments/product_template_pictures/images/011/292/904/original/298048_00.png.png" />
    </swiper-slide>               
  </swiper-container>


  <div id="products__list__container">
  	<h1 id="lastet__products__title">Lastet Products</h1>

	

	</div>



	<footer class="text-center text-white" style="background-image: linear-gradient(45deg, #a16d0b3d, rgb(255 168 0 / 34%) , #bb790091);">

  <div class="container p-4 pb-0">

    <section class="mb-4">

      <a  target="_blank" class="btn text-white btn-floating m-1"style="background-color: #3b5998;"href="https://www.facebook.com/mu71mad"role="button"><i class="fab fa-facebook-f"></i
      ></a>


      <a  target="_blank" class="btn text-white btn-floating m-1"style="background-color: #0d2636;"href="https://www.github.com/7mas7"role="button"><i class="fa-brands fa-github"></i></a>


      <a  target="_blank" class="btn text-white btn-floating m-1"style="background-color: #7841ca;"href="https://www.instagram.com/mu71mad"role="button"><i class="fa-brands fa-instagram"></i></a>



    </section>

  </div>



  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2023 Copyright:
    <a class="text-white" href="https://Instagram.com/mu71mad">Muhammad Ayman Salama</a>
  </div>

</footer>
	`);
	loadProductsOnShop();
	buyShoe();	
}


function homeFun(){
	parentApp.toggle(500).toggle(500);
	parentApp.html(
	`
<div class="navbar navbar-expand-lg d-flex justify-content-center align-items-center" id="app__header">

		<div id="app__header__box" class="d-flex justify-content-center align-items-center">
			<img src="assets/src/images/logo.png" class="header__logo__img">
			<h1 class="descript__App">FIND YOUR <br> PERFECT <a href="#" style="color: crimson;">SHOE</a></h1>
			<a href="#" class="know__more__button">Know More</a>
		</div>

	</div>
 	<h1 class="descripe__header">More About Us</h1>	
	<div id="app__content">

		<div class="card prod__card">

	<div class="prod__container">

		<div class="card-top">
				<button class="prod__assets_button prod__info"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
				<button class="prod__assets_button prod__buy"><i class="fa-solid fa-bag-shopping"></i></button>		
			</div>

		  <div class="prod__ex">
		      <img src="https://image.goat.com/attachments/product_template_pictures/images/020/806/485/original/461782_00.png.png" class="d-block w-100" alt="assets/src/images/ex-shoe.png" class="prod__img">
		  </div>

		  <div class="card-body">
		    <h5 class="card-title prod__title">Popular Shoe Trend</h5>
		    <p class="card-text prod__price text-mute">$266.00</p>
		  </div>

		</div>	
	</div>

	<div class="card prod__card">

	<div class="prod__container">

		<div class="card-top">
				<button class="prod__assets_button prod__info"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
				<button class="prod__assets_button prod__buy"><i class="fa-solid fa-bag-shopping"></i></button>		
			</div>

		  <div class="prod__ex">
		      <img src="https://image.goat.com/attachments/product_template_pictures/images/021/474/777/original/TR_JSP_5_ICE.png.png" class="d-block w-100" alt="assets/src/images/ex-shoe.png" class="prod__img">
		  </div>

		  <div class="card-body">
		    <h5 class="card-title prod__title">Popular Shoe Trend</h5>
		    <p class="card-text prod__price text-mute">$266.00</p>
		  </div>

		</div>	
	</div>


	<div class="card prod__card">

	<div class="prod__container">

		<div class="card-top">
				<button class="prod__assets_button prod__info"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
				<button class="prod__assets_button prod__buy"><i class="fa-solid fa-bag-shopping"></i></button>		
			</div>

		  <div class="prod__ex">
		      <img src="https://image.goat.com/attachments/product_template_pictures/images/021/321/847/original/473391_00.png.png" class="d-block w-100" alt="assets/src/images/ex-shoe.png" class="prod__img">
		  </div>

		  <div class="card-body">
		    <h5 class="card-title prod__title">Popular Shoe Trend</h5>
		    <p class="card-text prod__price text-mute">$266.00</p>
		  </div>

		</div>	
	</div>

	<div class="card prod__card">

	<div class="prod__container">

		<div class="card-top">
				<button class="prod__assets_button prod__info"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
				<button class="prod__assets_button prod__buy"><i class="fa-solid fa-bag-shopping"></i></button>		
			</div>

		  <div class="prod__ex">
		      <img src="https://image.goat.com/attachments/product_template_pictures/images/020/249/043/original/494127_00.png.png" class="d-block w-100" alt="assets/src/images/ex-shoe.png" class="prod__img">
		  </div>

		  <div class="card-body">
		    <h5 class="card-title prod__title">Popular Shoe Trend</h5>
		    <p class="card-text prod__price text-mute">$266.00</p>
		  </div>

		</div>	
	</div>

	<div class="card prod__card">

	<div class="prod__container">

		<div class="card-top">
				<button class="prod__assets_button prod__info"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
				<button class="prod__assets_button prod__buy"><i class="fa-solid fa-bag-shopping"></i></button>		
			</div>

		  <div class="prod__ex">
		      <img src="https://image.goat.com/attachments/product_template_pictures/images/008/707/328/original/152603_00.png.png" class="d-block w-100" alt="assets/src/images/ex-shoe.png" class="prod__img">
		  </div>

		  <div class="card-body">
		    <h5 class="card-title prod__title">Popular Shoe Trend</h5>
		    <p class="card-text prod__price text-mute">$266.00</p>
		  </div>

		</div>	
	</div>


	<div class="card prod__card">

	<div class="prod__container">

		<div class="card-top">
				<button class="prod__assets_button prod__info"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
				<button class="prod__assets_button prod__buy"><i class="fa-solid fa-bag-shopping"></i></button>		
			</div>

		  <div class="prod__ex">
		      <img src="assets/src/images/shoes/shoe-1/shoe-front.png" class="d-block w-100" alt="assets/src/images/ex-shoe.png" class="prod__img">
		  </div>

		  <div class="card-body">
		    <h5 class="card-title prod__title">Popular Shoe Trend</h5>
		    <p class="card-text prod__price text-mute">$266.00</p>
		  </div>

		</div>	
	</div>



	<footer class="text-center text-white" style="background-image: linear-gradient(45deg, #a16d0b3d, rgb(255 168 0 / 34%) , #bb790091);">

  <div class="container p-4 pb-0">

    <section class="mb-4">

      <a  target="_blank" class="btn text-white btn-floating m-1"style="background-color: #3b5998;"href="https://www.facebook.com/mu71mad"role="button"><i class="fab fa-facebook-f"></i
      ></a>


      <a  target="_blank" class="btn text-white btn-floating m-1"style="background-color: #0d2636;"href="https://www.github.com/7mas7"role="button"><i class="fa-brands fa-github"></i></a>


      <a  target="_blank" class="btn text-white btn-floating m-1"style="background-color: #7841ca;"href="https://www.instagram.com/mu71mad"role="button"><i class="fa-brands fa-instagram"></i></a>



    </section>

  </div>



  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2023 Copyright:
    <a class="text-white" href="https://Instagram.com/mu71mad">Muhammad Ayman Salama</a>
  </div>

</footer>
	</div>
	`);
}
