import React from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';

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
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text
          style={{
            color: '#323232',
            fontSize: 14,

            fontWeight: 'bold'
          }}
        >
          {'Data: '}
        </Text>

        <Text>{despesa.dataDocumento}</Text>

        <Text
          style={{
            color: '#323232',
            fontSize: 14,

            fontWeight: 'bold'
          }}
        >
          {'N.º Documento: '}
        </Text>

        <Text>{despesa.numDocumento}</Text>
      </View>

      <View style={{ paddingTop: 2 }}>
        <Text
          style={{
            color: '#323232',
            fontSize: 14,

            fontWeight: 'bold'
          }}
        >
          {'Fornecedor(a): '}
        </Text>

        <Text style={{ color: '#323232' }}>{despesa.nomeFornecedor}</Text>
      </View>

      <View style={{ flexDirection: 'column', paddingTop: 2 }}>
        <Text
          style={{
            color: '#323232',
            fontSize: 14,

            fontWeight: 'bold'
          }}
        >
          {'Tipo Despesa: '}
        </Text>
        <Text style={{ color: '#323232' }}>{despesa.tipoDespesa}</Text>
      </View>

      <View style={{ flexDirection: 'row', paddingTop: 2 }}>
        <Text
          style={{
            color: '#323232',
            fontSize: 14,

            fontWeight: 'bold'
          }}
        >
          {'Tipo Documento: '}
        </Text>
        <Text style={{ color: '#323232' }}>{despesa.tipoDocumento}</Text>
      </View>

      <View style={{ flexDirection: 'row', paddingTop: 2 }}>
        <Text
          style={{
            color: '#323232',
            fontSize: 14,

            fontWeight: 'bold'
          }}
        >
          {'Valor: '}
        </Text>
        <Text style={{ color: '#323232' }}>{despesa.valorDocumento}</Text>
      </View>
    </Container>
  );
}
