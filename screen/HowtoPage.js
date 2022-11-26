import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const HowtoPage = () => {
    return (
      <ScrollView>
        <View style={{margin: 10}}>
            <Text style={styles.header}>คำแนะนำการใช้งานแอป</Text>
            <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.text1}><FontAwesome5 name="search"/> แถบค้นหาสามารถค้นหาได้ทั้งชื่อพืช และชื่อวัชพืช, โรค</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.text1}><FontAwesome5 name="bookmark"/> ปุ่ม BookMark จะรวบรวมหน้าที่บันทึกไว้ สามารถกดปุ่ม Bookmark อีกครั้งเพื่อลบบันทึก</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.text1}><FontAwesome5 name="bug"/> หน้าวินิจฉัยศัตรูพืชเบื้องต้น ให้ตอบตามอาการที่พบเจอ เมื่อตอบครบ จะปรากฏสาเหตุเบื้องต้น</Text>
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

export default HowtoPage;
