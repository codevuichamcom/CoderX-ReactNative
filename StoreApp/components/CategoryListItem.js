import React from 'react';

import {View, Text, Image} from 'react-native';
import Skii from '../assets/skii.png'
export default function CategoryListItem(){
    return(
        <View>
            <Text>CategoryListItem</Text>
            <Image source={Skii}/>
        </View>
    );
}
