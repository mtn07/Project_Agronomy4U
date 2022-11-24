import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mainpage from "../screen/Main";
import Menu from "../screen/Menu";
import MenuProtect from "../screen/MenuProtect";
import BookMark from "../screen/BookMark";
import SettingPage from "../screen/SettingPage";
import NewsWebsite from "../screen/NewsWebsite";
import AlertPage from "../screen/Alert";
import Contact from "../screen/Contact";
import Showinfo from "../screen/ShowInfo";
import NewsPage from "../screen/News"
import PtFromP from "../screen/PtFromP";
import PtFromD2 from "../screen/PtFromD2";
import Ptflowers from "../screen/Ptflowers";
import Ptrice from "../screen/Ptrice";
import Ptplant from "../screen/Ptplant";
import Pthelp from "../screen/Pthelp";

const Tab = createBottomTabNavigator();
const MainNavigation = createNativeStackNavigator();
const MenuNavigation = createNativeStackNavigator();
const MenuPNavigation = createNativeStackNavigator();


function MenuNavigator() {
  return (
    <MenuNavigation.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName="Menu"
    >
      <MenuNavigation.Screen name="Menu" component={Menu}/>
      <MenuNavigation.Screen name="NewsPage" component={NewsPage}/>
      
      <MenuNavigation.Screen name="PtFromP" component={PtFromP}/>
      <MenuNavigation.Screen name="PtFromD2" component={PtFromD2}/>
      <MenuNavigation.Screen name="Ptflowers" component={Ptflowers}/>
      <MenuNavigation.Screen name="Ptrice" component={Ptrice}/>
      <MenuNavigation.Screen name="Ptplant" component={Ptplant}/>
      <MenuNavigation.Screen name="Pthelp" component={Pthelp}/>
      <MenuNavigation.Screen name="ShowInfo" component={Showinfo}/>

      <MenuNavigation.Screen name="MenuProtect" component={MenuProtect}/>
      <MenuNavigation.Screen name="AlertPage" component={AlertPage}/>
    </MenuNavigation.Navigator>
  );
}

function MenuPNavigator() {
  return (
    <MenuPNavigation.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName="MenuProtect"
    >
      <MenuPNavigation.Screen name="MenuProtect" component={MenuProtect}/>
      <MenuPNavigation.Screen name="Fruits" component={PtFromP}/>
      <MenuPNavigation.Screen name="PtFromD2" component={PtFromD2}/>
      <MenuPNavigation.Screen name="Ptflowers" component={Ptflowers}/>
      <MenuPNavigation.Screen name="Ptplant" component={Ptplant}/>
      <MenuPNavigation.Screen name="Pthelp" component={Pthelp}/>
      <MenuPNavigation.Screen name="ShowInfo" component={Showinfo}/>
    </MenuPNavigation.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainNavigation.Navigator
      screenOptions={{ headerShown: true}}
      initialRouteName="Home"
    >
      <MainNavigation.Screen name="Home" component={Mainpage} />
      <MainNavigation.Screen name="Menu" component={MenuNavigator} />
      <MainNavigation.Screen name="News" component={NewsWebsite}/>
      <MainNavigation.Screen name="Contact" component={Contact}/>
      <MainNavigation.Screen name="ShowInfo" component={Showinfo}/>
    </MainNavigation.Navigator>
  );
}


const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
});

export default function MyNavigator() {
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor: 'snow'}} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarIcon: () => <FontAwesome5 style={styles.icon} name="home" />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 style={styles.icon} name="bookmark" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 style={styles.icon} name="cog" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
