<script setup>
//category filtering ui animation handler function
function clickedCategory(category) {
	useClickedStore().category = useClickedStore().category == category ? '' : category;
}

//specific category filtering ui animation handler function
function clickedSpecificCategory(category) {
	useClickedStore().specificCategory =
		useClickedStore().specificCategory == category ? '' : category;
}

//handle the filtering
function handleFilter(products, category) {
	//filter items
	useIsStore().items =
		useClickedStore().category !== category
			? useProductStore().items.filter((e) => products.includes(e.type))
			: useIsStore().itemsSave1;

	//category filtering ui animation handling
	clickedCategory(category);
}

//handle the specific filtering
function handleSpecificFilter(products, product) {
	//filter items
	useIsStore().items =
		useClickedStore().specificCategory !== product
			? useProductStore().items.filter((e) => product.includes(e.type))
			: useProductStore().items.filter((e) => products.includes(e.type));

	//category filtering ui animation handling
	clickedSpecificCategory(product);
}
</script>

<template>
	<div
		data-aos="zoom-in"
		data-aos-duration="500"
		data-aos-easing="in-out-sine"
		class="categories"
	>
		<div class="cat-flex">
			<img
				class="filter"
				:class="{
					'get-bigger': useClickedStore().category == `Tech`
				}"
				@click="
					handleFilter(
						['Desktop', 'Television', 'Notebook', 'OEM', 'Pc Accessory'],
						`Tech`
					)
				"
				src="@/assets/images/cat1.webp"
				alt=""
			/>
			<transition name="my-transition">
				<div class="absText" v-show="useClickedStore().category == `Tech`">
					<h2 class="spec-head">Electronic</h2>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Television`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								['Desktop', 'Television', 'Notebook', 'OEM', 'Pc Accessory'],
								`Television`
							)
						"
					>
						TV
					</p>
					<p
						:class="{ 'get-red': useClickedStore().specificCategory == `Desktop` }"
						class="specs"
						@click="
							handleSpecificFilter(
								['Desktop', 'Television', 'Notebook', 'OEM', 'Pc Accessory'],
								`Desktop`
							)
						"
					>
						Desktop
					</p>
					<p
						:class="{ 'get-red': useClickedStore().specificCategory == `Notebook` }"
						class="specs"
						@click="
							handleSpecificFilter(
								['Desktop', 'Television', 'Notebook', 'OEM', 'Pc Accessory'],
								`Notebook`
							)
						"
					>
						Notebook
					</p>
					<p
						:class="{ 'get-red': useClickedStore().specificCategory == `OEM` }"
						class="specs"
						@click="
							handleSpecificFilter(
								['Desktop', 'Television', 'Notebook', 'OEM', 'Pc Accessory'],
								`OEM`
							)
						"
					>
						OEM
					</p>
				</div>
			</transition>
		</div>
		<div class="cat-flex">
			<img
				class="filter"
				:class="{ 'get-bigger': useClickedStore().category == `Men's` }"
				@click="handleFilter([`Men's Hoodie`, `Men's T-shirt`, `Men's Hat`], `Men's`)"
				src="@/assets/images/cat2.webp"
				alt=""
			/>
			<transition name="my-transition">
				<div class="absText" v-show="useClickedStore().category == `Men's`">
					<h2 class="spec-head">Men's</h2>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Men's T-shirt`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								[`Men's Hoodie`, `Men's T-shirt`, `Men's Hat`],
								`Men's T-shirt`
							)
						"
					>
						T-shirt
					</p>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Men's Hoodie`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								[`Men's Hoodie`, `Men's T-shirt`, `Men's Hat`],
								`Men's Hoodie`
							)
						"
					>
						Hoodie
					</p>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Men's Hat`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								[`Men's Hoodie`, `Men's T-shirt`, `Men's Hat`],
								`Men's Hat`
							)
						"
					>
						Hat
					</p>
				</div></transition
			>
		</div>
		<div class="cat-flex">
			<img
				class="filter"
				:class="{ 'get-bigger': useClickedStore().category == `Women's` }"
				@click="
					handleFilter(
						[`Women's Dress`, `Women's T-shirt`, `Women's Accessory`],
						`Women's`
					)
				"
				src="@/assets/images/cat3.webp"
				alt=""
			/>
			<transition name="my-transition">
				<div class="absText" v-show="useClickedStore().category == `Women's`">
					<h2 class="spec-head">Women's</h2>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Women's T-shirt`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								[`Women's Dress`, `Women's T-shirt`, `Women's Accessory`],
								`Women's T-shirt`
							)
						"
					>
						T-shirt
					</p>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Women's Dress`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								[`Women's Dress`, `Women's T-shirt`, `Women's Accessory`],
								`Women's Dress`
							)
						"
					>
						Dress
					</p>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Women's Accessory`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								[`Women's Dress`, `Women's T-shirt`, `Women's Accessory`],
								`Women's Accessory`
							)
						"
					>
						Accessory
					</p>
				</div></transition
			>
		</div>
		<div class="cat-flex">
			<img
				class="filter"
				:class="{ 'get-bigger': useClickedStore().category == `General` }"
				@click="handleFilter([`Bag`, `Shoes`], `General`)"
				src="@/assets/images/cat4.webp"
				alt=""
			/><transition name="my-transition">
				<div class="absText" v-show="useClickedStore().category == `General`">
					<h2 class="spec-head">General</h2>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Shoes`
						}"
						class="specs"
						@click="handleSpecificFilter([`Shoes`, `Bag`], `Shoes`)"
					>
						Shoes
					</p>
					<p
						:class="{ 'get-red': useClickedStore().specificCategory == `Bag` }"
						class="specs"
						@click="handleSpecificFilter([`Shoes`, `Bag`], `Bag`)"
					>
						Bag
					</p>
				</div></transition
			>
		</div>
		<div class="cat-flex">
			<img
				class="filter"
				:class="{ 'get-bigger': useClickedStore().category == `Stuff` }"
				@click="handleFilter(['Alcohol', 'Trading Card Game', 'Gaming Chair'], `Stuff`)"
				src="@/assets/images/cat5.webp"
				alt=""
			/><transition name="my-transition">
				<div class="absText" v-show="useClickedStore().category == `Stuff`">
					<h2 class="spec-head">Stuff</h2>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Gaming Chair`
						}"
						class="specs gaming-ch"
						@click="
							handleSpecificFilter(
								['Alcohol', 'Trading Card Game', 'Gaming Chair'],
								`Gaming Chair`
							)
						"
					>
						Gaming Ch.
					</p>
					<p
						:class="{
							'get-red': useClickedStore().specificCategory == `Trading Card Game`
						}"
						class="specs"
						@click="
							handleSpecificFilter(
								['Alcohol', 'Trading Card Game', 'Gaming Chair'],
								`Trading Card Game`
							)
						"
					>
						TCG
					</p>
					<p
						:class="{ 'get-red': useClickedStore().specificCategory == `Alcohol` }"
						class="specs"
						@click="
							handleSpecificFilter(
								['Alcohol', 'Trading Card Game', 'Gaming Chair'],
								`Alcohol`
							)
						"
					>
						Alcohol
					</p>
				</div></transition
			>
		</div>
		<h2 class="listed-info">{{ useIsStore().items.length }} items listed.</h2>
	</div>
