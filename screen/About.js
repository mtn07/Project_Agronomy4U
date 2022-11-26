import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const AboutPage = () => {
    return (
        <ScrollView>
            <View style={{margin: 10}}>
            <Text style={styles.header}>เกี่ยวกับ</Text>
            <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.text1}><FontAwesome5 name="info"/> แอพนี้จัดทำขึ้นโดยกลุ่ม Agronomy4U</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.text1}><FontAwesome5 name="book"/> ในรายวิชา Mobile Device Programming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem1}>
            <Text style={styles.text1}><FontAwesome5 name="lightbulb"/> วัตถุประสงค์ "เพื่อส่งเสริมและพัฒนาเกษตรกรให้สามารถพึ่งพาตนเองได้ ในด้านการศึกษา วิจัย และพัฒนาการในด้านการเกษตร และ การอารักขาพืช</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 25,
        height: 200,
        backgroundColor: 'white',
        padding: 20,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 15,
    },

    gridItem1: {
        flex: 1,
        margin: 25,
        height: 350,
        backgroundColor: 'white',
        padding:30,
        paddingBottom: 70,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 15,
  
    },
    text1: {
        fontSize: 20
    },
    gridItemS:{
        flex: 1,
        margin: 25,
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        marginTop: 50,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 15,
  
    },
    switch:{
        position: 'absolute',
        top: '45%',
        right: 50
    },
    header:{
        fontSize: 30,
        marginTop: 10,
        marginLeft: 20
    }
})

export default AboutPage;
