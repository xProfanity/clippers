<script>
  import { Clippers } from "$lib/index.js";
</script>

<div class="h-screen w-full justify-center items-center flex flex-col">
  <div class="h-2/3 w-full flex flex-col justify-center items-center relative">
    <div class="absolute h-full w-full">
      <img src={Clippers} alt="clippers" class="h-full w-full object-cover" />
    </div>
    <div
      class="absolute h-full w-full backdrop-brightness-50 flex flex-col justify-center items-center gap-2"
    >
      <h1 class="text-white font-bold text-4xl">
        Out-shine <span class="text-green-500 font-clippers">the hood</span> with
        some fresh cuts
      </h1>
      <p class="text-white font-bold text-3xl">Make a reservation now</p>
      <button
        type="button"
        class="h-16 px-6 bg-green-500 rounded text-white font-mono text-sm capitalize mt-4"
      >
        reservation
      </button>
    </div>
  </div>
</div>
