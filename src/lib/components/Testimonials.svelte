<script>
  import { Chairs, urlFor } from "$lib/index.js";

  export let testimonials;
</script>

<div class="h-screen w-full flex flex-col justify-center items-center">
  <div
    class="h-full md:h-2/3 w-full relative flex flex-col justify-center items-center"
  >
    <img
      src={Chairs}
      alt="barbershop"
      class="h-full w-full object-cover absolute"
    />
    <div
      class="absolute h-full w-full backdrop-brightness-50 flex flex-col justify-center items-center gap-5"
    >
      <p class="text-4xl font-bold text-white">
        hear what <span class="text-green-500 font-clippers">customers</span> say
      </p>

      <div
        class="w-4/5 h-auto flex flex-row flex-wrap justify-between items-center gap-4"
      >
        {#each testimonials as testimonial}
          <div
            class="flex flex-col gap-2 justify-start items-center mx-auto h-[15rem]"
          >
            <img
              src={urlFor(testimonial.picture).height(100).width(100).url()}
              alt={testimonial.name || "testimonial"}
              class="h-[100px] w-[100px] rounded-full object-contain"
            />
            <p class="text-white font-bold">
              @<span class="text-green-500 font-clippers"
                >{testimonial.name}</span
              >
            </p>

            <p
              class="w-72 text-white text-sm text-center font-bold p-4 bg-green-500 flex-1 rounded-xl"
            >
              {testimonial.testimonial}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
