<template>
	<div class="">
		<div class="row border-1 border-top p-1 border-warning"></div>
		<div class="row px-3 my-3 justify-content-center gap-4 gap-sm-0">
			<div
				class="col-xl-5 col-sm-3 col-12 d-flex flex-column flex-xl-row align-items-center gap-4 order-3 order-xl-1">
				<h6 class="mb-0 text-primary order-3 order-xl-1">@2024 VBRAE</h6>
				<div class="d-flex flex-sm-column flex-xl-row gap-2 order-2">
					<h6 class="mb-0 text-success">Privacy</h6>
					<h6 class="mb-0 text-success">Terms</h6>
					<h6 class="mb-0 text-success">Refund</h6>
				</div>
				<div class="d-flex align-items-center gap-2 order-1 order-xl-3">
					<IconSection name="f-star" />
					<h6 class="mb-0 text-success">4.3</h6>
				</div>
			</div>
			<div class="col-xl-2 col-sm-4 col-12 d-flex align-items-center gap-4 order-2 justify-content-center">
				<IconSection name="visa" />
				<IconSection name="mastercard" />
				<IconSection name="maestro" />
				<IconSection name="americanexpress" />
				<IconSection name="discover" />
			</div>
			<div
				class="col-xl-5 col-sm-5 col-12 d-flex flex-column align-items-center flex-xl-row justify-content-center justify-content-xl-end gap-3 order-xl-3 order-1">
				<div class="gap-4 d-flex align-items-center order-2 order-xl-1">
					<IconSection name="facebook" />
					<IconSection name="twitter" />
					<IconSection name="linkedin" />
					<IconSection name="pinterest" />
				</div>

				<div class="gap-3 d-flex justify-content-center align-items-start order-1 order-xl-2">
					<div class="dropup">
						<button class="rounded-3 btn btn-secondary border-warning text-success"
							data-bs-toggle="dropdown" aria-expanded="false">
							<IconSection name="web" />
							English (US)
						</button>
						<div class="col-2 border border-warning text-success rounded-5 bg bg-warning">
							<DropDown :languages="languages" />
						</div>
					</div>

					<button class="rounded-3 btn btn-secondary border-warning text-success">
						<IconSection name="dollar" />
						$ USD
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import IconSection from '@/common/svgs/icons.vue'
import DropDown from '@/common/components/DropDown.vue';
export default {
	name: 'FooterPage',
	components: {
		IconSection,
		DropDown
	},
	data() {
		return {
			isDropdownExpanded: false,
			languages: ['ENGLISH (US)', 'Español', 'Français', 'Latviešu', 'Polski']
		};
	},
	methods: {
	}
}
</script>
<style></style>