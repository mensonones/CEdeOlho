import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import {
  Container,
  TituloJob,
  Empresa,
  Details,
  Detail,
  DataJob,
  Local
} from './styles';

export default function CardDespesa({ despesa }) {
  return (
    <Container>
      <TituloJob style={{ fontFamily: 'Quicksand' }}>
        {despesa.nomeFornecedo || 'Sem dados...'}
      </TituloJob>
    </Container>
  );
}
