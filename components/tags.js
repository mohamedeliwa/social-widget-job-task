import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { changeTag } from "../redux/slice";

const Tags = () => {
  const dispatch = useDispatch();

  const handleClick = (tag) => {
    dispatch(changeTag(tag));
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      wrap="nowrap"
      style={{
        // backgroundColor: "lightgreen",
        width: "100%",
        marginBottom: "15px",
        marginTop: "5px",
      }}
    >
      <Badge
        color="secondary"
        style={{ cursor: "pointer" }}
        className="badge"
        id="all"
        onClick={() => handleClick("all")}
      >
        <Typography>All</Typography>
      </Badge>
      <Badge
        color="secondary"
        style={{ cursor: "pointer" }}
        className="badge"
        id="text"
        onClick={() => handleClick("text")}
      >
        <Typography>Text</Typography>
      </Badge>
      <Badge
        color="secondary"
        style={{ cursor: "pointer" }}
        className="badge"
        id="images"
        onClick={() => handleClick("images")}
      >
        <Typography>Images</Typography>
      </Badge>
      <Badge
        color="secondary"
        style={{ cursor: "pointer" }}
        className="badge"
        id="videos"
        onClick={() => handleClick("videos")}
      >
        <Typography>Videos</Typography>
      </Badge>
    </Grid>
  );
};

export default Tags;
