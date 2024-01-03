import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
  margin-right: 20px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: bold;
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background-color: #0b69ff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`
export const Select = styled.select`
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px 10px 20px;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const SubContainer2 = styled.div`
  display: ${props => (props.show ? 'display' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  height: 500px;
  width: 500px;
  margin-left: 20px;
  margin-right: 20px;
`
export const SubHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size : ${props => props.fontSize}
  font-weight: 500;
  text-align: center;
`
