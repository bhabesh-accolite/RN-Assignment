import React from 'react';
import Parent from './Parent';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const COLORS = { primary: '#1f145c', white: '#fff' };

const Home = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
                Parent Child Communication
            </Text>
            <Parent />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 32,
    }
});


export default Home;