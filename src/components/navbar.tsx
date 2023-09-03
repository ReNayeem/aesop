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
          <div className="d-flex justify-content-between nav-link-4">
            <div className="d-flex">
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-5">Skin Care</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-5">Shop</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-5">Read</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-5">Stores</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-5"><svg aria-labelledby="search-835" className="Icon_base__GKZ58 Icon_light__1TZsq PrimaryMenu_searchIcon__lEkvv" data-testid="data-testid-Icon" focusable="false" height="18" role="img" viewBox="0 0 16 16" width="18"><title id="search-835">search</title><g><path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"></path></g></svg></Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-7"><svg aria-labelledby="aesop-1170" className="Icon_base__GKZ58 Icon_light__1TZsq Logo_icon__NDEf8" data-testid="data-testid-Icon" focusable="false" height="22" role="img" viewBox="0 0 489.7 154.3" width="70"><title aria-label="Aesop logo" id="aesop-1170">Aesop</title><g><path d="M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"></path><path d="M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"></path><path d="M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"></path><path d="M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"></path><path d="M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"></path><rect x="131.8" y="13.5" width="44.3" height="5"></rect><path d="M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"></path></g></svg></Nav.Link>
            </div>
            <div className="d-flex">
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-5">Log in</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-5">Cabinet</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-7"><svg aria-labelledby="search-1171" className="Icon_base__GKZ58 Icon_light__1TZsq Header_searchIcon__T92B0 me-4" data-testid="data-testid-Icon" focusable="false" height="16" role="img" viewBox="0 0 16 16" width="16"><title id="search-1171">search</title><g><path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"></path></g></svg></Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-3 nav-link-7"><svg aria-labelledby="heart-1172" className="Icon_base__GKZ58 Icon_light__1TZsq Header_searchIcon__T92B0 me-4" data-testid="data-testid-Icon" focusable="false" height="16" role="img" viewBox="0 0 17 15" width="16"><title id="heart-1172">Open cabinet</title><g><path d="M8.36133 14.8598L7.47463 14.0717C6.06905 12.7843 4.90977 11.6743 3.9968 10.7416C3.08382 9.80893 2.35804 8.97478 1.81946 8.23915C1.28087 7.50351 0.9032 6.83685 0.686451 6.23915C0.469703 5.64145 0.361328 5.03389 0.361328 4.41649C0.361328 3.19481 0.768553 2.17675 1.583 1.3623C2.39745 0.54785 3.40895 0.140625 4.61749 0.140625C5.36625 0.140625 6.05591 0.311397 6.68645 0.65294C7.31699 0.994484 7.87529 1.49366 8.36133 2.15048C8.91305 1.45425 9.49762 0.945223 10.115 0.623384C10.7324 0.301544 11.3958 0.140625 12.1052 0.140625C13.3137 0.140625 14.3252 0.54785 15.1397 1.3623C15.9541 2.17675 16.3613 3.19481 16.3613 4.41649C16.3613 5.03389 16.253 5.64145 16.0362 6.23915C15.8195 6.83685 15.4418 7.50351 14.9032 8.23915C14.3646 8.97478 13.6388 9.80893 12.7259 10.7416C11.8129 11.6743 10.6536 12.7843 9.24803 14.0717L8.36133 14.8598ZM8.36133 13.0864C9.68809 11.8648 10.7784 10.8204 11.6323 9.95343C12.4861 9.08644 13.1659 8.32782 13.6717 7.67757C14.1774 7.02732 14.5288 6.44604 14.7259 5.93373C14.9229 5.42141 15.0214 4.91567 15.0214 4.41649C15.0214 3.56263 14.7488 2.85984 14.2037 2.30811C13.6585 1.75639 12.959 1.48053 12.1052 1.48053C11.4352 1.48053 10.8145 1.68742 10.2431 2.10122C9.67167 2.51501 9.20862 3.09629 8.85394 3.84506H7.84901C7.50747 3.10943 7.0477 2.53143 6.4697 2.11107C5.89171 1.69071 5.2743 1.48053 4.61749 1.48053C3.76363 1.48053 3.06412 1.75639 2.51896 2.30811C1.97381 2.85984 1.70123 3.56263 1.70123 4.41649C1.70123 4.9288 1.80304 5.44112 2.00665 5.95343C2.21026 6.46575 2.56166 7.0536 3.06084 7.71698C3.56001 8.38036 4.23982 9.14227 5.10024 10.0027C5.96067 10.8631 7.0477 11.891 8.36133 13.0864Z"></path></g></svg></Nav.Link>
              <Nav.Link href="#action1" className="nav-link-3 nav-link-17">Cart</Nav.Link>
            </div>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" className="nav-burger-2" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-burger"
              navbarScroll
            >
              <Nav.Link href="#action1" className="nav-link nav-link-8 nav-link-9">Skin Care</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-8">Body & Hand</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-8">Hair</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-8">Fragrance</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-8">Home</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-8">Kits & Travel</Nav.Link>
              <Nav.Link href="#action1" className="nav-link nav-link-8 nav-link-10">Gifts</Nav.Link>
              <div className="nav-link-14">
                <div className="nav-link-12">
                  <Nav.Link href="#action1" id="nav-link-15" className="nav-link">Read</Nav.Link>
                  <Nav.Link href="#action1" id="nav-link-15" className="nav-link">Stores</Nav.Link>
                  <Nav.Link href="#action1" id="nav-link-15" className="nav-link">Facial Appointments</Nav.Link>
                  <Nav.Link href="#action1" className="nav-link nav-link-11"><svg aria-labelledby="search-835" className="Icon_base__GKZ58 Icon_light__1TZsq PrimaryMenu_searchIcon__lEkvv" data-testid="data-testid-Icon" focusable="false" height="18" role="img" viewBox="0 0 16 16" width="18"><title id="search-835">search</title><g><path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"></path></g></svg></Nav.Link>
                </div>
                <div className="nav-link-13">
                  <Nav.Link href="#action1" id="nav-link-15" className="nav-link">Log in</Nav.Link>
                  <Nav.Link href="#action1" id="nav-link-15" className="nav-link">Live assistance</Nav.Link>
                </div>
              </div>

            </Nav>
            <Nav.Link href="#action1" className="nav-link nav-link-2 nav-link-11">Log in</Nav.Link>
            <Nav.Link href="#action1" className="nav-link nav-link-2 nav-link-11">Cabinet</Nav.Link>
            <Nav.Link href="#action1" className="nav-link nav-link-2 nav-link-16 nav-link-11">Cart</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
