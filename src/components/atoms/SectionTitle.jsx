const SectionTitle = ({ h3Props, ...props }) => {
  console.log(h3Props);
  return <h3 {...props}>{h3Props}</h3>;
};

export default SectionTitle;
