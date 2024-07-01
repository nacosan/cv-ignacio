import React from 'react';
import { NavBarContainer, Logo, NavItems, NavItem } from './navbar.styles';
import Image from 'next/image';
import { CVonline } from './assets';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Image src={CVonline} alt="Foto de CV" width={70} height={60} />
      <NavItems>
      <Link href="/" passHref>
          <NavItem as="a">Inicio</NavItem>
        </Link>        
        <Link href="/form" passHref>
          <NavItem as="a">Contacto</NavItem>
        </Link>   
       
        <Link href="/cvOnline" passHref>
          <NavItem as="a">Mis trabajos</NavItem>
        </Link>
      </NavItems>
    </NavBarContainer>
  );
};
