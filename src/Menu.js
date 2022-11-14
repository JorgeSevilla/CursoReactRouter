import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route =>(
            <li key={route.to}>
                <NavLink
                     style={({ isActive }) => ({
                        color: isActive ? "red" : "blue",
                      })}
                    to={route.to}
                >
                    {route.text}
                </NavLink>
            </li>
        ))}
       {/*  <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
    to: '/',
    text: 'Home'
});
routes.push({
    to: '/blog',
    text: 'Blog'
});

routes.push({
    to: '/profile',
    text: 'Profile'
});


export { Menu };
