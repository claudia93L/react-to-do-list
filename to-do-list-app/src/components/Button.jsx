const Button = ({ children, ...rest }) => {
  return (
    <button className='cursor-pointer' {...rest}>
      {children}
    </button>
  );
};

export default Button;
