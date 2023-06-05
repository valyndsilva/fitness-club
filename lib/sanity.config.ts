import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/schemas";
import Logo from "@/app/(admin)/components/Logo";
import { apiVersion, dataset, projectId } from "@/lib/env";

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "fitness-club",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      // navbar: StudioNavbar,
    },
  },
});
