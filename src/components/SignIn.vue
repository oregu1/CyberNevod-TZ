<template>
	<div class="modal-sign-in">
		<header class="header">
			<h1>Вход/Регистрация</h1>
		</header>
		<div class="modal-content">
			<form @submit.prevent class="enter-form">
				<span>Введите номер своего телефона</span>
				<div class="form-control">
					<input v-model="userPhone" type="tel" name="phone" class="phone-input" id="phone" autocomplete="off" required>
					<label for="phone">Номер телефона</label>
				</div>
				<span>После нажатия на кнопку вам поступит звонок.
					<br>
					Отвечать на звонок не нужно
				</span>
				<div class="captcha-section">
					<button @click="captchaFetch" class="refresh-captcha">
						<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 6H6L3.34375 8.65625L0.65625 6H2.65625C2.65625 4.54167 3.17708 3.29167 4.21875 2.25C5.28125 1.1875 6.54167 0.65625 8 0.65625C9.04167 0.65625 9.98958 0.9375 10.8438 1.5L9.875 2.46875C9.3125 2.15625 8.6875 2 8 2C6.89583 2 5.94792 2.39583 5.15625 3.1875C4.38542 3.95833 4 4.89583 4 6ZM12.6563 3.34375L15.3438 6H13.3438C13.3438 7.45833 12.8125 8.71875 11.75 9.78125C10.7083 10.8229 9.45833 11.3438 8 11.3438C6.95833 11.3438 6.01042 11.0625 5.15625 10.5L6.125 9.53125C6.6875 9.84375 7.3125 10 8 10C9.10417 10 10.0417 9.61458 10.8125 8.84375C11.6042 8.05208 12 7.10417 12 6H10L12.6563 3.34375Z" fill="black"/>
						</svg>
					</button>
					<div class="captcha-img">
						<img :src="captchaImg" alt="">
					</div>
					<div class="captcha-form-control">
						<input v-model="captchaCode" type="text" name="captcha" id="captchaInput" class="captcha" autocomplete="off" required>
						<label for="capthca">Введите капчо</label>
					</div>
				</div>
				<button @click="toCode" class="call-btn">Позвонить мне</button>
				<div class="confirm-block">
					<input type="checkbox" class="confirm-input" name="confirm" id="confirmInput" required>
					<label for="confirm">Нажимая на кнопку, вы даете согласие на обработку 
						<a href="#">персональных данных</a> и принимаете условия онлайн 
						заказа на изготовление и доставку блюд</label>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

export default {
	name: 'SignIn',
	
	data() {
		return {
			captchaImg: '',
			userPhone: '',
			captchaCode: '',
		}
	},
	methods: {
		captchaFetch() {
			fetch('https://api.sushisell.ru/v2/auth/captcha')
			.then(res => res.json())
			.then(result => {
				let captchaResponse = result.data.image;
				return this.captchaImg = captchaResponse;
				
			})
			.catch(err => console.log(err))
		},
		toCode() {
			let user = {
				phone: this.userPhone,
				code: this.captchaCode
			}

			fetch('https://api.sushisell.ru/v2/auth', {
				method: "POST",
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(user)
			})
	
			if(user.phone !== "" && user.code !== "") {
				this.$router.push('/code')
			} else {
				return
			}
		}
		
	},
	mounted() {
		window.addEventListener('load', this.captchaFetch)
	}
}
</script>


<style lang="scss" scoped>
	.modal-sign-in {
		max-width: 520px;
		width: 100%;
		border-radius: var(--radius);
		background-color: var(--white);
		padding: 48px 58.5px;

		header.header {
			text-align: center;
			h1 {
				color: var(--basic);
				font-family: var(--bold-font) sans-serif;
				font-size: 45px;
				line-height: 60px;
				font-weight: 700;
				letter-spacing: -0.05em;
				text-transform: uppercase;
				word-wrap: break-word;
			}
			margin-bottom: 20px;
		}

		form.enter-form {
			text-align: justify;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			span {
				font-size: 18px;
				text-align: center;

			}
			a {
				color: #c62734;
			}
			button.call-btn {
				font-family: var(--general-font);
				font-weight: 700;
				width: 380px;
				padding: 24px;
				font-size: 26px;
				background: var(--red-btn-color);
				color: var(--white);
				border: 1px solid #c62734;
				border-radius: var(--radius);
				text-align: center;
				text-decoration: none;

				&:hover {
					background: #bd0b1a;
				}
			}
			.form-control {
				position: relative;
				display: flex;
				margin: 20px 0;

				input.phone-input {
					width: 380px;
					height: 58px;
					font-size: 18px;
				

					&:focus, &:valid {
						border: 1px solid var(--green);
						& + label {
							color: var(--green);
							font-size: 14px;
							top: -10px;
							left: 22px;
							padding: 0 3px;
							pointer-events: none;
							background-color: var(--white);
						}
					}
				}

				label {
					pointer-events: none;
					position: absolute;	
					top: 18px;
					left: 18px;
				}
				
			}

			.captcha-section {
				display: flex;
				align-items: center;
				height: 50px;
				margin: 20px 0;

				button.refresh-captcha {
					width: 24px;
					height: 24px;
					background-color: var(--border-color);
					border-radius: 50%;
					border: none;
					outline: none;
					display: flex;
					align-items: center;
					justify-content: center;

					svg {
						width: 14px;
						height: 14px;
						transition: all .3s linear;

						&:hover {
							transform: rotate(360deg);
						}
					}
				}

				.captcha-img {
					width: 107px;
					height: 100%;
					border: none;
					
					img {
						border: none;
					}
				}
			
				.captcha-form-control {
					position: relative;
					input.captcha {
						width: 282px;
						height: 100%;
						font-size: 18px;
						

						&::placeholder {
							color: var(--dark-grey);
						}

						&:focus, &:valid {
							border: 1px solid var(--green);
							& + label {
								color: var(--green);
								font-size: 14px;
								top: -10px;
								left: 22px;
								padding: 0 3px;
								pointer-events: none;
								outline: none;
								background-color: var(--white);
							}
						}
					}
					label {
						pointer-events: none;
						position: absolute;	
						top: 18px;
						left: 18px;
					}
				}
				
			}
			.confirm-block {
				display: flex;
				align-items: flex-start;
				margin-top: 20px;
				position: relative;

				input.confirm-input {
					// appearance: none;
					// -webkit-appearance: none;
					width: 18px;
					height: 18px;
					background-color: var(--white);
					border-radius: 2px;
					border: 1px solid var(--green);
					cursor: pointer;
					position: absolute;
					top: 4px;
					left: 10px;
					border-radius: 2px;
					

					// &::after {
					// 	display: block;
					// 	content: "";
					// 	border: 1px solid var(--green);
					// 	color: var(--white);
					// 	width: 18px;
					// 	height: 18px;
					// 	position: absolute;
					// 	top: 4px;
					// 	left: 10px;
					// 	border-radius: 2px;
					// }

					// &:hover::after {
					// 	background-color: var(--green);
					// }
				}
				label {
					font-size: 14px;
					margin-left: 40px;
				}
			
			}
		}
	}
</style>