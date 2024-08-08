<template>
	<div class="d-flex">
		<SideBar class="col-lg-2 " style="height: 70vh;" />
		<nav class="navbar navbar-expand-lg py-lg py-0 w-100 h-25">
			<div class="container-xl px-0 justify-content-end">
				<div class="col-12 d-flex d-lg-none p-3 align-items-center " style="background-color: #1B2435;">
					<div class="col-8 d-flex align-items-center">
						<div class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark"
							aria-controls="offcanvasNavbarDark">
							<IconSection name="burger" />
						</div>
						<IconSection name="logo" class=" ps-2" />
					</div>
					<div class="col d-flex gap-3 justify-content-end">
						<IconSection name="search" />
						<IconSection name="user-mob" />
						<IconSection name="cart" style="color: #a5aecc;" />
					</div>

				</div>
				<SideBarMob />
				<div class="d-flex col-lg-12 gap-3 justify-content-end">
					<form class="col-xl-8 col-lg-7 rounded-3 border border-warning my-4 d-lg-block d-none"
						style="background-color: #1B2435;">
						<div class="d-flex align-items-center gap-3 py-3 px-2">
							<IconSection class="" name="category" />
							<h6 class="mb-0 text-success">View All Games</h6>
							<IconSection class="" name="arrow" />
							<IconSection name="divider" class="" />
							<input class="col shadow-none border-0 text-success" style="background-color: #1B2435;"
								type="search" placeholder="Find your games..." aria-label="Search">
						</div>
					</form>
					<button class="btn btn-outline-warning rounded-3 text-white m-4 p-3 d-lg-block d-none"
						style="background-image: linear-gradient(#1095ED, #08568A);" type="submit">Sell
						Now</button>
					<button class="border border-warning rounded-3 my-4 p-3 d-lg-block d-none"
						style="background-color: #1B2435;">
						<IconSection name="user" class="mx-1" />
						<IconSection name="burger" />
					</button>
					<button
						class="col-1 d-lg-flex border border-warning rounded-3 mx-2 my-4 py-3 d-none justify-content-center"
						style="background-color: #1B2435;">
						<IconSection name="cart" class="me-2 " />
						<h6 class="text-success">$0.00</h6>
					</button>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
import IconSection from '@/common/svgs/icons.vue';
import SideBar from './SideMenu/SideBarcollapsed.vue';
import SideBarMob from './SideMenu/SideBarMob.vue';
export default {
	name: 'NavBar',
	components: {
		IconSection,
		SideBar,
		SideBarMob
	}
}
</script>
<style>
::placeholder {
	color: #A5AECC;
}
</style>