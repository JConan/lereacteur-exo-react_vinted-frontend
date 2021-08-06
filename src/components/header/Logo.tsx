import logo from "../../assets/images/logo.png";

const Logo = (props: { className: string }) => (
  <img {...props} src={logo} alt="logo" width={104} />
);

export default Logo;
