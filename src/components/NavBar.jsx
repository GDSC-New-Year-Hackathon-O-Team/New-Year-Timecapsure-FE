import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import image1 from "../menu_110986.png";
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const slideInLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  color: none;
  position: fixed;
  margin: 0px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.shouldHideBackButton ? 'flex-end' : 'space-between')};
  width: 100%;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 0px;
  z-index: 2;
  
`;

const BackButton = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  padding: 0px;
  font-size: 45px;
`;

const DropdownMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: #E6E6E6;
  margin: 0px;
  color: white;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  animation: ${slideInLeft} 0.5s ease;
`;

const MenuItem = styled.div`
    width: 60%;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(255, 255, 255);
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navigate = useNavigate(); // useNavigate를 사용하여 뒤로 가기 기능 추가

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const goBack = () => {
    navigate(-1); // useNavigate를 사용하여 뒤로 가기
  };

  const closeMenu = (e) => {
    if (menuButtonRef.current && menuButtonRef.current.contains(e.target)) {
      return;
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const shouldHideBackButton = window.location.pathname === '/map';

  return (
    <div>
      <NavbarContainer>
        <ButtonContainer>
        {!shouldHideBackButton && <BackButton onClick={goBack}>{'<'}</BackButton>}          
        <MenuButton ref={menuButtonRef} onClick={toggleMenu}>
        <img src={image1} alt="Button Image"style={{ width: '45px', padding:'0px', margin: '0px'}} />
          </MenuButton>
        </ButtonContainer>
      </NavbarContainer>

      {isMenuOpen && (
        <DropdownMenu isOpen={isMenuOpen}>
          <MenuItem>
            <StyledLink to="/map">맵으로 이동</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/list">타임캡슐목록</StyledLink>
          </MenuItem>
        </DropdownMenu>
      )}
    </div>
  );
};

export default NavBar;
