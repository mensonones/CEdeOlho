import React, { useState, useEffect } from 'react';
import {
  Image,
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  Linking
} from 'react-native';

import CardDespesa from '~/components/CardDespesa/index';

import { material } from 'react-native-typography';

import { Container, BtnMdInfo, BtnMdText, List, Container2 } from './styles';

import api from '~/services/api.js';

export default function CardInfo({ data }) {
  const [despesas, setDespesas] = useState([]);
  const [modalDespesa, setModalDespesa] = useState(false);

  async function getDespesas(id) {
    try {
      const response = await api.get(`/deputados/${id}/despesas`);
      const { dados } = response.data;

      setDespesas(dados);
      setModalDespesa(!modalDespesa);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => getDespesas(data.id)}>
      <Container>
        <View style={{ paddingTop: 1 }}>
          <Image
            style={{
              width: 100,
              height: 100,
              paddingTop: 25,
              borderRadius: 50,
              position: 'absolute'
            }}
            source={{
              uri: data.urlFoto
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 90,
            width: 150,
            alignSelf: 'flex-end'
          }}
        >
          <Text style={material.body2}>{data.nome}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={material.body2}>{data.siglaPartido}</Text>
            <Text style={material.body2}>{' - '}</Text>
            <Text style={material.body2}>{data.siglaUf}</Text>
          </View>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <BtnMdInfo
            onPress={() => Linking.openURL(`mailto:${data.email || 'N/A'}`)}
            title="E-mail deputado"
          >
            <BtnMdText>
              <Text style={material.caption}>{'E-mail deputado'}</Text>
            </BtnMdText>
          </BtnMdInfo>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalDespesa}
          onRequestClose={() => {
            setModalDespesa(!modalDespesa);
          }}
        >
          <Container2>
            <List
              keyboardShouldPersistTaps="handled"
              data={despesas}
              keyExtractor={item => String(item.numDocumento)}
              renderItem={({ item }) => <CardDespesa despesa={item} />}
            />
          </Container2>
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
