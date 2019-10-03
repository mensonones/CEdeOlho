import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
  margin: 0 20px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { marginHorizontal: 20 },
  showVerticalScrollIndicator: false
})``;

export const Loading = styled.ActivityIndicator.attrs({
  color: 'black',
  size: 'large'
})`
  flex: 1
`;