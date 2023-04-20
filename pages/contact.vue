<template>
	<div style="height: 50vh">
		<div class="contact">
			<h2>This is a contact page</h2>
		</div>
	</div>
</template>

<style scoped>
@media (orientation: portrait) {
	.contact h2 {
		font-size: 1.8rem;
		text-align: center;
	}
	.contact {
		width: 85% !important;
		padding: 0;
	}
}

.contact {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) !important;
	background-color: rgba(0, 85, 255, 0.64);
	padding: 5rem 10rem;
	border-radius: 1rem;
	font-size: 2rem;
}
</style>
