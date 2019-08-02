import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

import { material } from 'react-native-typography';

export default function CardDespesa({ despesa }) {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'N.º Documento'}</Text>

        <Text style={material.caption}>{despesa.numDocumento}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'Código lote'}</Text>
        <Text style={material.caption}>{despesa.codLote || 'N/A'}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'Número do Ressarcimento'}</Text>
        <Text style={material.caption}>
          {despesa.numRessarcimento || 'N/A'}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'Data'}</Text>

        <Text style={material.caption}>{despesa.dataDocumento}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'CNPJ do Fornecedor'}</Text>
        <Text style={material.caption}>
          {despesa.cnpjCpfFornecedor || 'N/A'}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'Parcela'}</Text>
        <Text style={material.caption}>{despesa.parcela || 'N/A'}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'Fornecedor(a)'}</Text>

        <Text style={material.caption}>{despesa.nomeFornecedor}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={material.body2}>{'Tipo Despesa'}</Text>

        <Text style={material.caption}>{despesa.tipoDespesa}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'Tipo Documento'}</Text>
        <Text style={material.caption}>{despesa.tipoDocumento}</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 2,
          alignItems: 'center'
        }}
      >
        <Text style={material.body2}>{'Valor'}</Text>
        <Text style={material.caption}>{despesa.valorDocumento}</Text>
      </View>
    </Container>
  );
}
