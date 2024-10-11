<script lang="ts">
	import { browser } from '$app/environment';
	import type { Author } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let member: Author;
	let isExpanded = false;
	$: description = isExpanded
		? member.description
		: member.description!.length > getCalculation()
			? member.description!.slice(0, getCalculation()) + '...'
			: member.description;

	function getCalculation() {
		if (browser) {
			return (window.innerWidth * window.innerHeight) / 2000;
		}
		return 0;
	}
</script>

<div class="w-full max-w-[523px] mb-[35px]">
	<img
		class="border border-white rounded-[25px] w-full h-auto max-w-[300px] aspect-square object-cover"
		src={member.profileIconSrc}
		alt={member.name}
	/>
	<div class="flex flex-col">
		<div class="flex flex-col">
			<h2 class="text-white text-[42.78px] sfpro-font font-normal">
				{member.name}
			</h2>
			<h3 class="text-[#949494] text-[25.53px] sfpro-font font-normal break-words">
				{member.role}
			</h3>
		</div>
		<p class="text-white text-[20.39px] sfpro-font font-normal break-words w-full mt-[30px]">
			{isExpanded ? member.description : description}
		</p>
		{#if !isExpanded && member.description !== description}
			<button
				on:click={() => (isExpanded = !isExpanded)}
				class="mt-2 flex items-center hover:opacity-75 cursor-pointer"
			>
				<p class="text-[#949494]">
					{isExpanded ? 'Show Less' : 'Show More'}
				</p>
				<div class="pl-1 flex relative bottom-[200px]">
					<Icon class="text-[#949494]" icon="ph-caret-circle-down" />
				</div>
			</button>
		{/if}
	</div>
</div>
