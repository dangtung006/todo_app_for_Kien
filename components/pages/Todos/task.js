import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';

const TaskItem = ({ styles, task, onDeleteTask }) => {

    const handleDeleteTask = () => {
        if (onDeleteTask) {
            return onDeleteTask();
        }
    }
    return (
        <TouchableOpacity
            onPress={handleDeleteTask}
        >
            <View style={styles.itemTodo}>
                <View style={styles.itemIndex}>
                    <Text style={styles.itemIndexText}>01</Text>
                </View>
                <Text style={styles.itemContent}>{task}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default TaskItem;