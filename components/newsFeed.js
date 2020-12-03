import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/slice";

const NewsFeed = () => {
  const posts = useSelector(selectPosts);
  // Posts JSX
  const Posts = posts.map((post, index) => {
    switch (post.type) {
      case "text":
        return (
          <Card style={{ margin: "3px 0" }} key={index}>
            <CardContent>{post.content}</CardContent>
          </Card>
        );
        break;
      case "image":
        return (
          <Card style={{ margin: "3px 0" }} key={index}>
            <CardContent>
              <img
                style={{ width: "100%", height: "100%" }}
                src={post.src}
              ></img>
            </CardContent>
          </Card>
        );
        break;
      case "video":
        return (
          <Card style={{ margin: "3px 0" }} key={index}>
            <CardContent>
              <video controls width="100%" height="100%">
                <source src={post.src} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </CardContent>
          </Card>
        );
        break;
    }
  });

  return (
    <div
      style={{
        // backgroundColor: "lightblue",
        width: "100%",
        overflow: "scroll",
      }}
    >
      {Posts}
    </div>
  );
};

export default NewsFeed;
