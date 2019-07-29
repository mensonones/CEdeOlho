import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#4469B0', '#4469B0'],
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

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 2px solid ${props => (props.error ? '#FF7272' : '#FFF')};
`;

export const Submit = styled.TouchableOpacity`
  background: #1c92d2;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showVerticalScrollIndicator: false
})`
  margin-top: 20px;
  padding: 0 1px;
`;
