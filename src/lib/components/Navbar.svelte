<script>
  import { ClippersLogo, MenuItems } from "$lib/index.js";
</script>

<div
  class="fixed z-50 top-4 h-20 w-full flex flex-col justify-center items-center"
>
  <div
    class="h-full w-[88%] bg-slate-200 flex flex-row justify-between items-center px-4 rounded-2xl"
  >
    <a href="/">
      <img src={ClippersLogo} alt="clippers logo" class="h-12 object-contain" />
    </a>
    <u
      class="h-full w-auto flex flex-row justify-center items-center gap-6 list-none no-underline"
    >
      {#each MenuItems as item}
        <li class="text-xl capitalize font-thin font-clippers">
          <a href={item.link}>{item.name}</a>
        </li>
      {/each}
    </u>
  </div>
</div>
