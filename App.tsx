// --------------------------------------------------------------------- Building
import React, { Component } from 'react';
import { Image, Keyboard } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import { Container, Item, Input, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, CardItem, Toast, Spinner, H1, H2, H3, View } from 'native-base';
export default class AnatomyExample extends Component {
  state;
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      // numero:false,
      hash:"",
      asunto:false,
      destino:false,
      expediente:false,
      fecha:false,
      spinner:false,
      error:false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  buscar = async () =>{
    Keyboard.dismiss();
    this.setState({spinner:true})
    this.setState({ error: false })
    const myRequest = new Request('http://alerta.exa.unne.edu.ar/alertafacena/public/api/expediente/'+this.state.hash,
      {
        method: 'POST',
      });

    fetch(myRequest)
      .then(response => response.json())
      .then(json => {
      this.setState({
        "asunto":json.asunto,
        "destino": json.destino,
        "expediente": json.expediente,
        "fecha": json.fecha,
      })
        this.setState({ spinner: false })
        
      })
      .catch(() => {///cuando no se encuentra el expediente

        this.setState({ spinner: false })
        this.setState({ error: true })
      }
       
      
      );


  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{marginTop: Constants.statusBarHeight}}>
        <Header style={{ backgroundColor:"#891f1f"}}>
          {/* <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left> */}
          <Body>
            <Title style={{alignSelf: 'center',}}>Seguimiento de Expedientes</Title>
          </Body>
        </Header >
   {/* ----------------------------------------------------------------------------- */}
        <Content >
          <CardItem cardBody>
            <Image style={{ height: 190, width: null, flex: 1 }} source={require('./assets/buscador.png')} />
          </CardItem>
          <Item >
            
            <Input maxLength={4} placeholder="Código de Seguimiento"  
              onChangeText={hash => this.setState({ hash })}
            value={this.state.hash}/>
              <Button primary onPress={this.buscar} >
                <Icon name="ios-search" />
              </Button>
            
          </Item>
          {this.state.expediente?
            <View style={{ alignItems: "center",}} >
              <H2></H2>
              <Item >
                <Text>
                    <H2 >Expediente: N° </H2> 
                    <H2 style={{fontWeight: 'bold'}}>{this.state.expediente}</H2>
                </Text>
              </Item>
              <H3></H3>
              <Item>

                <Text>{this.state.asunto}</Text>
              </Item>
            <Item>
                <Text>en {this.state.destino}  desde el {this.state.fecha}</Text>
            </Item>
              
              </View>
          :null
        }
        {
            this.state.spinner?
          <Spinner color="red"/>:
          null
        }
        {
          this.state.error?
          <H2>
            Expediente no encontrado
          </H2>
          :null
        }

        </Content>
       
        {/* ------------------------------------ */}
        {/* Expediente: N° 09-2019-00002

        S/ LA COMPRA DE DOS (2) FICHEROS MET?LICOS. DETALLA CARACTER?STICA DEL MISMO. ADJUNTA PRESUPUESTO.

        en ARCHIVO DEL DEPARTAMENTO DE MESA E/S desde el 2019-05-27 */}
{/* ----------------------------------------------------------------------------------- */}
        {/* <Footer style={{ backgroundColor: "#891f1f" }}>
          <FooterTab style={{ backgroundColor: "#891f1f" }}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

