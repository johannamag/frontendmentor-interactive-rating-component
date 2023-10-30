import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--very-dark-blue);
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 12px;
  color: var(--white);
`;

const Link = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: var(--white);

  &:hover {
    color: var(--orange);
  }
`;

export default function Footer() {
  return (
    <Container>
      Challenge by:
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      Coded by:
      <Link href="www.johannamagdalena.com" target="_blank">
        Johanna Magdalena
      </Link>
    </Container>
  );
}
