import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch } from "react-redux";
import { addText, addImage, addVideo } from "../redux/slice";

const Inputs = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const textChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const textSubmit = (e) => {
    e.preventDefault();
    dispatch(addText(text));
  };

  const uploadFile = (e) => {
    e.preventDefault();
    if (e.target.files[0].type == "image/jpeg") {
      dispatch(addImage(URL.createObjectURL(e.target.files[0])));
    } else if (e.target.files[0].type == "video/mp4") {
      dispatch(addVideo(URL.createObjectURL(e.target.files[0])));
    }
  };
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
      <form style={{ width: "100%" }} onSubmit={textSubmit}>
        <TextField
          id="standard-basic"
          label="write a post"
          fullWidth
          onChange={textChange}
        />
      </form>
      <IconButton
        variant="contained"
        component="label"
        style={{ borderBottom: "1px solid grey" }}
      >
        <AttachFileIcon fontSize="small" />
        <input
          type="file"
          hidden
          onChange={uploadFile}
          accept="image/jpg,video/mp4"
        />
      </IconButton>
    </Grid>
  );
};

export default Inputs;
