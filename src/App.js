import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createDrawerNavigator, createAppContainer  } from "react-navigation";


import Pagex from "./screens/cupage/pagex";
import Home from "./screens/home/";
import Anatomy from "./screens/anatomy/";
import NHCard from "./screens/card/";
import NHCardItemButton from "./screens/card/carditem-button";
import NHCardImage from "./screens/card/card-image";
import NHLayout from "./screens/layout/";
import IconsFooter from "./screens/cupage/iconsFooter";
import PostForm from "./screens/cupage/postForm";
import CreateProd from "./screens/cupage/createProd";
import Header from "./screens/Header/";
import HeaderSpan from "./screens/Header/header-span";
import Default from "./screens/button/default";
import IconFooter from "./screens/footer/iconFooter";
import SideBar from "./screens/sidebar";
//




const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Anatomy: { screen: Anatomy },
    Header: { screen: Header },
    HeaderSpan: { screen: HeaderSpan},
    NHCard: { screen: NHCard },
    NHCardItemButton: { screen: NHCardItemButton },
    NHCardImage: { screen: NHCardImage },
    NHLayout: { screen: NHLayout },
    Pagex:{screen:Pagex},
    PostForm :{screen:PostForm},
    CreateProd :{screen:CreateProd},
    //
   

  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },

    Default: { screen: Default },
  
    //
    HeaderSpan: { screen: HeaderSpan },
    IconFooter: { screen: IconFooter },
    IconsFooter: { screen: IconsFooter },
    Pagex: { screen: Pagex },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
