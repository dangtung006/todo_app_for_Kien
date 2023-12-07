import React from "react";
import styles from "./style";
import { ScrollView } from 'react-native';
import TaskItem from "./task";

const Todos = ({ tasks, onDeleteTask }) => {
    return (
        <ScrollView style={styles.listTodo}>
            {
                tasks.map((task, idx) => {
                    return <TaskItem
                        onDeleteTask={()=>onDeleteTask(idx)}
                        key={idx}
                        task={task}
                        styles={styles}
                    />
                })
            }


        </ScrollView>
    )
}

export default Todos;