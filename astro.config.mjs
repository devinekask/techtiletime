import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://devinekask.github.io",
  base: "/techtiletime/",
  integrations: [
    starlight({
      title: "TechTileTime",
      logo: {
        light: "./src/assets/logo/logo-ttt-weboptimized.svg",
        dark: "./src/assets/logo/logo-ttt-weboptimized-white.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/devinekask/techtiletime",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/devinekask/techtiletime/edit/main/",
      },
      sidebar: [
        {
          label: "General",
          autogenerate: { directory: "general" },
        },
        {
          label: "Plotter",
          autogenerate: { directory: "plotter" },
        },
        {
          label: "Embroidery machine",
          autogenerate: { directory: "embroidery" },
        },
        {
          label: "Cricut",
          autogenerate: { directory: "cricut" },
        },
      ],
    }),
  ],
});
