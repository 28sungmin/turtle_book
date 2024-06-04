const VideoAtm = ({ srcProps, typeProps }) => {
  return (
    <div className="video_space mx-auto">
      <video muted autoPlay loop>
        <source src={srcProps} type={typeProps} />
      </video>
    </div>
  );
};
export default VideoAtm;
