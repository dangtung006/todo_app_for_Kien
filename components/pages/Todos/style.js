import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    itemTodo: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    itemIndex: {
        width: 48,
        height: 36,
        backgroundColor: '#53d6f2',
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
    },

    itemIndexText: {
        color: "#fff",
        fontSize: 15
    },

    itemContent: {
        width: '80%',
        fontSize: 18,
        color: "#53d6f2"
    }
})

export default style