<template>
	<div class="wrapper">
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'App',
	
}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Sans:wght@400;700&display=swap');

	:root {
		//COLORS
		--white: #fff;
		--basic: #000;
		--paragraphs: #444;
		--green: #009846;
		--border-color: #e5e5e5;
		--dark-grey: #777;
		--red-btn-color: linear-gradient(to bottom, var(--gradient-red-from, #e15959), var(--gradient-red-to, #e96f54));

		//FONTS
		--general-font: 'PT Sans', sans-serif;
		--bold-font: 'Bebas Neue', sans-serif;

		//BORDER-RADIUS
		--radius: 12px;
	}

	//GENERAL STYLES
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: var(--general-font);
		transition: all .3s ease;
	}

	body {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		color: var(--paragraphs);
		background-color: var(--border-color);
	}

	button {
		cursor: pointer;
	}
	
	input {
		border: 1px solid var(--border-color);
		border-radius: var(--radius);
		outline: none;
		padding: 18px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>