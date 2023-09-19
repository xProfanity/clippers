import HeroSection from "./components/HeroSection.svelte";
import Navbar from "./components/Navbar.svelte";
import Services from "./components/Services.svelte";
import SubWelcome from "./components/SubWelcome.svelte";
import Welcome from "./components/Welcome.svelte";

import Barbershop from './images/barbershop.jpg';
import Clipper from './images/clipper.png';
import Clippers from './images/clippers.jpg';
import ClippersLogo from './images/clippers.png';
import Cuts from './images/cuts.jpg';
import Eugene from './images/eugene.jpg';

import { MenuItems } from "./constants.js";

import { urlFor } from "./client/sanity.js";
import { fetchProducts } from "./services/sanity.js";

export { Barbershop, Clipper, Clippers, ClippersLogo, Cuts, Eugene, HeroSection, MenuItems, Navbar, Services, SubWelcome, Welcome, fetchProducts, urlFor };

