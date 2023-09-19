<script>
  import { Clipper } from "$lib/index.js";
</script>

<div
  class="h-screen w-full flex flex-col md:flex-row justify-evenly items-center"
>
  <div class="h-auto w-full flex flex-col justify-center items-center">
    <img src={Clipper} alt="clipper" class="h-96" />
  </div>
  <div class="w-full flex flex-col justify-start items-left h-96 gap-4">
    <div class="flex flex-col justify-center items-start">
      <p class="text-green-500 font-clippers text-6xl">welcome</p>
      <p class="text-4xl font-bold">
        to <span class="text-green-500">clippers</span> barbershop
      </p>
    </div>

    <div class="w-3/4 flex flex-col justify-center items-start gap-4">
      <p class="text-lg font-sans">
        Discover the artistry of our barbershop! At our establishment, we don't
        just provide haircuts; we craft styles that define you.
      </p>
      <p class="text-lg font-sans">
        Our expert barbers are dedicated to delivering a cut above the rest.
        With precision and passion, we sculpt your hair into a masterpiece,
        ensuring every detail is in place.
      </p>

      <button
        type="button"
        class="h-16 px-6 bg-green-500 rounded text-white font-mono text-sm"
      >
        Book Session
      </button>
    </div>
  </div>
</div>
