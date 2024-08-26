// Codes by mahdi tasha
// Importing type of configs of tailwindCSS
import type {Config} from "tailwindcss";

// Defining configs of tailwindCSS
const config: Config = {
    content: [
        './app/*.{jsx,tsx}',
        './app/**/*.{jsx,tsx}',
        './section/**/*.{jsx,tsx}',
        './component/*.{jsx,tsx}',
        './component/**/*.{jsx,tsx}',
        './component/ui/*.{jsx,tsx}',
        './component/ui/**/*.{jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                "theme": "#6F4EFD",
                "themeViolet": "#BDADFF",
                "lightTheme" : "#423D90",
                "darkTheme" : "#060B25"
            }
        }
    },
    plugins: [],
};

// Exporting the configs as default
export default config;
