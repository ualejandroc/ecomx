import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List,
  Card,
  CardItem,
  Thumbnail,
  Image

} from "native-base";

import {Dimensions} from 'react-native'

import styles from "./styles";
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");



const datas = [
  {
    route: "Header1",
    text: "Only Title"
  },
  {
    route: "Header2",
    text: "Icon Buttons"
  },
 
];

class HeaderNB extends Component {
  // eslint-disable-line
   deviceWidth = Dimensions.get("window").width;

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Informacion</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          
        </Content>

       
        <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
               <Thumbnail source={logo} /> 
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                {/* <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: this.deviceWidth / 1.18,
                    marginVertical: 5,
                    flex: 1
                  }}
                  source={{uri:cardImage}}
                />  */}
                <Text>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

      </Container>
    );
  }
}

export default HeaderNB;
