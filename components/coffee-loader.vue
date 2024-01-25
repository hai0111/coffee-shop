<template>
	<div class="wrapper">
		<div class="loader">
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div class="cup"><span></span></div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@keyframes wave {
	0% {
		opacity: 0;
		transform: translateY(15px);
	}
	50% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-15px);
	}
}
.wrapper {
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #bf7c2c;
	z-index: 999;
	.loader {
		ul {
			margin: 0 0 10px 0;
			padding: 0;
			list-style: none;
			width: 60px;
			text-align: center;
			animation: wave 2.5s infinite linear;
			animation-fill-mode: forwards;
		}
		li {
			display: inline-block;
			background: #faf1d9;
			height: 30px;
			width: 9px;
			border-radius: 0 100%;
			transform: rotate(12deg);
		}
		span {
			background: #f2e3b4;
			width: 13px;
			height: 20px;
			position: absolute;
			right: -13px;
			top: 10px;
			border-radius: 0 50% 50% 0;
			&:before {
				content: '';
				position: absolute;
				top: 4px;
				left: 0;
				background: #bf7c2c;
				width: 10px;
				height: 12px;
				border-radius: 0 50% 50% 0;
			}
			&:after {
				content: '';
				position: absolute;
				top: 40px;
				left: -50px;
				background: #f2e3b4;
				width: 40px;
				height: 8px;
				border-radius: 50%;
			}
		}
	}
	.cup {
		background: #f2e3b4;
		width: 60px;
		height: 54px;
		border-radius: 0 0 50% 50%;
		position: relative;
		&:before {
			content: '';
			position: absolute;
			width: 66px;
			height: 20px;
			border-radius: 50%;
			background: inherit;
			left: -3px;
			top: -10px;
		}
		&:after {
			content: '';
			position: absolute;
			width: 56px;
			height: 12px;
			border-radius: 50%;
			background: #3a2f28;
			left: 2px;
			top: -6px;
		}
	}
}
</style>
