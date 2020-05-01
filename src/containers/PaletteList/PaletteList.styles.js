import sizes from "../../assets/mediaQueries"
import bgImg from "../../assets/background.svg"

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 1s ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll",
    backgroundColor: "4e#080e",
    backgroundImage: `url(${bgImg})`
    /* background by SVGBackgrounds.com */
  },
  container: {
    width: "50%",
    display: "flex",
    flexFlow: "column wrap",
    [sizes.down("xl")]: {
      width: "70%"
    },
    [sizes.down("lg")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  h1: {
    color: "black",
    fontSize: "1.4rem"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "black",
      fontWeight: 400
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridGap: "1.5rem",
    gridTemplateColumns: "repeat(4, 25%)",
    [sizes.down("xl")]: {
      gridTemplateColumns: "repeat(4, 25%)"
    },
    [sizes.down("lg")]: {
      gridTemplateColumns: "repeat(3, 30%)"
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      padding: "5px 20px 20px 20px"
    }
  }
}
