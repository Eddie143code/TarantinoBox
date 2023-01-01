/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        540: "135rem",
        270: "67.5rem",
        135: "33.75rem",
      },
      width: {
        480: "120rem",
        416: "104rem",
        352: "88rem",
        288: "72rem",
        256: "64rem",
      },
    },
    screens: {
      xxs: "200px",
      xs: "400px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};

/* 
  width: 
  2xl-1920px 
  xl-1664px
  lg-1408px
  md-1152px
  sm-1024px


  breakpoints:
  2xl-1536px
  xl-1280px
  lg-1024px
  md-768px
  sm-640px
*/
