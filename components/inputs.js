import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { useSelector, useDispatch } from "react-redux";
import { add, selectPosts } from "../redux/slice";

const Inputs = () => {
    const posts = useSelector(selectPosts);
    console.log(posts);
    const dispatch = useDispatch();
    // onClick={() => dispatch(add())}
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      wrap="nowrap"
      style={{
        // backgroundColor: "lightgreen",
        width: "100%",
        marginBottom: "15px",
        marginTop: "5px",
      }}
    >
      <TextField id="standard-basic" label="write a post" fullWidth />
      <IconButton
        variant="contained"
        component="label"
        style={{ borderBottom: "1px solid grey" }}
      >
        <AttachFileIcon fontSize="small" />
        <input type="file" hidden />
      </IconButton>
    </Grid>
  );
};

export default Inputs;
