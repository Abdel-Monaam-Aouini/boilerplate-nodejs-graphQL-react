import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

function MenuBar() {
  const [activeItem, setActiveITem] = useState('');

  const handleItemClick = (e, { name }) => setActiveITem(name);

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}

export default MenuBar;
