import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Child from './Child';

const Parent = () => {

    const [name, setName] = useState('Child_Name');
    const handleChange = (nname) => {
        alert('Child name changed to ' + nname);
        setName(nname);
    };
    return (
        <View style={styles.baseContainer}>
            <View style={styles.parentContainer}>
                <Text style={[{ fontSize: 20 }, {color: '#1f145c'}]}>Parent</Text>
                <Text>My child name is {name}</Text>
            </View>
            <Child name={name} handleChange={handleChange} />
        </View>
    );
};

const styles = StyleSheet.create({
    baseContainer: {
        padding: 5,
        marginTop: 10,
    },
    parentContainer: {
        backgroundColor: '#ffffff',
        padding: 5,
    },
});

export default Parent;
