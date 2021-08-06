import logo from "../../assets/images/logo.png";

const Logo = (props: { className: string }) => (
  <div {...props}>
    <img src={logo} alt="logo" height={40} />
  </div>
);

export default Logo;
