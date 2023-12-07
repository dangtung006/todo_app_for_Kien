import { StatusBar } from 'expo-status-bar';
import styles from "./AppStyle";
import { Text, View, Alert } from 'react-native';
import Todos from './components/pages/Todos';
import Form from './components/commons/form';
import { useState } from 'react';


export default function App() {
    const [tasks, setTasks] = useState([]);

    const onAddTask = (task) => {
        setTasks([...tasks, task]);
    }

    const onDeleteTask = (taskIdx) => {
        Alert.alert(
            "Title",
            "Alert Msg",
            [
                {
                    text: "OK",
                    onPress: () => {
                        let tasksTmp = [...tasks];
                        tasksTmp.splice(taskIdx, 1);
                        setTasks(tasksTmp);
                    },
                },

                {text: "Cancle",onPress: () => { }}
            ]
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.heading}>Todo List For Kien</Text>

                <Todos
                    onDeleteTask={onDeleteTask}
                    tasks={tasks}
                />

            </View>

            <View style={styles.input}>
                <Form
                    onAddTask={onAddTask}
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}