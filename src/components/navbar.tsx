"use client";

import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./../css/navbar.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect } from 'react'

function AppNavbar() {
  const pathname = usePathname();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className={`scroll-down ${visible ? 'scroll-up' : ''} `}>
      <Navbar expand="lg" className="bg-body-tertiary navbar" id="navbar">
        <Container fluid>
          <Nav.Link href="#action1" className="nav-link">Skin Care</Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-burger"
              navbarScroll
            >
              <Nav.Link href="#action1" className="nav-link">Skin Care</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Body & Hand</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Hair</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Fragrance</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Kits & Travel</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Gifts</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Read</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Stores</Nav.Link>
              <Nav.Link href="#action1" className="nav-link">Facial Appointments</Nav.Link>
              <Nav.Link href="#action1" className="nav-link"><svg aria-labelledby="search-835" className="Icon_base__GKZ58 Icon_light__1TZsq PrimaryMenu_searchIcon__lEkvv" data-testid="data-testid-Icon" focusable="false" height="18" role="img" viewBox="0 0 16 16" width="18"><title id="search-835">search</title><g><path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"></path></g></svg></Nav.Link>

            </Nav>
            <Nav.Link href="#action1" className="nav-link nav-link-2">Log in</Nav.Link>
            <Nav.Link href="#action1" className="nav-link nav-link-2">Cabinet</Nav.Link>
            <Nav.Link href="#action1" className="nav-link nav-link-2">Cart</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
