const ListItemAtm = ({ nameProps, linkProps, ...props }) => {
  return (
    <li {...props}>
      <a href={linkProps}>{nameProps}</a>
    </li>
  );
};

export default ListItemAtm;
