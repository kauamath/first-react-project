import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height: 100%;
  min-height: 100vh;

`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 250px);
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;

  color: #eeeeee;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;
  padding-left: 25px;

  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  border: none;
  outline: none;

  margin-bottom: 34px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 80px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  cursor: pointer;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;