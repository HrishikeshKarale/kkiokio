//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
<template>
	<div ref="linkFollower" class="linkFollower">
		<p>
			Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipisicing elit.
			Est <a href="">explicabo</a> unde natus necessitatibus esse obcaecati
			distinctio, aut itaque, qui vitae!
		</p>
		<p>
			Aspernatur sapiente quae sint <a href="">soluta</a> modi, atque
			praesentium laborum pariatur earum <a href="">quaerat</a> cupiditate
			consequuntur facilis ullam dignissimos, aperiam quam veniam.
		</p>
		<p>
			Cum ipsam quod, incidunt sit ex <a href="">tempore</a> placeat maxime
			<a href="">corrupti</a> possimus <a href="">veritatis</a> ipsum fugit
			recusandae est doloremque? Hic, <a href="">quibusdam</a>, nulla.
		</p>
		<p>
			Esse quibusdam, ad, ducimus cupiditate <a href="">nulla</a>, quae magni
			odit <a href="">totam</a> ut consequatur eveniet sunt quam provident
			sapiente dicta neque quod.
		</p>
		<p>
			Aliquam <a href="">dicta</a> sequi culpa fugiat
			<a href="">consequuntur</a> pariatur optio ad minima, maxime
			<a href="">odio</a>, distinctio magni impedit tempore enim repellendus
			<a href="">repudiandae</a> quas!
		</p>
		<span ref="highlight" class="highlight" />
	</div>
</template>
<script>
	import { loading } from "@/typeScript/common/loading";
	export default {
		name: "LinkFollower",
		mixins: [loading],
		data() {
			let linksFollowed;
			let highlight;
			const buffer = 4;
			return {
				linksFollowed,
				highlight,
				buffer,
			};
		},

		mounted() {
			const triggers = this.$refs.linkFollower;
			this.linksFollowed = Array.from(triggers.querySelectorAll("a"));
			this.highlight = this.$refs.highlight;
			this.linksFollowed.forEach((link) => {
				link.addEventListener("mouseenter", this.highlightLink, {
					capture: false, // top to bottom bubbling/propogation
					once: false, //should work only once
				});
			});
		},
		methods: {
			highlightLink: function (e) {
				const linkCoords = e.target.getBoundingClientRect();
				const coords = {
					width: Math.round(linkCoords.width) + this.buffer,
					height: Math.round(linkCoords.height) + this.buffer,
					top: Math.round(linkCoords.top + window.scrollY) - this.buffer / 2,
					left: Math.round(linkCoords.left + window.scrollX) - this.buffer / 2,
				};
				this.highlight.style.width = `${coords.width}px`;
				this.highlight.style.height = `${coords.height}px`;
				this.highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
				e.stopPropogation(); //stop event bubbling
			}, //highlightLink
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";
	.linkFollower {
		display: flex;
		flex-direction: column;
		font-family: "helvetica neue";
		font-weight: 200;
		font-size: 20px;
		& > p {
			z-index: @bodyZ + 5;
		}
	}
	.highlight {
		transition: @transition;
		border-bottom: 2px solid #ffc600;
		position: absolute;
		top: 0;
		background: #ffc600;
		// opacity: 0.5;
		left: 0;
		z-index: @bodyZ + 5;
		border-radius: @borderRadius;
		display: block;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
</style>
