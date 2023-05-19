import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Layout, Space, Input } from 'antd';
import s from '../styles.module.css';
import ExitBtn from './ExitBtn';
import TodoBody from './TodoBody';
const { Content } = Layout;

const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const newTodo = {
      text: value,
      id: uuidv4(),
      complited: false
    };
    setTodos([...todos, newTodo]);
    setValue('');
  };
  const deleteTodo = (id) => {
    const deleteItem = [...todos].filter((todo) => todo.id !== id);
    setTodos(deleteItem);
  };
  
  const completedTodo = (id) => {
    const doneTodo = [...todos];
    doneTodo.map((todo) => {
      if (todo.id === id) {
        todo.complited = !todo.complited;
      }
      return todo;
    });
    setTodos(doneTodo);
  };
  const editTodo = (text, id) => {
    const edited = [...todos].map((todo) =>
      todo.id === id ? { ...todo, text: text } : todo
    );
    setTodos(edited);
  };
  return (
    <div>
      <Space direction="vertical" className={s.mainSpaceStyle}>
        <Layout className={s.layoutStyle}>
          <Space direction="vertical">
            <Content className={s.contentStyle}>
              <Space direction="vertical">
                <ExitBtn />
                <Space direction="horizontal">
                  <form onSubmit={addTodo}>
                    <Input
                      className={s.inputStyle}
                      type="text"
                      bordered="true"
                      placeholder="Add todo"
                      size="large"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <Button type="primary" size="large" htmlType="submit">
                      Add Todo
                    </Button>
                  </form>
                </Space>
              </Space>
            </Content>
          </Space>
          <div style={{ margin: '10px auto' }}>
            <TodoBody
              todos={todos}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              completedTodo={completedTodo}
            />
          </div>
        </Layout>
      </Space>
    </div>
  );
};

export default Todo;
