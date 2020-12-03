import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Inputs from "../components/inputs";
import NewsFeed from "../components/newsFeed";
import Tags from "../components/tags";

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
          <Inputs />
          {/* Tags */}
          <Tags />
          {/* News Feed */}
          <NewsFeed />
        </Grid>
      </Container>
    </div>
  );
}
