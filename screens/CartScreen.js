import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window')

const CartScreen = ({route}) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const products = route.params?.product;
        if (products && !cart.some((item) => item.id === products.id)) {
            setCart([...cart, products]);
        }
    }, [route.params?.product]);

    const placeOrder = () => {
        alert("Order placed successfully!");
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{uri: item.image}} style={styles.image}/>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>$ {item.price}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Your cart is empty</Text>}
            />
            <Button
                title="Place Order (COD)"
                onPress={
                    placeOrder
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: width * 0.2,
        height: height * 0.1,
        height: 50,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
    name: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
    price: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
})

export default CartScreen
