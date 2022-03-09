<template>
	<div class="enter-section">
		<div class="greeting">
			<router-link to="/signin" class="enter-btn btn">Войти</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GreeTing'
}
</script>

<style lang="scss" scoped>
	.enter-section {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1274px;
		height: 426px;
		
		transition: all .3s linear;
		background-color: var(--white);

		a {
			text-decoration: none;
			display: block;
			text-align: center;
			font-family: var(--general-font);
			font-weight: 700;
			width: 380px;
			padding: 24px;
			font-size: 26px;
			background: var(--red-btn-color);
			color: var(--white);
			border: 1px solid #c62734;
			border-radius: var(--radius);

			&:hover {
				background: #bd0b1a;
			}
		}
	}
</style>