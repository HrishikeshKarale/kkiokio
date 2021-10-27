<template>
	<div class="rsvp">
		<div class="header">
			<vue-img :src="dRSVPImage" alt="RSVP Landing Image" />
			<div>
				<b>RSVP App</b>
			</div>
			<div class="invite">
				<input
					v-model="dPerson"
					type="text"
					placeholder="Enter name here"
					@keypress.enter.prevent="addPerson"
				/>
				<vue-button
					tag="inviteButton"
					text="INVITE"
					icon="fas fa-user-plus"
					category="large"
					:ctx="addPerson"
				/>
			</div>
		</div>
		<div class="body">
			<div class="details">
				<div>
					<h2>Invitees</h2>
				</div>
				<div>
					<div><b>Attending: </b>{{ attending }}</div>
					<div><b>Unconfirmed: </b>{{ unconfirmed }}</div>
					<div><b>total: </b>{{ total }}</div>
				</div>
			</div>
			<h4 v-if="dPerson" v-text="dPerson" />
			<div v-if="dInvited || dPerson" class="invited">
				<div v-for="(invited, index) in dInvited" :key="index" class="card">
					<h4>
						<span class="fas fa-user" />
						{{ invited.name }}
					</h4>
					<checkbox-input
						:id="invited.name"
						:label="invited.status ? 'Confirmed' : 'Confirm'"
						:name="invited.name"
						:value="invited.status"
						:alert="alertObject"
						@value="(val) => (invited.status = val)"
						@alerts="alerts"
					/>
					<vue-button
						tag="deleteButton"
						category="small"
						text="Uninvite"
						icon="fas fa-user-minus"
						:ctx="updateInvited.bind(this, invited.name, true)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import vueButton from "@/components/vueButton.vue";
	import checkboxInput from "@/components/checkboxInput.vue";
	import vueImg from "@/components/vueImg.vue";
	import { toggle } from "@/typeScript/toggle";
	import { alerts } from "../../../typeScript/common/alerts";
	import { loading } from "@/typeScript/common/loading";

	export default {
		name: "Rsvp",
		components: {
			checkboxInput,
			vueButton,
			vueImg,
		},
		mixins: [toggle, alerts, loading],
		data() {
			const dPerson = null;
			const dInvited = [
				{
					name: "John Doe",
					status: true,
				},
				{
					name: "Jim CantSwim",
					status: false,
				},
			];
			const dEdit = null;
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const dRSVPImage = require("@/assets/webApp/RSVP.svg");
			return {
				dPerson,
				dInvited,
				dRSVPImage,
				dEdit,
			};
		},
		computed: {
			attending: function () {
				const invited = this.dInvited;
				let counter = 0;
				if (invited) {
					for (let i = 0; i < invited.length; i++) {
						if (invited[i].status) {
							counter++;
						}
					}
				}
				return counter;
			},
			unconfirmed: function () {
				const invited = this.dInvited;
				if (invited) {
					return invited.length - this.attending;
				}
				return 0;
			},
			total: function () {
				const invited = this.dInvited;
				if (invited) {
					return invited.length;
				}
				return 0;
			},
		},

		methods: {
			updateInvited: function (pName, remove) {
				// console.log(pName, remove, this.dEdit);
				if (pName) {
					const invited = this.dInvited;
					if (invited) {
						for (let i = 0; i < invited.length; i++) {
							if (pName == invited[i].name) {
								if (remove) {
									invited.splice(i, 1);
								} else {
									if (this.dEdit) {
										if (this.edit.includes(i)) {
											return;
										} else {
											this.dEdit.push(i);
										}
									} else {
										this.dEdit = new Array(i);
									}
								}
								return;
							}
						}
					}
				}
			},
			addPerson: function () {
				const pName = this.dPerson;
				let alreadyExist = false;
				if (pName) {
					const invited = this.dInvited;
					this.dPerson = null;
					let person = { name: pName, status: false };
					if (invited) {
						for (let i = 0; i < invited.length; i++) {
							if (pName == invited[i].name) {
								alreadyExist = true;
								break;
							} else {
								this.dInvited.push(person);
								break;
							}
						}
					} else {
						this.dInvited = new Array(person);
					}
					person = null;
					if (alreadyExist) {
						alert("person already exist in invited list");
						alreadyExist = false;
					}
				}
			},
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "../../../Less/customVariables.less";
	@import (reference) "../../../Less/customMixins.less";
	.rsvp {
		width: 72vw;
		& > div {
			&.body {
				display: flex;
				flex-direction: column;
				min-height: 320px;
				& > div {
					display: flex;
					flex-direction: row;
					margin: @spaceMd @spaceLg;
					&.invited {
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						//individual invited cards
						& > .card {
							display: flex;
							flex-direction: column;
							margin: @spaceMd;
							padding: @spaceMd @spaceLg;
							border-radius: @borderRadius;
							.boxShadow(@one, @accentColor);
							& > button {
								margin-left: auto;
							}
						}
					}

					&.details {
						justify-content: space-between;
						& > div {
							display: flex;
							flex-direction: row;
							justify-content: space-around;
							text-align: right;
							&:last-child {
								flex-direction: column;
							}
						}
					}
				}
			}
			&.header {
				position: relative;
				& > .vueImg {
					margin-top: @spaceXl;
				}
				& > div {
					&.invite {
						display: flex;
						position: absolute;
						left: 25%;
						bottom: -16px;
						background-color: @backgroundColor;
						width: fit-content;
						border-radius: @borderRadius;
						height: 64px;
						.boxShadow(@one);
						& > input {
							background-color: @backgroundColor;
							width: 400px;
							height: 100%;
							border: none;
							padding: @spaceLg;
							&:focus,
							&:focus-within {
								border: none;
								outline: none;
							}
						}
						& > button {
							height: 100%;
						}
					}
					&:not(.invite) {
						position: absolute;
						left: 0;
						right: 0;
						top: 50%;
						text-align: center;
						.textShadow(@five);
						& > b {
							padding: @spaceLg;
							border-radius: 2 * @borderRadiusLg;
							opacity: 0.8;
							background-color: #333333;
							font-size: @fontSize * 4;
							color: @white;
						}
					}
				}
			}
		}
	}
</style>
