<template>
	<div>
		<div class="grid">
			<ProductCard />
		</div>
		<LoadingSpinner />
	</div>
</template>

<style scoped>
.grid {
	display: grid;
	grid-row-gap: 4rem;
	grid-column-gap: 2.5rem;
	width: 70%;
	justify-content: center;
	justify-items: center;
	align-items: center;
	margin: 10rem auto;
	grid-template-columns: repeat(auto-fit, minmax(14rem, 28rem));
}

@media (orientation: portrait) {
	.grid {
		margin-top: 18rem;
		width: 100%;
		grid-column-gap: 0;
		grid-row-gap: 2.5rem;
		grid-template-columns: repeat(auto-fit, minmax(6rem, 20rem));
	}
}
</style>
