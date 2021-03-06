import React from 'react';
import{View,Text, TouchableOpacity, StyleSheet}from 'react-native'


const Button=({onprops,children})=>{
    return(
        <View>
            <TouchableOpacity
             style={styles.buttonStyle}
             onPress={onprops}
             >
                <Text style={styles.textStyle}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
       

    },
    textStyle:{
        
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
    }
})
export default Button;