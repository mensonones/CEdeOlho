import React, { useState, useEffect } from 'react';
import { ImageBackground, View } from 'react-native';

import CardInfo from '~/components/CardInfo/index';

import { Title, List, Loading } from './styles';
import Container from '~/components/Container';

import { material } from 'react-native-typography';

import api from "~/services/api.js";

const Home = () => {
  const [deputados, setDeputados] = useState([]);

  async function loadData() {
    try {
      const response = await api.get(
        "/deputados?siglaUf=CE&ordem=ASC&ordenarPor=nome"
      );
      const { dados } = response.data;
      setDeputados(dados);
    } catch (err) {
      console.log(err);
    }
  }

  const _renderList = !deputados.length ? (
    <Loading />
  ) : (
    <List
      keyboardShouldPersistTaps="handled"
      data={deputados}
      onEndReached={loadData}
      onEndReachedThreshold={0.1}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <CardInfo data={item} />}
    />
  );

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container variant="column">
      <ImageBackground
        style={{ width: '100%', height: 80, justifyContent: 'center' }}
        source={require('~/assests/imgs/grana.jpg')}
      >
        <Title style={material.headlineWhite}>Deputados Federais</Title>
      </ImageBackground>
      {_renderList}
    </Container>
  );
};

Home.navigationOptions = () => ({
  header: null
});

export default Home;
