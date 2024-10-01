
type Button={
    children:string;
    classname:string;
    onClick?:()=>void
     
}
const Button = ({children,classname,onClick}: Button) => {
  return (
    <button
      type="submit"
      className= {`${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
