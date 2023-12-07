import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from "./style";

const Form = ({ onAddTask }) => {

    const [task, setTask] = useState('');

    const handleAddTask = () => {

        if (!task.length) {
            alert('Vui long nhap ten cong viec');
            return false;
        }

        if (onAddTask) {
            setTask("");
            Keyboard.dismiss();
            return onAddTask(task);
        }
    }

    const handleChangeText = (text) => {
        setTask(text)
    }

    return (
        <View style={styles.addTaskForm}>
            <TextInput
                value={task}
                onChangeText={(text) => handleChangeText(text)}
                placeholder='Your Task'
                style={styles.taskInput}>
            </TextInput>

            <TouchableOpacity
                onPress={handleAddTask}
            >
                <View style={styles.addTaskBtn}>
                    <Text style={styles.textBtn}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Form;