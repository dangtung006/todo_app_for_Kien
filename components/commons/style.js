import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addTaskForm : {
        bottom : 20,
        padding : 10,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    taskInput : {
        height : 44,
        width : '85%',
        backgroundColor : "#fff",
        borderWidth : 2,
        borderColor : "#21a3d0",
        borderRadius : 8,
        paddingHorizontal : 10,
        paddingVertical : 10
    },

    addTaskBtn : {
        width : 44,
        height : 44,
        backgroundColor : "#21a3d0",
        justifyContent :'center',
        alignItems : "center",
        borderRadius : 44
    },

    textBtn : {
        color : "#fff",
        fontSize : 24,
        
    }
});

export default styles;