<template>
	<!-- <div id="sidebarCollapsed" class="d-lg-flex flex-column flex-shrink-0 bg-light d-none" style="width: 4.5rem;">
		<a href="/" class="d-flex p-3 link-dark text-decoration-none navbar-toggler" type="button"
			data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
			aria-expanded="false" aria-label="Toggle navigation">
			<h3 v-if="SideBarExpanded">Bootstrap</h3>
			<svg v-else class="bi me-2" width="40" height="32">
				<use xlink:href="#bootstrap"></use>
			</svg>

		</a>
		<ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
			<li class="nav-item">
				<a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title=""
					data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
					<svg class="bi" width="24" height="24" role="img" aria-label="Home">
						<use xlink:href="#home"></use>
					</svg>
				</a>
			</li>
			<li>
				<a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip"
					data-bs-placement="right" data-bs-original-title="Dashboard">
					<svg class="bi" width="24" height="24" role="img" aria-label="Dashboard">
						<use xlink:href="#speedometer2"></use>
					</svg>
				</a>
			</li>
			<li>
				<a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip"
					data-bs-placement="right" data-bs-original-title="Orders">
					<svg class="bi" width="24" height="24" role="img" aria-label="Orders">
						<use xlink:href="#table"></use>
					</svg>
				</a>
			</li>
			<li>
				<a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip"
					data-bs-placement="right" data-bs-original-title="Products">
					<svg class="bi" width="24" height="24" role="img" aria-label="Products">
						<use xlink:href="#grid"></use>
					</svg>
				</a>
			</li>
			<li>
				<a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip"
					data-bs-placement="right" data-bs-original-title="Customers">
					<svg class="bi" width="24" height="24" role="img" aria-label="Customers">
						<use xlink:href="#people-circle"></use>
					</svg>
				</a>
			</li>
		</ul>
		<div class="dropdown border-top">
			<a href="#"
				class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
				id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
				<img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
			</a>
			<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
				<li><a class="dropdown-item" href="#">New project...</a></li>
				<li><a class="dropdown-item" href="#">Settings</a></li>
				<li><a class="dropdown-item" href="#">Profile</a></li>
				<li>
					<hr class="dropdown-divider">
				</li>
				<li><a class="dropdown-item" href="#">Sign out</a></li>
			</ul>
		</div>
	</div> -->
	<div>
		<div class="d-lg-flex d-none flex-column flex-shrink-0 text-white bg-dark"
			:style="{ width: SideBarExpanded ? '250px' : '50%' }" :class="{ 'expanded': SideBarExpanded }">
			<div class="d-flex">
				<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
					<h3 v-if="SideBarExpanded" class="overflow-hidden transition-all">VBRAE</h3>
					<svg v-else class="bi me-2" width="40" height="32">
						<!-- <use xlink:href="#bootstrap"></use> -->
					</svg>
				</a>
				<IconSection name="sidearrow" class="justify-content-end txt-nowrap" @click="toggleSidebar" />
			</div>

			<hr>
			<ul class="nav nav-pills flex-column mb-auto">
				<li class="nav-item">
					<a href="#" class="nav-link active" aria-current="page">
						<svg class="bi me-2" width="16" height="16">
							<use xlink:href="#home"></use>
						</svg>
						Home
					</a>
				</li>
				<li>
					<a href="#" class="nav-link text-white">
						<svg class="bi me-2" width="16" height="16">
							<use xlink:href="#speedometer2"></use>
						</svg>
						Dashboard
					</a>
				</li>
				<li>
					<a href="#" class="nav-link text-white">
						<svg class="bi me-2" width="16" height="16">
							<use xlink:href="#table"></use>
						</svg>
						Orders
					</a>
				</li>
				<li>
					<a href="#" class="nav-link text-white">
						<svg class="bi me-2" width="16" height="16">
							<use xlink:href="#grid"></use>
						</svg>
						Products
					</a>
				</li>
				<li>
					<a href="#" class="nav-link text-white">
						<svg class="bi me-2" width="16" height="16">
							<use xlink:href="#people-circle"></use>
						</svg>
						Customers
					</a>
				</li>
			</ul>
			<hr>
			<div class="dropdown">
				<a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
					id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
					<strong>mdo</strong>
				</a>
				<ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
					<li><a class="dropdown-item" href="#">New project...</a></li>
					<li><a class="dropdown-item" href="#">Settings</a></li>
					<li><a class="dropdown-item" href="#">Profile</a></li>
					<li>
						<hr class="dropdown-divider">
					</li>
					<li><a class="dropdown-item" href="#">Sign out</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import IconSection from '@/common/svgs/icons.vue'
export default {
	name: "SideBar",
	components: {
		IconSection
	},
	data() {
		return {
			SideBarExpanded: false
		}
	},
	methods: {
		toggleSidebar() {
			this.SideBarExpanded = !this.SideBarExpanded
		}
	}
}
</script>
<style>
.expanded {
	width: 20%;
}

.collapsed {
	width: 0%;
}
</style>