import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://devinekask.github.io",
  base: "/techtiletime/",
  integrations: [
    starlight({
      title: "Tech tile time",
      social: {
        github: "https://github.com/devinekask/techtiletime",
      },
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
        {
          label: "Temple",
          autogenerate: { directory: "temple" },
        },
        {
          label: "Meeting notes",
          autogenerate: { directory: "meetingnotes", order: "desc" },
        },
      ],
    }),
  ],
});
