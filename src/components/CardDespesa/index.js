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

import { material } from 'react-native-typography';

export default function CardDespesa({ despesa }) {
  return (
    <Container>
      <View style={{ flexDirection: 'column', paddingTop: 2 }}>
        <Text style={material.body2}>{'N.º Documento'}</Text>

        <Text style={material.caption}>{despesa.numDocumento}</Text>
      </View>

      <View style={{ flexDirection: 'column', paddingTop: 2 }}>
        <Text style={material.body2}>{'Data'}</Text>

        <Text style={material.caption2}>{despesa.dataDocumento}</Text>
      </View>

      <View style={{ flexDirection: 'column', paddingTop: 2 }}>
        <Text style={material.body2}>{'Fornecedor(a)'}</Text>

        <Text style={material.caption2}>{despesa.nomeFornecedor}</Text>
      </View>

      <View style={{ flexDirection: 'column', paddingTop: 2 }}>
        <Text style={material.body2}>{'Tipo Despesa'}</Text>
        <Text style={material.caption2}>{despesa.tipoDespesa}</Text>
      </View>

      <View style={{ flexDirection: 'column', paddingTop: 2 }}>
        <Text style={material.body2}>{'Tipo Documento'}</Text>
        <Text style={material.caption2}>{despesa.tipoDocumento}</Text>
      </View>

      <View style={{ flexDirection: 'column', paddingTop: 2 }}>
        <Text style={material.body2}>{'Valor'}</Text>
        <Text style={material.caption2}>{despesa.valorDocumento}</Text>
      </View>
    </Container>
  );
}
