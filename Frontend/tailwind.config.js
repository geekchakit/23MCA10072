import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: `Poppins, sans-serif`,
      },
      color: {
        background: "#F8F6F7",
      },
    },
  },
  plugins: [],
});
