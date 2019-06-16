import React from 'react';

export const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-light bg-primary">
    <a className="navbar-brand" href="/">
      <img
        height="40"
        src="https://commonmedia.asicentral.com/200000/202684/IPU.jpg"
        alt="iPromoteU"
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sage">
            Sage
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
// export const Header = () => (
//   <nav classNameName="navbar navbar-dark bg-primary">
//     <a classNameName="navbar-brand" href="/">
//       <img
//         height="40"
//         src="https://commonmedia.asicentral.com/200000/202684/IPU.jpg"
//         alt="iPromoteU"
//       />
//     </a>
//     <button
//       classNameName="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarColor01"
//       aria-controls="navbarColor01"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span classNameName="navbar-toggler-icon" />
//     </button>

//     <div classNameName="collapse navbar-collapse" id="navbarColor01">
//       <ul classNameName="navbar-nav mr-auto">
//         <li classNameName="nav-item active">
//           <a classNameName="nav-link" href="#">
//             Home <span classNameName="sr-only">(current)</span>
//           </a>
//         </li>
//         <li classNameName="nav-item">
//           <a classNameName="nav-link" href="#">
//             Features
//           </a>
//         </li>
//         <li classNameName="nav-item">
//           <a classNameName="nav-link" href="#">
//             Pricing
//           </a>
//         </li>
//         <li classNameName="nav-item">
//           <a classNameName="nav-link" href="#">
//             About
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );
