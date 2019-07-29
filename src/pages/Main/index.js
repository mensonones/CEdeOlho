import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Picker, Animated } from 'react-native';

import CardInfo from '~/components/CardInfo/index';

import { Container, Title, List } from './styles';

export default function Home() {
  const [deputados, setDeputados] = useState([]);

  async function loadData() {
    try {
      const response = await fetch(
        'https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=CE&ordem=ASC&ordenarPor=nome'
      ).then(res => res.json());
      const json = await response;
      console.log(json);
      setDeputados(json.dados);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (deputados.length > 0) {
    return (
      <Container>
        <Title style={{ fontFamily: 'Quicksand' }}>Deputados Federais</Title>

        <List
          keyboardShouldPersistTaps="handled"
          data={deputados}
          onEndReached={loadData}
          onEndReachedThreshold={0.1}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CardInfo data={item} />}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <Title style={{ fontFamily: 'Quicksand' }}>Deputados Federais</Title>

        <ActivityIndicator
          color="#e7eaf6"
          size="large"
          style={{
            flex: 1,
            height: 80
          }}
        />
      </Container>
    );
  }
}
