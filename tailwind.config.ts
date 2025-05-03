import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts, js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        ["slide-in"]: "slideIn 0.4s ease-in-out forwards",
        ["fade-in"]: "fadeIn 0.4s ease-in-out forwards",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["DM Serif Text", "Georgia", "serif"],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      function animationDelay() {
        const delays: Record<string, { "animation-delay": string }> = {};
        for (let i = 0; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            "animation-delay": `${i * 100}ms`,
          };
        }
        return delays;
      }
      addUtilities(animationDelay());
    }),
  ],
};
