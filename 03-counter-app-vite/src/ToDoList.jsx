import React from "react";
import { useState } from "react";

const ToDoList = () => {
    const [listFinished, setListFinished] = useState([]);
    const [listTasks, setListTasks] = useState([]);
    const [task, setTask] = useState("");

    const handlerAddHomeWork = (e) => {
        e.preventDefault();
        setListTasks([...listTasks, task]);
        setTask("");
    };
    const handleFinished = (finishedIndex) => {
        setListFinished([...listFinished, listTasks[finishedIndex]]);
        setListTasks(
            listTasks.filter((task, index) => index !== finishedIndex)
        );
    };

    const handleDelete = (finishedIndex) => {
        setListFinished(
            listFinished.filter((task, index) => index !== finishedIndex)
        );
    };
    return (
        <>
            <form onSubmit={handlerAddHomeWork}>
                <label htmlFor="">Tarea</label>
                <input
                    type="text"
                    value={task}
                    onChange={(text) => setTask(text.target.value)}
                />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                TAREAS
                {listTasks.map((task, index) => {
                    return (
                        <div key={index}>
                            <li>{task}</li>
                            <button onClick={() => handleFinished(index)}>
                                completar
                            </button>
                        </div>
                    );
                })}
            </ul>
            <ul>
                FINALIZADAS
                {listFinished.map((task, index) => {
                    return (
                        <div key={index}>
                            <li>{task}</li>
                            <button onClick={() => handleDelete(index)}>
                                Eliminar
                            </button>
                        </div>
                    );
                })}
            </ul>
        </>
    );
};

export default ToDoList;
