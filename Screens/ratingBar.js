
import React from 'react';
import {View,Image,StyleSheet} from 'react-native';


const imgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
const imgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
const maxRating = [1, 2, 3, 4, 5]


    const RatingBar = ({rating}) => {
        let l=0;
        return (
            <View style={{ flexDirection: 'row' }} >
                {
                    maxRating.map((num) => {
                        return (
                            <View key={l++}>
                                <Image
                                    source={
                                        num <= (rating)
                                            ? { uri: imgFilled }
                                            : { uri: imgCorner }
                                    }
                                    style={styles.ratestyle}
                                />
                            </View>
                        )
                    })
                }
            </View>
        )
    }


    export default RatingBar;


    const styles=StyleSheet.create({

    ratestyle: {
        height: 20,
        width: 20,
        resizeMode: 'cover',
    }
    })