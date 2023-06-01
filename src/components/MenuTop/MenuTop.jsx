import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./MenuTop.sass";

const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <div className="logo2"></div>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ backgroundColor: "#c91616" }}
      >
        
          <Link to="/">
            <Menu.Item key="1">
              Home
            </Menu.Item>
          </Link>
        
          <Link to="/new-movies">
            <Menu.Item key="2">
              New Movies
            </Menu.Item>
          </Link>

          <Link to="/popular">
            <Menu.Item key="3">
              Popular
            </Menu.Item>
          </Link>

          <Link to="/search">
            <Menu.Item key="4">
              Search
            </Menu.Item>
          </Link>

      </Menu>
    </div>
  );
};

export default MenuTop;