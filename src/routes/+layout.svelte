<script>
  import "../app.css";
  import { Navbar } from "$lib/index.js";
</script>

<main>
  <nav>
    <Navbar />
  </nav>
  <slot />
  <footer>
    <p>Footer</p>
  </footer>
</main>
