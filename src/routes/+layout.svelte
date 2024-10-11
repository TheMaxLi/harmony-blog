<script>
	import NavLink from '../components/NavLink.svelte';
	import '../output.css';
	import '../input.css';
</script>

<div class="bg-[#0a0a0a] text-white w-full">
	<div class="flex flex-row justify-center w-full">
		<nav
			class="flex justify-between text-lg lg:px-8 px-5 border-b border-b-[#919191] w-full py-7 mb-4"
		>
			<a class="" href="/"> logo here. </a>
			<div class="flex gap-4">
				<NavLink url="/about" label="About" />
				<NavLink url="/blogs" label="Blog" />
				<NavLink url="/team" label="Meet the Team" />
			</div>
		</nav>
	</div>
	<div class="flex flex-row justify-center w-full">
		<div class="lg:mx-8 mx-2 w-full max-w-[80vw] min-h-screen">
			<slot />
		</div>
	</div>
</div>
