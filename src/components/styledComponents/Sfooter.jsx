import styled from 'styled-components';

const StyledFooter = styled.div`
  .contact {
    display: flex;
    background-image: url('https://media.istockphoto.com/photos/dice-with-communication-symbols-on-keyboard-picture-id1161344489?k=6&m=1161344489&s=612x612&w=0&h=1I4Q-mgrNzEMJZVmX9XoVpYKh4H0WH03n03LL3FPyds=');
    background-size: cover;
    height: 15vh;
    font-size: 1vw;
  }

  .bloc {
    background-color: rgb(0, 217, 255);
    width: 30vw;
    height: 15vh;
    padding-left: 0.8vw;
  }

  .bloc h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2vw;
    padding-top: 0.4vh;
    margin-bottom: 1vh;
  }

  .bloc p {
    color: white;
    font-weight: bold;
    justify-content: space-around;
    background-color: black;
    color: white;
    font-size: 1vw;
  }

  .link {
    color: white;
    margin-right: 10vw;
  }

  h3 {
    display: inline;
  }

  .logo {
    display: flex;
    margin-top: 1vh;
  }

  .logo p {
    margin-left: 1.5vw;
  }

  .logo img {
    width: 1.5vw;
    height: 1.5vh;
  }
`;

export default StyledFooter;