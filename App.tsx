// --------------------------------------------------------------------- Building
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Item, Input, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, CardItem } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          {/* <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left> */}
          <Body>
            <Title >Seguimiento de Expedientes</Title>
          </Body>
        </Header >
   {/* ----------------------------------------------------------------------------- */}
        <Content >
          <Image style={{ width: 370, height: 200 }} source={require('./assets/buscador.png')} />
          <Item >
            
              <Button primary >
                <Icon name="ios-search" />
              </Button>
            <Input placeholder="Código" />
            <Icon name="ios-folder" />
          </Item>
        </Content>
        <Content>
          
            <Text >Expediente:</Text>
            <Text >Descripciones:</Text>
         
        </Content>
        {/* ------------------------------------ */}
        {/* Expediente: N° 09-2019-00002

        S/ LA COMPRA DE DOS (2) FICHEROS MET?LICOS. DETALLA CARACTER?STICA DEL MISMO. ADJUNTA PRESUPUESTO.

        en ARCHIVO DEL DEPARTAMENTO DE MESA E/S desde el 2019-05-27 */}
{/* ----------------------------------------------------------------------------------- */}
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