</template>

<style scoped>
.absText {
	position: absolute;
	left: 70%;
}
.spec-head {
	color: rgb(108, 108, 108);
	font-size: 1.9rem;
	margin-bottom: 0.5rem;
	border-bottom: 1px solid rgb(179, 179, 179);
}
.specs {
	transition: 0.3s;
}
.gaming-ch {
	width: 150%;
}
.listed-info {
	position: absolute;
	bottom: -2rem;
	left: 1rem;
}
.get-bigger {
	padding: 3.7rem 0;
	border: rgb(238, 116, 116) 2px solid !important;
}
.get-red {
	color: rgb(235, 93, 93);
}
.cat-flex {
	display: flex;
	align-items: center;
	width: 10rem;
}
.cat-flex div {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
.cat-flex p {
	font-size: 1.4rem;
	margin-bottom: 0.2rem;
	font-weight: 600;
	text-align: start;
}
.filter {
	margin-right: 1rem;
}
.categories {
	display: flex;
	flex-direction: column;
	z-index: 9999;
	gap: 1rem;
	align-items: center;
	position: fixed;
	left: 2.5%;
	top: 18rem;
	padding: 2rem 1rem;
}

.categories img {
	width: 6rem;
	border: rgb(186, 186, 186) 2px solid;
	transition: transform 0.3s, border 0.6s, padding 0.6s;
}

@media (orientation: portrait) {
	.cat-flex {
		position: relative;
	}
	.absText {
		left: 50%;
		transform: translateX(-50%);
		top: 6.5rem;
	}
	.get-bigger {
		padding: 0 !important;
	}
	.listed-info {
		display: none;
	}
	.price-flex {
		width: 85% !important;
	}
	.categories {
		flex-direction: row !important;
		position: relative;
		top: 6.5rem !important;
		left: 50% !important;
		transform: translateX(-50%) !important;
		padding: 1rem 3rem !important;
		justify-content: center;
	}
	.categories img {
		width: 6rem !important;
		margin: 0 !important;
	}
	.cat-flex {
		flex-direction: column;
	}
}

@media (hover: hover) {
	.specs:hover {
		color: rgb(235, 93, 93);
	}
	.categories img:hover {
		border: rgb(238, 116, 116) 2px solid;
		transform: translateY(-0.35rem);
	}
}
</style>
