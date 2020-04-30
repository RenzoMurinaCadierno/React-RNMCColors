import sizes from "../../assets/mediaQueries"

export default {
  DraggableColorBox: {
    height: "25%",
    width: "20%",
    margin: "0 auto -6px auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    // marginBottom: "-6px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%"
    }
  },
  BoxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    lineHeight: 0,
    [sizes.down("sm")]: {
      padding: "5px"
    }
  },
  BoxContentName: {
    marginTop: "0.6rem"
  },
  DeleteIcon: {
    fontSize: "1.3rem",
    transition: "all 0.3s ease-in-out"
  }
}
