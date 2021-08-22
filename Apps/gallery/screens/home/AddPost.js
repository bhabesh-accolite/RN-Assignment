import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { connect } from 'react-redux';
import { addImage } from '../../redux/actions/addImage';

const AddPost = ({ addImage, navigation }) => {
    const [imageSource, setImageSource] = useState(null);
    const postImage = () => {
        if (imageSource === null) {
            alert('No image selected');
        }
        else {
            addImage({ imageSource });
            navigation.navigate('insta-home');
        }
    };

    const selectImage = () => {
        let options = {
            title: 'You can choose one image',
            maxWidth: 256,
            maxHeight: 256,
            noData: true,
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
            },
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
                alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.assets[0].uri };
                setImageSource(source.uri);
            }
        });
    };
    return (
        <View
            style={[
                styles.flex,
                styles.centerContainer,
            ]}
        >
            <View style={styles.imageContainer}>
                {imageSource === null ? (
                    <Image
                        source={require('./../../data/place.png')}
                        style={styles.imageBox}
                        resizeMode="contain"
                    />
                ) : (
                    <Image
                        source={{ uri: imageSource }}
                        style={styles.imageBox}
                        resizeMode="contain"
                    />
                )}
            </View>
            <TouchableOpacity
                onPress={selectImage}
                style={styles.selectButtonContainer}
            >
                <Text style={styles.selectButtonTitle}>Pick an image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={postImage}
                style={styles.selectButtonContainer}
            >
                <Text style={styles.selectButtonTitle}>Post</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectButtonContainer: {
        margin: 20,
        borderRadius: 5,
        backgroundColor: '#1f145c',
    },
    selectButtonTitle: {
        padding: 10,
        fontSize: 18,
        color: '#fff',
    },
    imageContainer: {
        marginVertical: 20,
    },
    imageBox: {
        width: 300,
        height: 200,
    },
});

const mapDispatchToProps = dispatch => ({
    addImage: payload => dispatch(addImage(payload)),
});


export default connect(null, mapDispatchToProps)(AddPost);
