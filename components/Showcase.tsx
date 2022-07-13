import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
    {
        title: "Bebidas",
        data: ["Latinha", "Garrafa", "Não Alcoólicas"]
    },
    {
        title: "Carnes",
        data: ["Linguiça Bovina", "Picanha", "Costela", "Fraldinha", "Maminha", "Asinhas de Frango", "Cupim"]
    },
    {
        title: "Acompanhamentos",
        data: ["Pão de Alho", "Asinhas de Frango", "Bacon", "Linguiça calabresa"]
    },
    {
        title: "Utilitários",
        data: ["Carvão", "Álcool", "Espeto"]
    }
];

const Item = (obj: { title: string }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{obj.title}</Text>
    </View>
);

const ShowCase = () => (
    <SafeAreaView style={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title} </Text>
            )}
        />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: '#18183C',
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: '#4971FF',
        color: '#E5DFF0'
    },
    title: {
        fontSize: 24,
        color: '#E5DFF0'
    }
});

export default ShowCase;