<script>
  import {
    HeroSection,
    Mid,
    Services,
    Specials,
    SubWelcome,
    Testimonials,
    Welcome,
  } from "$lib/index.js";

  export let data;
</script>

<main class="h-auto w-full flex flex-col justify-start items-center gap-5">
  <div class="h-[150vh] w-full flex flex-col justify-center items-center">
    <HeroSection />
  </div>

  <Welcome />

  <SubWelcome />

  <Services products={data.products} />

  <Mid />

  <Specials specials={data.specials} />

  <Testimonials testimonials={data.testimonials} />
</main>
