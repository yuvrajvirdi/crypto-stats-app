import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

function Stats({ 
        currencyName, 
        price, 
        change, 
        changePercentage, 
        prevClose, 
        open, 
        dayRange, 
        yearRange, 
        marketCap,
        circulatingSupply, 
        volume, 
    }){
        return (
            <View style={styles.container}>
                <Text style={styles.name}>
                    {currencyName}
                </Text>
                <Text style={styles.price}>
                    Current Price: ${price}
                </Text>
                <Text style={styles.change}>
                    Change: {change} ({changePercentage})
                </Text>
                <Text style={styles.stat}>
                    Previous Close: {prevClose}
                </Text>
                <Text style={styles.stat}>
                    Open: {open}
                </Text>
                <Text style={styles.stat}>
                    Day's Range: {dayRange}
                </Text>
                <Text style={styles.stat}>
                    Year's Range: {yearRange}
                </Text>
                <Text style={styles.stat}>
                    Market Cap: {marketCap}
                </Text>
                <Text style={styles.stat}>
                    Circulating Supply: {circulatingSupply}
                </Text>
                <Text style={styles.stat}>
                    Volume: {volume}
                </Text>
            </View>
        )
        
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    name: {
        fontSize: 30,
    }, 
    
})

export default Stats;