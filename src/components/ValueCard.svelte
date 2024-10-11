<script lang="ts">
	export let number: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="max-xl:min-h-[250px] min-h-[350px] w-full p-[34px] bg-[#181716] rounded-[20px] grid grid-rows-[auto_1fr] gap-[10px] justify-items-start max-md:p-[20px] max-md:max-w-full max-sm:p-[15px]"
>
	<div class="w-full grid grid-rows-[auto_auto] gap-[6px]">
		<p
			class="text-[#737373] text-[1.4rem] font-[400] ESRG-TRIAL-font break-words max-md:text-[1.2rem]"
		>
			{number}
		</p>
		<p class="text-white text-[2rem] font-[500] ESRG-TRIAL-font break-words max-md:text-[1.5rem]">
			{title}
		</p>
	</div>
	<p
		class="text-[#dcdcdc] text-[1.4rem] font-[400] sfpro-font break-words max-w-full max-md:text-[1.2rem] max-sm:text-[1rem]"
	>
		{description}
	</p>
</div>
