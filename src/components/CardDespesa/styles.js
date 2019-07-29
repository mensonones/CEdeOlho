import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #4469b0;
  box-shadow: 1px 1px 1px #404354;
  shadow-radius: 1;
  elevation: 1;
`;

export const TituloJob = styled.Text`
  align-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const Empresa = styled.Text.attrs({
  numberOfLines: 2
})`
  color: #000;
  font-weight: bold;
  margin-top: 10px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const Local = styled.Text.attrs({
  numberOfLines: 2
})`
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const Details = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Detail = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const TipoVaga = styled.Text`
  border: 2px solid #01d38a;
  border-radius: 5px;
  width: 110;
  text-align: center;
  background-color: #8992c9;
  margin-left: 6px;
  font-weight: bold;
  color: #01d38a;
`;

export const TipoEstagio = styled.Text`
  border: 2px solid #efad90;
  border-radius: 5px;
  width: 110;
  text-align: center;
  background-color: #8992c9;
  margin-left: 6px;
  font-weight: bold;
  color: #efad90;
`;

export const DataJob = styled.Text`
  margin-top: 15px;
  width: 150;
  text-align: center;
  background-color: #8992c9;
  margin-left: 6px;
  font-weight: bold;
  color: #ffffff;
`;

export const BtnMd = styled.TouchableOpacity`
  width: 150;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  flex-direction: row;
  border-radius: 2;
  border-width: 1;
  text-align: center;
`;

export const BtnMdText = styled.Text`
  margin-bottom: 3px;
  font-size: 14px;
  color: #ebf5fd;
  margin-left: 14px;
`;
