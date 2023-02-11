import styled from "styled-components";

const IconContainer = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0px;
  color: white;
  width: 50px;
  height: 50px;
  textdecoration: "none";
`;

const GithubLink = styled.a`
  text-decoration: none;
  :visited {
    color: white;
  }
`;

const GithubIcon = () => {
  return (
    <IconContainer>
      <GithubLink
        className="fab fa-github fa-2x"
        href="https://github.com/nic-w/hiragana-quiz"
        target="_blank"
      />
    </IconContainer>
  );
};

export default GithubIcon;
