export default {
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    // border: '1px solid black',
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 3px grey, 0 0 5px white",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: "transparent",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    boxShadow: "0 0 7px black, 0 0 8px grey",
    display: "flex",
    flexWrap: "wrap"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "0.8rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.2rem"
  },
  miniColor: {
    height: "25%",
    width: "20%"
    // display: 'inline-block',
    // margin: '0 auto',
    // position: 'relative',
    // marginBottom: '-5px'
  },
  Delete: {},
  DeleteIcon: {
    color: "red",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "2px solid transparent",
    borderRadius: "5px",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: 0,
    top: 0,
    padding: "10px",
    zIndex: 10,
    opacity: 0
  }
}
