<script>
  import { urlFor } from "$lib/index.js";

  export let specials;
</script>

<div
  class="min-h-screen w-full h-auto flex flex-col justify-start items-center"
>
  <p class="text-4xl font-bold">
    the <span class="text-green-500 font-clippers">specials</span> haircuts
  </p>
  <p class="mt-6 w-2/3 text-center font-serif text-lg">
    get these specials while having fun doing it and get prizes
  </p>

  <div class="mt-28 w-5/6 flex flex-col justify-center items-start gap-8">
    {#each specials as product, index}
      <div
        class={`w-full flex ${
          (1 + index) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        } flex-col justify-between items-start gap-4`}
      >
        <div class="h-auto w-full flex flex-col justify-center items-center">
          <div class="w-full h-20 flex flex-row justify-center items-center">
            <p class="text-6xl font-bold font-clippers">0{index + 1}.</p>
            <div
              class="h-full flex-1 w-full flex flex-col justify-center items-start"
            >
              <div class="border border-black h-[1px] w-1/2" />
            </div>
          </div>

          <div class="w-full mt-2 flex flex-col justify-center items-start">
            <p class="text-green-500 text-4xl font-bold font-clippers ml-16">
              {product.title}
            </p>
            <p class="text-2xl font-bold ml-16 mt-2">
              {product.targetCustomers}
            </p>
            <p class="text-lg ml-16 mt-4">
              {product.description}
            </p>
            <p class="text-2xl font-bold ml-16 mt-8">
              MWK{product.price.toLocaleString()}.00
            </p>
            <button
              type="button"
              class="h-16 px-6 bg-green-500 rounded text-white font-mono text-sm ml-16 mt-12"
            >
              Book a sit
            </button>
          </div>
        </div>

        <div class="w-full h-full flex flex-col justify-center items-center">
          <img
            src={urlFor(product.image).height(500).width(500).url()}
            alt="special"
            class="object-contain rounded-lg"
          />
        </div>
      </div>
    {/each}
  </div>
</div>
