import { StyleSheet } from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },

    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 30
    },

    heading: {
        fontSize: 24,
        color: color.primary,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default styles;