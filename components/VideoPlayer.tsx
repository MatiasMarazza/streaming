function VideoPlayer({ id }: { id: string }): JSX.Element {
  return (
    <video
      src={`/api/videos?videoId=${id}`}
      width="100%"
      height="auto"
      autoPlay muted
      loop
      id="video-player"
      className="player"
    />
  );
}

export default VideoPlayer;
