import React, { FunctionComponent } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Sidenav, Nav, Dropdown, Navbar, Icon, Sidebar } from 'rsuite'
import { MenuItem } from '../types'

const NavToggle = ({ collapsed, onChange }) => {
  return (
    <Navbar appearance="subtle">
      <Navbar.Body>
        {/* <Nav>
          <Dropdown
            trigger="click"
            renderTitle={(children) => {
              return <Icon icon="cog" />
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav> */}

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: 'center' }}
          >
            <Icon icon={collapsed ? 'angle-right' : 'angle-left'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

export const SideMenu: FunctionComponent<{
  logo?: React.ReactNode
  menu?: MenuItem[]
  toggle?: () => void
  collapsed?: boolean
}> = ({ logo, menu, collapsed, toggle }) => {
  const history = useHistory()
  const location = useLocation()
  return (
    <Sidebar
      style={{ display: 'flex', flexDirection: 'column' }}
      width={collapsed ? 56 : 260}
      collapsible
    >
      <Sidenav
        expanded={!collapsed}
        defaultOpenKeys={menu.map((_, key) => key)}
        appearance="subtle"
        onSelect={(key) => {
          history.push(key)
        }}
      >
        {logo && <Sidenav.Header>{logo}</Sidenav.Header>}
        <Sidenav.Body>
          <Nav>
            {menu.map((item, key) => {
              if (item.children)
                return (
                  <Dropdown
                    eventKey={key}
                    key={key}
                    trigger="hover"
                    title={item.title}
                    icon={<Icon icon={item.icon} />}
                    placement="rightStart"
                  >
                    {item.children.map((subitem) => (
                      <Dropdown.Item
                        eventKey={subitem.href}
                        key={`${key}.${subitem.href}`}
                        active={location.pathname === subitem.href}
                        icon={<Icon icon={subitem.icon} />}
                      >
                        {subitem.title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                )
              else
                return (
                  <Nav.Item
                    key={key}
                    eventKey={item.href}
                    active={location.pathname === item.href}
                    icon={<Icon icon={item.icon} />}
                  >
                    {item.title}
                  </Nav.Item>
                )
            })}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <NavToggle collapsed={collapsed} onChange={toggle} />
    </Sidebar>
  )
}

export default SideMenu
