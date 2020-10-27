import React from "react";
import { Menu } from "semantic-ui-react";

function MenuBar() {
  const [activeItem, setActiveITem] = useState("")
  const handleItemClick = (e, { name }) => setActiveITem(name)

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  )

}

export default MenuBar;
