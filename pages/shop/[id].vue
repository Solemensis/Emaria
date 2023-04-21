<script setup>
const route = useRoute();
const config = useRuntimeConfig();

if (useProductStore().items.length == 0) {
	const { data: products } = await useFetch(`${config.DS_EP}/items/products?limit=155`);
	useProductStore().items = products.value.data;
}
const assetsEndpoint = `${config.DS_EP}/assets/`;

const cartStore = useCartStore();

const show = ref(false);

function hideModal() {
	if (show.value == true) show.value = false;
}

function showModal() {
	show.value = true;

	setTimeout(hideModal, 2000);
}

function addToCart(product) {
	if (user.value) {
		cartStore.addToCart(product);
	}
}

function userId() {
	if (user.value) {
		return user.value.id;
	} else return;
}

function mail() {
	if (user.value) {
		return user.value.email;
	} else return;
}

//insert item
async function insert() {
	let { data: userCart } = await supabase.from('Carts').select('item').eq('user_id', userId());

	if (userCart.length === 0) {
		await supabase.from('Carts').insert([
			{
				user_id: userId(),
				item: cartStore.items,
				mail: mail()
			}
		]);
	} else {
		await supabase
			.from('Carts')

			.update({ item: cartStore.items })
			.eq('user_id', userId());
	}
}
</script>

<template>
	<div style="height: 50vh">
		<div class="flex">
			<img
				data-aos="zoom-out"
				data-aos-duration="600"
				data-aos-easing="in-out-sine"
				class="image"
				:src="
					assetsEndpoint +
					useProductStore().items.find((e) => e.id == route.params.id).thumbnail
				"
				alt=""
			/>
			<div
				data-aos="zoom-out"
				data-aos-duration="600"
				data-aos-easing="in-out-sine"
				data-aos-delay="50"
				data-aos-offset="-500"
				class="text-block"
			>
				<p class="category">
					-
					{{ useProductStore().items.find((e) => e.id == route.params.id).type }}
					-
				</p>
				<h2 class="title">
					{{ useProductStore().items.find((e) => e.id == route.params.id).name }}
				</h2>

				<h3 class="price">
					<span class="dollar-sign">$</span
					>{{ useProductStore().items.find((e) => e.id == route.params.id).price }}
				</h3>
				<p class="description">
					{{ useProductStore().items.find((e) => e.id == route.params.id).description }}
				</p>
				<!-- <p>{{ products.find((e) => e.id == route.params.id).rating.rate }}</p> -->
				<div class="buttons">
					<button class="add-to-fav button">❤️</button
					><button
						@click="
							addToCart(useProductStore().items.find((e) => e.id == route.params.id)),
								insert(),
								showModal()
						"
						class="add-to-cart button"
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
		<transition name="my-transition">
			<div v-show="show" v-if="user" class="alert1">
				<h3 class="modal-text">Item added to the cart!</h3>
			</div>
			<div v-show="show" v-else class="alert2">
				<h3 class="modal-text">You need to login.</h3>
			</div>
		</transition>
	</div>
</template>

