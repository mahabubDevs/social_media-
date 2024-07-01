/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      input_color: "var(input_color)",
      line_color: "var(--line_color)",
      primary_bg: "var(--primary_bg)",
      single_color: "var(--single_color)",
      secondary_bg: "var(--secondary_bg)",
      hover_clr: "var(--hover_clr)",
      blur: "var(--blur)",
      text_color: "var(--text_color)",
      primary_color: "var(--primary_color)",
      secondary_color: "var(--secondary_color)",
      title_color: "var(--title_color)",
      black: "var(--black)",
      white: "var(--white)",
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      yello: "var(--yello)",
      purple_100: "var(--purple-100)",
      pink_100: "var(--pink-100)" ,
      cryan_100: "var(--cryan-100)" 
    },
    fontFamily:{
      gilroy: ['Gilroy Regular'],
      gilroyBold:['Gilroy Bold'],
      gilroySemibold:['Gilroy SemiBold'],
      gilroyLight:['Gilroy Light'],
      gilroyExtraBold:['Gilroy ExtraBold'],
      gilroyBlack:['Gilroy Black'],
      gilroyMedium:['Gilroy Medium'],
      
    },
    extend: {
      screens:{
        xs:"320px",
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        "2xl": "1400px",
        "3xl": "1620px"
      },
      container:{
        center:true
      }
    },
  },
  plugins: [],
}

