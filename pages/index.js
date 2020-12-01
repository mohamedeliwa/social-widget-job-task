import Head from "next/head";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#cfe8fc",
          height: "100vh",
          paddingTop: "20px",
        }}
      >
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={1}
          wrap="nowrap"
          style={{
            // backgroundColor: "lightgrey",
            height: "100%",
            paddingBottom: "5px",
          }}
        >
          {/* Input Group */}
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

          {/* News Feed */}
          <div
            style={{
              // backgroundColor: "lightblue",
              width: "100%",
              overflow: "scroll",
            }}
          >
            <Card style={{ margin: "3px 0" }}>
              <CardContent>
                lorem Hello garen where are you man I keen to see you live
              </CardContent>
            </Card>
            <Card style={{ margin: "3px 0" }}>
              <CardContent>
                lorem Hello garen where are you man I keen to see you live
              </CardContent>
            </Card>
            <Card style={{ margin: "3px 0" }}>
              <CardContent>
                lorem Hello garen where are you man I keen to see you live
              </CardContent>
            </Card>
            <Card style={{ margin: "3px 0" }}>
              <CardContent>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                ></img>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <video controls width="100%" height="100%">
                  <source
                    src="/media/cc0-videos/flower.webm"
                    type="video/webm"
                  />
                  <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
