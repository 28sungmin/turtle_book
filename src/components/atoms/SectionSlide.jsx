const SectionSlide = ({ h5Props, pProps, bgProps, ...props }) => {
  return (
    <div {...props} style={{ backgroundColor: bgProps }}>
      <h5>{h5Props}</h5>
      <p>{pProps}</p>
    </div>
  );
};

export default SectionSlide;
