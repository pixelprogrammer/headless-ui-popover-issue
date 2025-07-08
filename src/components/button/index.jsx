const buttonStyles = "rounded-xl p-2 bg-sky-500 text-white cursor-pointer";

export const Button = (props) => {
  return <button {...props} className={buttonStyles} />;
};

export const IconButton = ({ icon, ...rest }) => {
  return (
    <button {...rest} className={buttonStyles}>
      {icon}
    </button>
  );
};

export const IconButtonFailure = ({ icon, ...rest }) => {
  const Icon = () => icon;
  return (
    <button {...rest} className={buttonStyles}>
      <Icon />
    </button>
  );
};

export const IconButtonWithChild = ({ icon, children, ...rest }) => {
  const Icon = () => icon;
  return (
    <button {...rest} className={buttonStyles}>
      {children ? children : <Icon />}
    </button>
  );
};
