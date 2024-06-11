const SectionSlide = ({ h5Props, pProps, ...props }) => {
  return (
    <div {...props}>
      <h5>{h5Props}</h5>
      <p>{pProps}</p>
    </div>
  );
};

export default SectionSlide;
