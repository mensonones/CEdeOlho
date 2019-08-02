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

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showVerticalScrollIndicator: false
})`
  margin-top: 20px;
  padding: 0 1px;
`;

export const BtnMdInfo = styled.TouchableOpacity`
  width: 110;
  border: 1px #a1c1da;
  border-radius: 3px;
  margin-top: 20px;
  flex-direction: row;
  border-radius: 2;
  border-width: 1;
  text-align: center;
`;

export const BtnMdText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #323232;
  margin-left: 5px;
`;
