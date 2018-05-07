import {StyleSheet} from 'react-native';

export default modal = StyleSheet.create({
    header:{
        width: '100%',
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body:{
        width: '100%',
        marginTop: '2%',
        alignItems: 'center',
    },
    text:{
        fontSize: 18,
        color: 'black',
        marginLeft: 5
    },
    footer:{
        width: '100%',
        height: 50,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        flexDirection: 'row'
    },
    button:{
        fontSize: 21,
        fontWeight: "bold",
        color: "#0091ea",
        marginTop: 15,
        marginBottom: 15,
        textAlign: "center",
        width: "96%"
      },
    item:{
        flexDirection: 'row',
        width: '94%',
        height: 50
    },
    message:{
        fontSize: 19,
        color: 'black',
        marginLeft: 5,
        textAlign: 'center'
    }
});

