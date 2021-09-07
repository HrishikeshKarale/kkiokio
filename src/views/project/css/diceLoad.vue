<template>
	<div class="diceLoad">
		<div class="dice">
			<div class="face first-face">
				<div class="dot"></div>
			</div>
			<div class="face second-face">
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<div class="face third-face">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<div class="face fourth-face">
				<div class="column">
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
				<div class="column">
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</div>
			<div class="face fifth-face">
				<div class="column">
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
				<div class="column">
					<div class="dot"></div>
				</div>
				<div class="column">
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</div>
			<div class="face sixth-face">
				<div class="column">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
				<div class="column">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</div>
		</div>
		<p>please wait while the content is loading...</p>
	</div>
</template>
<script>
	export default {
		name: "DiceLoad",
		data() {
			return {};
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";

	@animationTime: 5s;
	.diceLoad {
		display: flex;
		flex-direction: column;
		margin: @spaceLg 0;

		& > p {
			align-self: center;
			margin-bottom: 0 !important;
		}

		/******************************
												 * FLEXBOX STYLES
												 ***************************** */
		& > .dice {
			display: flex;
			flex-direction: column;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;

			& > .face {
				display: flex;
				width: 3rem;
				height: 3rem;
				margin: 0 0.7rem;
				padding: 0.5rem;
				border-radius: 5px;
				justify-content: center;
				align-items: center;
				opacity: 0;

				&,
				& > .column {
					& > .dot {
						width: 0.6rem;
						height: 0.6rem;
						margin: 4px;
						background: #f44336;
						border-radius: 50%;
					}
				}
				&.first-face {
					justify-content: center;
					align-items: center;
				}
				&.second-face {
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-evenly;
					& > .dot {
						margin: 0px;
						align-self: flex-start;
						&:last-child {
							align-self: flex-end;
						}
					}
				}
				&.third-face {
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-evenly;
					& > .dot {
						width: 0.7rem;
						height: 0.7rem;
						margin: 0;
						align-self: center;
						&:first-child {
							align-self: flex-start;
						}
						&:last-child {
							align-self: flex-end;
						}
					}
					& > .dot {
						&:nth-child(2) {
							align-self: center;
						}
						&:last-of-type {
							align-self: flex-end;
						}
					}
				}
				&.fourth-face {
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-evenly;
					& > .column {
						display: flex;
						flex-direction: column;
						justify-content: space-evenly;
					}
				}
				&.fifth-face {
					justify-content: space-evenly;
					& > .column {
						display: flex;
						flex-direction: column;
						justify-content: space-evenly;
						&:nth-child(2) {
							justify-content: center;
							& > .dot {
								margin: 0;
							}
						}
					}
				}
				&.sixth-face {
					justify-content: space-evenly;
					& > .column {
						flex-direction: column;
						justify-content: space-evenly;
					}
				}
				&:nth-child(1) {
					border: 2px solid #f44336;
					animation: waves @animationTime linear infinite;
					& > .dot {
						background: #f44336;
					}
				}
				&:nth-child(2) {
					border: 2px solid #e91e63;
					animation: waves @animationTime 0.2s linear infinite;
					& > .dot {
						background: #e91e63;
					}
				}
				&:nth-child(3) {
					border: 2px solid #9c27b0;
					animation: waves @animationTime 0.4s linear infinite;
					& > .dot {
						background: #9c27b0;
					}
				}
				&:nth-child(4) {
					border: 2px solid #673ab7;
					animation: waves @animationTime 0.6s linear infinite;
					& > .dot {
						background: #673ab7;
					}
				}
				&:nth-child(5) {
					border: 2px solid #3f51b5;
					animation: waves @animationTime 0.8s linear infinite;
					& > .dot {
						background: #3f51b5;
					}
				}
				&:nth-child(6) {
					border: 2px solid #2196f3;
					animation: waves @animationTime 1s linear infinite;
					& > .dot {
						background: #2196f3;
					}
				}
			}
		}

		/****************************************************** */
		@-webkit-keyframes waves {
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			4% {
				transform: translateY(-25px);
				opacity: 1;
			}
			8% {
				transform: translateY(0);
				opacity: 1;
			}
			70% {
				opacity: 0;
			}
		}
		@keyframes waves {
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			4% {
				transform: translateY(-25px);
				opacity: 1;
			}
			8% {
				transform: translateY(0);
				opacity: 1;
			}
			70% {
				opacity: 0;
			}
		}
	}
</style>
