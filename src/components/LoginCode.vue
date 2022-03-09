<template>
	<div class="modal-login-code">
		<header class="header">
			<h1>Вход/Регистрация</h1>
		</header>
		<div class="modal-login-content">
			<form class="login-code-form">
				<span>Введите последние 4 цифры номера
					входящего звонка
				</span>
				<div class="form-control">
					<label for="phone-code">+7 (999) 999</label>
					<input type="tel" name="phone-code" class="phone-code" id="phoneCode" autocomplete="off" placeholder="_ _._ _">
				</div>
				<span class="repeat-call">Позвонить ещё раз через <span class="timer">59 сек</span>.</span>
				<router-link to="/signin" class="return">Вернуться назад</router-link>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LoginCode',
}
</script>

<style lang="scss" scoped>
	.modal-login-code {
		text-align: center;
		max-width: 488px;
		padding: 48px;
		border-radius: var(--radius);
		background-color: var(--white);

		header.header {
			h1 {
				color: var(--basic);
				font-family: var(--bold-font) sans-serif;
				font-size: 45px;
				line-height: 60px;
				font-weight: 700;
				letter-spacing: -0.05em;
				text-transform: uppercase;
			}
		}

		//FORM

		form.login-code-form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.form-control {
				margin: 20px 0;
				label {
					margin-right: 10px;
				}
				input.phone-code {
					width: 87px;
				}
			}
			span {
				font-size: 20px;
				font-family: var(--general-font);
				
				&.repeat-call, .timer {
					font-weight: 700;
					font-size: 16px;
					color: var(--green);
				}
			}

			a.return {
				padding: 24px 99px;
				font-size: 26px;
				font-family: var(--general-font);
				font-weight: 700;
				color: var(--green);
				border: 1px solid var(--green);
				border-radius: var(--radius);
				background-color: transparent;
				margin-top: 20px;
				transition: all .3s linear;
				text-decoration: none;

				&:hover {
					background-color: var(--green);
					color: var(--white);
				}
			}
		}
		
	}
</style>