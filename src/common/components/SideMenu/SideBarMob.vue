<template>
	<div class="offcanvas offcanvas-start show bg bg-navbar d-lg-none d-flex " tabindex="-1" id="offcanvasNavbarDark"
		aria-labelledby="offcanvasNavbarDarkLabel" aria-modal="true" role="dialog">
		<div class="offcanvas-header">
			<div class="offcanvas-title" id="offcanvasNavbarDarkLabel">
				<IconSection name="logo" />
			</div>
			<button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
				aria-label="Close"></button>
		</div>
		<div class="offcanvas-body">
			<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
						aria-expanded="false">
						Dropdown
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li>
							<hr class="dropdown-divider">
						</li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</li>
			</ul>
			<form class="d-flex mt-3" role="search">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		</div>
	</div>
</template>
<script>
import IconSection from '@/common/svgs/icons.vue'
export default {
	name: "SideBarMob",
	components: {
		IconSection
	}
}
</script>
<style></style>