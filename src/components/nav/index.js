import React from 'react';
import headerBackground from './header.jpg'
function Nav(props) {
  const { pages, profile, currentPage, setCurrentPage } = props;
  return (
    <header
      style={{
        backgroundImage:
          `url(${headerBackground})`
      }}
    >
      <h1>{profile.name}</h1>
      <nav>
        <ul className="flex-row">
          {pages.map((page) => (
            <li
              className={`mx-2 ${currentPage === page.var && 'navActive'}`}
              key={page.var}
            >
              <span onClick={() => setCurrentPage(page.var)}>{page.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
