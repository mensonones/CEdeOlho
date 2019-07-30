import React, { useState, useEffect } from 'react';
import {
  Image,
  Modal,
  View,
  Share,
  Text,
  Alert,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';

import CardDespesa from '~/components/CardDespesa/index';

import { Container, TituloJob, List, Container2 } from './styles';

export default function CardInfo({ data }) {
  const [despesas, setDespesas] = useState([]);
  const [modalDespesa, setModalDespesa] = useState(false);

  async function getDespesas(id) {
    try {
      const response = await fetch(
        `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas`
      ).then(res => res.json());
      const json = await response;
      console.log(json.dados);
      setDespesas(json.dados);
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
          <Text
            style={{
              color: '#323232',
              fontSize: 14,
              margin: 2,
              fontWeight: 'bold'
            }}
          >
            {data.nome}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#323232', margin: 6 }}>
              {data.siglaPartido}
            </Text>
            <Text style={{ color: '#323232', margin: 6 }}>{data.siglaUf}</Text>
          </View>
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
