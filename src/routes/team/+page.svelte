<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import TeamMemberCard from '../../components/TeamMemberCard.svelte';
	import teamData from '../../db/teamData';
	import teamImage from '$lib/assets/images/teamImage.png';
	import teamImage2 from '$lib/assets/images/teamImage2.jpg';
	import teamImage3 from '$lib/assets/images/teamImage3.jpg';
	import { browser } from '$app/environment';
	import { fade, slide } from 'svelte/transition';

	const teamImages = [teamImage, teamImage2, teamImage3];

	let carouselIndex = 0;
	let animations = false;

	function nextImage() {
		carouselIndex = (carouselIndex + 1) % teamImages.length;
		animations = true;
	}

	function prevImage() {
		carouselIndex = (carouselIndex - 1 + teamImages.length) % teamImages.length;
		animations = true;
	}

	let interval: NodeJS.Timeout;

	function startAutoplay() {
		interval = setInterval(nextImage, 3000); // Change every 3 seconds
	}

	function stopAutoplay() {
		clearInterval(interval);
	}

	onMount(() => {
		startAutoplay();
		return stopAutoplay; // Clean up on component destroy
	});
</script>

<div class="flex flex-col items-center px-[20px] visible">
	<div class="flex flex-col items-center">
		<h1
			class="text-white text-[123.20px] max-md:text-6xl ESRG-TRIAL-font font-normal mb-[50px] text-center"
		>
			Our Team!
		</h1>

		<div class="overflow-hidden relative w-full aspect-[1.25] rounded-[25px] bg-[#181716]">
			{#each teamImages as src, index}
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class={`w-full h-full absolute object-cover transition-all duration-1000 ${animations ? 'fade-in' : 'fade-out'}`}
					{src}
					alt="Team Group Photo"
					in:slide={{ duration: 500 }}
					out:slide={{ duration: 500 }}
					style="transform: translateX(${-(carouselIndex - index) * 100}%);"
				/>
			{/each}
			<div class="absolute w-full flex flex-row gap-1.5 items-center justify-center bottom-2">
				{#each teamImages as _, index}
					<div
						class={`rounded-full w-1.5 aspect-square bg-white ${index === carouselIndex ? 'opacity-100' : 'opacity-60'}`}
					/>
				{/each}
			</div>

			<!-- Navigation Buttons -->
			<button
				class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
				on:click={prevImage}
			>
				&lt;
			</button>
			<button
				class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
				on:click={nextImage}
			>
				&gt;
			</button>
		</div>

		<p class="text-white text-[26px] sfpro-font font-normal mt-[35px] mb-[134px] text-center">
			This team wins!
		</p>

		<div class="grid grid-cols-2 gap-[65px] justify-center max-md:grid-cols-1 mt-[120px]">
			{#each teamData as member}
				<TeamMemberCard {member} />
			{/each}
		</div>
	</div>
</div>

<style>
	.fade-in {
		opacity: 1;
		transition: opacity 0.5s ease-in;
	}
	.fade-out {
		opacity: 0;
		transition: opacity 0.5s ease-out;
	}
</style>
