import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#a1c1da', '#f2f5fb'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 3;
  padding: 0 20px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showVerticalScrollIndicator: false
})`
  margin-top: 20px;
  padding: 0 1px;
`;
