<script>
  import { Barbershop } from "$lib/index.js";
</script>

<div class="h-[50vh] w-full flex flex-col justify-center items-center">
  <p class="font-bold text-4xl">
    book <span class="text-green-500 font-clippers">your sit</span> now
  </p>
  <p class="mt-6 w-2/3 text-center font-serif text-lg">
    reserve your sit so you find it empty when on your scheduled visit
  </p>
</div>

<div class="h-screen w-full justify-center items-center flex flex-col">
  <div class="h-full w-full flex flex-col justify-center items-center relative">
    <div class="absolute h-full w-full">
      <img src={Barbershop} alt="clippers" class="h-full w-full object-cover" />
    </div>
    <div
      class="absolute h-full w-full backdrop-brightness-50 flex flex-col justify-center items-center gap-8"
    >
      <div
        class="h-auto w-full flex flex-wrap flex-row justify-center items-center gap-4"
      >
        <input
          type="date"
          name="date"
          id="date"
          class="h-10 w-64 rounded bg-slate-200 text-gray-600 px-2 flex flex-row-reverse text-right outline-none"
        />
        <input
          type="time"
          name="date"
          id="date"
          class="h-10 w-64 rounded bg-slate-200 text-gray-600 px-2 flex flex-row-reverse text-right outline-none"
        />
        <div
          class="h-10 w-64 rounded flex flex-row justify-center items-center bg-slate-200"
        >
          <svg
            class="h-4 w-4 text-black"
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <input
            type="tel"
            name="date"
            id="date"
            placeholder="fullname"
            class="h-10 w-52 rounded-e bg-slate-200 text-gray-600 px-2 text-right outline-none"
          />
        </div>
      </div>
      <button
        type="button"
        class="h-16 px-6 bg-green-500 rounded text-white font-mono text-sm capitalize mt-4"
      >
        reservation
      </button>
    </div>
  </div>
</div>
