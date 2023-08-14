import ReactPlayer from "react-player";

export const WebView = () => {
  const { search } = window.location;
  const queryParams = new URLSearchParams(search);
  const videoURL = queryParams.get("videoURL");

  if (!videoURL) return <>Not Found</>;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <ReactPlayer url={videoURL} controls playing width="100%" height="100%" />
    </div>
  );
};
