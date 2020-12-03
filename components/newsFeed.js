import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const NewsFeed = () => {
  return (
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
            <source src="/media/cc0-videos/flower.webm" type="video/webm" />
            <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsFeed;
