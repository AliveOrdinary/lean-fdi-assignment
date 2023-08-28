import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        btnshadow: "2px 4px 4px rgba(255, 193, 7, 0.80)",
      },
      colors: {
        primary: "#358279",
        secondary: "#3D7196",
        expertbg: "#C0E3FC",
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(180deg, #C0E3FC 0%, rgba(123, 226, 195, 0.80) 100%)",

        "gradient-linear-2":
          "linear-gradient(180deg, #27EDD5 0%, #047E70 100%)",
        uiux: "url('/assets/uiux.png')",
        product: "url('/assets/product.png')",
        teach: "url('/assets/teaching.png')",
        content: "url('/assets/content.png')",
        data: "url('/assets/datascience.png')",
        frontend: "url('/assets/frontend.png')",
        marketing: "url('/assets/marketing.png')",
      },
    },
  },
  plugins: [],
};
export default config;
