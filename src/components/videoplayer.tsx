type VideoProps = {
  youtubeUrl: string;
};

const VideoPlayer = (props: VideoProps) => (
  <iframe
    width="560"
    height="315"
    src={props.youtubeUrl}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export { VideoPlayer };
