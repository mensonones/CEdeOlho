import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #ffff;
  margin-bottom: 15px;
  margin-top: 3;
`;

export const TituloJob = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Empresa = styled.Text.attrs({
  numberOfLines: 2
})`
  color: #ffffff;
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

export const BtnDespesa = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const BtnMdText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #323232;
  margin-left: 5px;
`;
