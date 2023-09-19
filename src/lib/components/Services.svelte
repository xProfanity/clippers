<script>
  import { urlFor } from "$lib/index.js";

  export let products;
</script>

<div class="min-h-screen w-full flex flex-col justify-center items-center">
  <div
    class="w-5/6 h-auto flex-row flex flex-wrap justify-center items-start gap-4"
  >
    {#each products as product}
      <div
        class="h-[28rem] w-[22rem] bg-green-500 rounded-lg flex flex-col justify-start items-center mx-auto relative"
      >
        <img
          src={urlFor(product.image).height(1280).width(1920).url()}
          alt="product"
          class="object-cover h-[17rem] w-full"
        />

        <div
          class="h-16 flex flex-row justify-between items-center w-10/12 mx-auto"
        >
          <p class="font-bold text-lg capitalize">{product.title}</p>
          <p class="font-bold text-lg">
            MWK{product.price.toLocaleString()}.00
          </p>
        </div>

        <div class="h-20 w-3/4 flex-col justify-center items-center flex">
          <p class="text-lg">{product.description}</p>
        </div>

        <p class="text-gray-600 inline-flex gap-1">
          <span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>{product.duration} mins
        </p>
      </div>
    {/each}
  </div>
</div>