<style scoped>
.alert1 {
	width: 25rem;
	height: 5rem;
	padding: 0.5rem 1rem;
	background-color: rgba(123, 248, 123, 0.859);
	border-radius: 1.5rem;
	position: absolute;
	right: 2rem;
	bottom: 2rem;
}
.alert2 {
	width: 25rem;
	height: 5rem;
	padding: 0.5rem 1rem;
	background-color: rgba(255, 112, 112, 0.859);
	border-radius: 1.5rem;
	position: absolute;
	right: 2rem;
	bottom: 2rem;
}
.modal-text {
	color: rgb(52, 52, 52);
	font-size: 1.8rem;
	font-weight: 600;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.back-arrow {
	width: 7rem;
	position: absolute;
	left: 5%;
	top: 30%;
	transform: translate(0, -50%);
	padding: 1rem 0;
	padding-right: 1rem;
	border-right: rgb(216, 216, 216) 3px solid;
	cursor: pointer;
}

.entity-arrow:active {
	animation: button-pop 0.3s ease-out;
}
.buttons {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.button:active {
	animation: button-pop 0.3s ease-out;
}

.add-to-fav {
	background-color: transparent;
	border: rgb(255, 187, 187) 2px solid !important;
	padding: 0.6rem;
	font-size: 1.8rem;
	margin: 0;
	border-radius: 1rem;
	transition: 0.2s;
}
.add-to-cart {
	margin-left: 2rem !important;
	background-image: linear-gradient(to right, #ff512f 0%, #dd2476 51%, #ff512f 100%);
	margin: 10px;
	padding: 1.5rem 4.5rem;
	text-align: center;
	text-transform: uppercase;
	transition: background-position 0.5s, color 0.5s, text-decoration 0.5s;
	background-size: 200% auto;
	color: white;
	box-shadow: 0 0 20px #eee;
	border-radius: 10px;
	display: block;
}

.image {
	width: 38rem;
	height: 100%;
	margin-right: 3rem;
}
.title {
	margin-bottom: 1.5rem;
	font-size: 3.8rem;
	color: rgb(45, 45, 45);
}
.dollar-sign {
	position: absolute;
	left: 1rem;
	top: 1.7rem;
	font-size: 1.7rem;
	font-weight: 500;
}
.price {
	font-size: 3rem;
	background-color: rgb(245, 245, 255);
	color: rgb(86, 72, 193);
	display: inline-block;
	padding: 1.1rem 1.5rem;
	border-radius: 1rem;
	font-weight: 700;
	margin-bottom: 2rem;
	padding-left: 2.3rem;
	position: relative;
}
.category {
	font-size: 1.8rem;
	margin-bottom: 0.5rem;
	color: rgb(117, 117, 117);
}
.description {
	font-size: 1.7rem;
	margin-bottom: 2.5rem;
	color: #444;
}

.text-block {
	width: 50%;
}
.flex {
	display: flex;
	position: absolute;
	left: 50%;
	top: 55%;
	transform: translate(-50%, -50%);
	justify-content: space-evenly;
	align-items: center;
	width: 70%;
}

@media (hover: hover) {
	.add-to-cart:hover {
		background-position: right center; /* change the direction of the change here */
		color: #fff;
		text-decoration: none;
	}

	.add-to-fav:hover {
		background-color: rgb(255, 187, 187) !important;
	}
}

@media (min-width: 768px) and (orientation: portrait) {
	.flex {
		width: 90% !important;
	}
	.image {
		width: 47rem !important;
		margin-bottom: 5rem !important;
	}
	.category {
		margin-bottom: 1rem !important;
		font-size: 3rem !important;
	}
	.title {
		margin-bottom: 3rem !important;
		font-size: 5rem !important;
	}
	.price {
		margin-bottom: 3rem !important;
	}
	.description {
		margin-bottom: 3rem !important;
		font-size: 2.5rem !important;
	}
	.add-to-cart {
		padding: 1rem 2.3rem !important;
		font-size: 3rem !important;
	}
	.add-to-fav {
		font-size: 2.5rem !important;
	}
	.buttons {
		align-items: center !important;
	}
}

@media (orientation: portrait) {
	.add-to-cart {
		padding: 1rem 1.3rem;
		border-radius: 0.8rem;
	}

	.alert1,
	.alert2 {
		left: 50%;
		bottom: 2rem;
		transform: translateX(-50%);
	}

	.flex {
		flex-direction: column;
		width: 95%;
		gap: 1.5rem;
	}
	.image {
		width: 20rem;
		height: 100%;
		margin-right: 0;
		margin-bottom: 2.5rem;
	}
	.text-block {
		width: 75%;
	}
	.title {
		margin-bottom: 1.5rem;
		font-size: 3rem;
	}
	.price {
		margin-bottom: 1.5rem;
	}
	.category {
		margin-bottom: 0.3rem;
	}
	.description {
		margin-bottom: 2rem;
		font-size: 1.5rem;
	}
}
</style>
