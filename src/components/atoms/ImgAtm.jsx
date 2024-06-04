const ImgAtm = ({ srcProps, altProps, ...props }) => {
  return <img {...props} src={srcProps} alt={altProps} />;
};

export default ImgAtm;
