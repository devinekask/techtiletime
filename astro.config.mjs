import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Tech tile time",
      social: {
        github: "https://github.com/withastro/starlight",
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
