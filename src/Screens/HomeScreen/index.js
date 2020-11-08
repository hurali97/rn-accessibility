import React, { Component } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import TextSemiBold from './../../Components/TextSemiBold/index';
import allImages from './../../assets/images/index';
import TextRegular from './../../Components/TextRegular/index';
import Variation from '../../Components/Variation';
import Button from '../../Components/Button';
import Toast from 'react-native-simple-toast';

export default class HomeScreen extends Component {


    _onAddToCart = () => {

        Toast.show("Added to the cart");

    }

    _onAddToFavorites = () => {

        Toast.show("Added to the favorites");

    }

    render() {
        return (
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            >


                <View style={styles.topView}>

                    <TextSemiBold style={styles.bearHeading}>
                        The Bear Who Stared
                    </TextSemiBold>


                    <View
                        style={styles.priceContainer}
                        accessible={true}
                        accessibilityLabel="Price is $ 8.99"
                    >

                        <TextSemiBold style={styles.currency}>
                            $
                    </TextSemiBold>

                        <TextSemiBold style={styles.price}>
                            8.99
                    </TextSemiBold>

                    </View>

                </View>

 
                    <Image
                        source={allImages.images.bearwhostared}
                        style={styles.bearwhostared}
                        // accessibilityRole="image"
                        accessibilityLabel="Title image of The Bear Who Stared"
                    /> 

                <View style={styles.authorContainer}>

                    <View
                        style={styles.rowAuthor}
                        accessible={true}
                        accessibilityLabel="written by Duncan Beedie"
                    >

                        <TextRegular>
                            by
                    </TextRegular>

                        <TextSemiBold style={styles.name}>
                            Duncan Beedie
                    </TextSemiBold>

                    </View>


                    <View
                        style={styles.row}
                        accessible={true}
                        accessibilityLabel="Average rating is 4.7"
                    >

                        <TextRegular style={styles.ratingText}>
                            4.7
                    </TextRegular>

                        <Image
                            source={allImages.images.rating}
                            style={styles.rating}
                        />

                    </View>

                </View>


                <TextRegular style={styles.description}>
                    A funny and charming picture book with heart from rising star Duncan Beedie - now shortlisted for the Waterstones Children's Book Prize 2017.
                    There once was a bear who liked to stare... and stare... and STARE.
                    Bear doesn't mean to be rude, he's just curious but too shy to say anything.
                </TextRegular>


                <View style={styles.variationRow}  >

                    <Variation
                        title='Kindle Edition'
                        price="$ 6.99"
                    />

                    <Variation
                        title='Board Book'
                        price="$ 6.99"
                    />
                    <Variation
                        title='Paperback'
                        price="$ 6.99"
                    />

                </View>


                <View style={[styles.row, { justifyContent: 'space-between' }]}>

                    <Button onPress={this._onAddToCart} />


                    <TouchableOpacity
                        style={styles.heartContainer}
                        activeOpacity={0.7}
                        accessibilityLabel="Add to favorites"
                        onPress={this._onAddToFavorites}
                    >

                        <Image
                            source={allImages.images.heart}
                            style={styles.heart}
                        />
                    </TouchableOpacity>

                </View>



            </ScrollView>
        )
    }
}
