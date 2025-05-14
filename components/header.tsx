import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View style={styles.Background}>
            <Text>Header exemplo</Text>
            <Image source={image}/>
        </View>

    )
}

const styles = StyleSheet.create({
    Background: {
        backgroundColor: '#090909',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingVertical: 30
    }
})