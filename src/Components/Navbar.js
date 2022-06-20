import React, { useEffect } from "react";
import logo from "./assets/animadop.jpg";
import prof from "./assets/prof.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
      });
    }

    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  }, []);

  return (
    <>
      <div className='sidebar'>
        <div className='logo-details'>
          <img src={logo} alt='' />
          <span className='logo_name'>AnimAdop</span>
        </div>
        <ul className='nav-links'>
          <li>
            <a>
              <i className='bx bx-grid-alt'></i>
              <span className='link_name'>Dashboard</span>
            </a>
            <ul className='sub-menu blank'>
              <li>
                <a href='/' className='link_name'>
                  Category
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className='iocn-link'>
              <a>
                <i className='bx bx-collection'></i>
                <span className='link_name'>Category</span>
              </a>
              <i class='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className='sub-menu'>
              <li>
                <a className='link_name'>Category</a>
              </li>
              <li>
                <a>HTML & CSS</a>
              </li>
              <li>
                <a>JavaScript</a>
              </li>
              <li>
                <a>PHP & MySQL</a>
              </li>
            </ul>
          </li>
          <li>
            <div className='iocn-link'>
              <a>
                <i className='bx bx-book-alt'></i>
                <span className='link_name'>Posts</span>
              </a>
              <i class='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className='sub-menu'>
              <li>
                <a className='link_name'>Posts</a>
              </li>
              <li>
                <a>Web Design</a>
              </li>
              <li>
                <a>Login Form</a>
              </li>
              <li>
                <a>Card Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <i className='bx bx-pie-chart-alt-2'></i>
              <span className='link_name'>Analytics</span>
            </a>
            <ul className='sub-menu blank'>
              <li>
                <a className='link_name'>Analytics</a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <i className='bx bx-line-chart'></i>
              <span className='link_name'>Chart</span>
            </a>
            <ul className='sub-menu blank'>
              <li>
                <a className='link_name'>Chart</a>
              </li>
            </ul>
          </li>
          <li>
            <div className='iocn-link'>
              <a>
                <i className='bx bx-plug'></i>
                <span className='link_name'>Plugins</span>
              </a>
              <i class='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className='sub-menu'>
              <li>
                <a className='link_name'>Plugins</a>
              </li>
              <li>
                <a>UI Face</a>
              </li>
              <li>
                <a>Pigments</a>
              </li>
              <li>
                <a>Box Icons</a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <i className='bx bx-compass'></i>
              <span className='link_name'>Explore</span>
            </a>
            <ul className='sub-menu blank'>
              <li>
                <a className='link_name'>Explore</a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <i className='bx bx-history'></i>
              <span className='link_name'>History</span>
            </a>
            <ul className='sub-menu blank'>
              <li>
                <a className='link_name'>History</a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <i className='bx bx-cog'></i>
              <span className='link_name'>Setting</span>
            </a>
            <ul className='sub-menu blank'>
              <li>
                <a className='link_name'>Setting</a>
              </li>
            </ul>
          </li>
          <li>
            <div className='profile-details'>
              <div className='profile-content'>
                <img src={prof} alt='profile' />
              </div>
              <div className='name-job'>
                <div className='profile_name'>Mohamed Ali</div>
                <div className='job'>Web Desginer</div>
              </div>
              <i className='bx bx-log-out'></i>
            </div>
          </li>
        </ul>
      </div>
      <section className='home-section'>
        <div className='home-content'>
          <i className='bx bx-menu'></i>
          <span className='text'>Drop Down Sidebar</span>
        </div>
      </section>
    </>
  );
};

export default Navbar;
