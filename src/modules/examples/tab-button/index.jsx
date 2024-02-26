const TabButton = ({ children, handleClick, activeClass }) => {

  return (
    <li>
      <button onClick={handleClick} className={`${activeClass && "active"}`}>{children}</button>
    </li>
  );
};

export default TabButton;
