<template>
	<div>
		<swiper-container ref="swiperRef" init="false">
			<swiper-slide v-for="(cardName, index) in cardNames" :key="index" class="swiper-slide">
				<slot :name="cardName" />
			</swiper-slide>
		</swiper-container>
		<div v-if="showDirectionControls" class="row justify-content-end mt-3 p-4 d-md-none">
			<div class="col-2 text-end mx-4" @click="slidePrev">
				<font-awesome-icon :icon="['fas', 'circle-chevron-left']" size="2xl" />
			</div>
			<div class="col-2 text-start" @click="slideNext">
				<font-awesome-icon :icon="['fas', 'circle-chevron-right']" size="2xl" />
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper } from '@/config/swiper.js';
export default {
	name: "CarouselV1",
	components: {
	},
	props: {
		cardNames: {
			type: Array,
			required: true
		},
		pagination: {
			type: Object,
			default: () => null
		},
		autoPlayDelay: {
			default: () => null
		},
		showDirectionControls: {
			type: Boolean,
			default: true
		}

	},
	mounted() {
		this.initializeSwiper()
	},
	methods: {
		initializeSwiper() {
			const swiperEl = this.$refs.swiperRef;

			// swiper parameters
			const swiperParams = {
				modules: Swiper,
				slidesPerView: 1.4,
				breakpoints: {
					768: {
						slidesPerView: 3,
					}
				},
				spaceBetween: 20,
			};

			if (this.pagination) {
				swiperParams.pagination = this.pagination
			}
			if (this.autoPlayDelay) {
				swiperParams.autoplay = { delay: this.autoPlayDelay, disableOnInteraction: true }

			}

			Object.assign(swiperEl, swiperParams);

			swiperEl.initialize();
		},
		slideNext() {
			this.$refs.swiperRef.swiper.slideNext()
		},
		slidePrev() {
			this.$refs.swiperRef.swiper.slidePrev()
		}

	}
}
</script>

<style>
.autoplay-progress svg {
	--progress: 0;
	width: 100%;
	height: 100%;
	stroke: var(--swiper-theme-color);
	fill: none;
	stroke-dashoffset: calc(122.5 * (1 - var(--progress)));
	stroke-dasharray: 122.5;
}

.swiper-slide {
	height: auto;
}
</style>