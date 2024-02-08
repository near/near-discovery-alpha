import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #212633; */
`;

export const Banner = styled.div`
  height: 120px;
  padding-top: 20px;
  margin-bottom: 40px;
  background-image: url('/images/marketing/banner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;
export const Img = styled.img``;

export const Intro = styled.div`
  font-size: 14px;
  color: #b1b4d6;
  text-align: center;
`;

export const Box = styled.div`
  margin: 0 14px;
  padding: 0 20px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, rgba(33, 38, 51, 1), rgba(27, 30, 39, 0));
`;
export const CapWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cap = styled.img`
  width: 98px;
  height: 88px;
  margin: -24px auto;
`;

export const Title = styled.div`
  margin: 50px 0 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background-image: linear-gradient(to right, #bec3ff, #f4ff62);
  -webkit-background-clip: text;
  color: transparent;
`;

export const Step = styled.div`
  color: #979abe;
  font-size: 16px;
  font-weight: 500;
  margin: 40px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Coin = styled.img`
  width: 20px;
  margin: 0 5px;
`;

export const Button = styled.div`
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(rgba(238, 243, 191, 1), rgba(233, 244, 86, 1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #14162b;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &.blur {
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }
`;

export const Tips = styled.div`
  background-color: rgba(44, 46, 62, 1);
  border-radius: 10px;
  height: 50px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding-top: 5px;
  &.blur {
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }
`;

export const Foot = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FootTxt = styled.span`
  font-size: 14px;
  color: rgba(151, 154, 190, 1);
  font-weight: 500;
  justify-content: center;
  border-bottom: 1px solid #979abe;
`;
export const Star = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 4px;
`;

export const Fresh = styled(motion.img)`
  width: 18px;
  height: 18px;
`;

export const Spinner = styled.img`
  width: 18px;
  height: 18px;
`;
