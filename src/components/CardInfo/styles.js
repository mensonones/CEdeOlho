import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #f2f5fb;
  margin-bottom: 15px;
  margin-top: 3;
  box-shadow: 10px 5px 5px black;

  elevation: 6;
`;

export const Container2 = styled(LinearGradient).attrs({
  colors: ['#a1c1da', '#f2f5fb'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  padding-top: ${20 + getStatusBarHeight(true)}px;
`;

export const TituloJob = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showVerticalScrollIndicator: false
})`
  margin-top: 20px;
  padding: 0 1px;
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
