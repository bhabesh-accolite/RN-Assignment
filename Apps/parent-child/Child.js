import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const Child = ({ name, handleChange }) => {
    const [newName, setNewName] = useState('');

    return (
        <View style={[{ marginTop: 15 },
        { marginBottom: 30 },
        { padding: 5 }]}>
            <View style={[{ backgroundColor: '#fff' }, { marginBottom: 35 }]}>
                <Text style={styles.title}>Child</Text>
                <Text>My name is {name}</Text>
                <TextInput
                    placeholder="enter new name"
                    onChangeText={text => setNewName(text)}
                    value={newName}
                />
            </View>

            <TouchableOpacity
                title="change name" onPress={() => {
                    handleChange(newName);
                    setNewName('');
                }}
                style={styles.button}
                activeOpacity={0.2}
            >
                <Text style={styles.text}>change name</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#1f145c',
    },
    baseContainer: {
        marginBottom: 30,
        backgroundColor: '#ffffff',
        padding: 5
    },
    text: {
        color: '#fff',
        fontSize: 20,
      },
    button: {
        backgroundColor: '#1f145c',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Child;