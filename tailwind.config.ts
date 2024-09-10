/* eslint-disable */
import svgToDataUri from "mini-svg-data-uri"
import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import { fontFamily } from "tailwindcss/defaultTheme"
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "move-up": {
          from: {
            transform: "translateY(10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        "move-down": {
          from: {
            transform: "translateY(-10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "move-up": "move-up 1s linear forwards",
        "move-down": "move-down 1s linear forwards",
      },
    },
  },
  plugins: [
    animate,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      )
    },
  ],
}

export default config
