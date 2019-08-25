  // import React from 'react';
  // import { StyleSheet, Text, View } from 'react-native';

  // export default function App() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>HOLA</Text>
  //     </View>
  //   );
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });
// ---------------------------------------------------------------------
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
            <Title >    Seguimiento de
            Expedientes</Title>
          </Body>
        </Header >
   {/* ----------------------------------------------------------------------------- */}
        <Content >
          <Image style={{ width: 370, height: 200 }} source={require('./assets/buscador.png')} />
          
          <Item >
            <Left>
              <Button primary >
                <Icon name="ios-search" />
              </Button></Left>
            <Input placeholder="Código" />
            <Icon name="ios-folder" />
          </Item>
        </Content>
        <Content>
        </Content>
      
{/* ----------------------------------------------------------------------------------- */}
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      // <Container>
      //           <Content>
      //               // NativeBase default style
      //               <Button> Click Me! </Button>
      //           </Content>
      //       </Container>
    );
  }
}

// import React, { Component } from 'react';
// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
// export default class SearchBarExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header searchBar rounded>
//           <Item>
//             <Icon name="ios-search" />
//             <Input placeholder="Search" />
//             <Icon name="ios-people" />
//           </Item>
//           <Button transparent>
//             <Text>Search</Text>
//           </Button>
//         </Header>
//       </Container>
//     );
//   }
// }