import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, Like, Dislike } from './Actions/Actions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CounterApp = () => {
    const select = useSelector(state=> state.counter);
    const select2 = useSelector(state=> state.counter2);
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();

  return (
    <View style={styles.container}>
     <View style={styles.secondView}>

        <TouchableOpacity onPress={()=> dispatch(increment())}>
        <Text style={styles.increseFont}>Increment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={styles.printFont}>{select}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> dispatch(decrement())}>
        <Text style={styles.decreseFont}>Decrement</Text>
        </TouchableOpacity>

     </View>   

     <View style={styles.secondView}>

        <TouchableOpacity onPress={()=> dispatch2(Like())}>
        <FontAwesome5 name={'thumbs-up'} size={30} color='blue'/>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={styles.printFont}>{select2}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> dispatch2(Dislike())}>
        <FontAwesome5 name={'thumbs-down'} size={30} color='red'/>
        </TouchableOpacity>

        

     </View>  
    </View>
  );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },

    secondView:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around',
        width:250
    },

    increseFont:{
       color:'green',
       fontSize:20,
       fontWeight:'bold'
        
    },

    printFont:{
        fontSize:20,

    },

    decreseFont:{
        fontSize:20,
        color:'red',
        fontWeight:'bold'
    }


});

export default CounterApp;
