import sizes from "../../assets/mediaQueries"

export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
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
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
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
      padding: "20px"
    }
  }
}
