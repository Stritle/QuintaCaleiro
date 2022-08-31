import React from "react";
import { Link } from "react-router-dom";
import logoNavbar from "../images/logoCabrilNav.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const Navbar = (props) => {
  // const state = {
  //     isOpen: false
  // };
  // const handleToggle = () => {

  //     this.setState({ isOpen: !this.state.isOpen })
  // }

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={logoNavbar} alt="Quinta do Cabril"></img>
        </Link>
        <div className="navigation">
          <Link to="/vinho"> Vinhos</Link>
          <Link to="/quinta">Quinta</Link>
          <Link to="/historia">História</Link>
        </div>

        <div className="user">
          <Link to="/signin">{!userInfo && <p>Entrar</p>}</Link>
          <Link to="/register">{!userInfo && <p>Registar</p>}</Link>
          <Link>{userInfo && <p>{userInfo.name}</p>}</Link>
          <Link to="/" onClick={handleLogout}>
            {userInfo && <p>Sair</p>}
          </Link>
        </div>
      </div>
      {/* <div className="mobile">
            <div className="nav-mobile">
                <button type="button" className="nav-btn">
                    <FaAlignRight className="nav-icon" onClick={handleToggle} />
                </button>
            </div>
            <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/blog">Noticias</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/vinho">Vinhos</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/loja">Loja</Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <hr></hr>
                <img src={logoIntro} alt="Logotipo"></img>
            </ul>


        </div> */}
    </>
  );
};
export default Navbar;
