module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    fontFamily: {
      sans: ["vox-round", "sans"],
      serif: ["masqualero", "sans-serif"],
      display: ["masqualero-groove", "sans-serif"],
      stencil: ["masqualero-stencil", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1.1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        header: "rgba(0, 0, 0, 0.7)",
        "off-black": "#151515",
        "off-white": "#707070",
        bTitle: "#BAAC8C",
        warning: "#9A0808",
      },
      backgroundImage: {
        stone: 'url("/stone-bg.png")',
        compound: 'url("/compound-bg.png")',
        chosen: 'url("/chosen-bg.png")',
        bedrock: 'url("/bedrock-bg.png")',
      },
      minHeight: {
        banner: "calc(100vh - 10rem)",
      },
      padding: {
        header: "10rem",
      },
      scale: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
