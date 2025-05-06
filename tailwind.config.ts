import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import fontFamily from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.fontFamily.sans],
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
  plugins: [animate],
}

export default config
