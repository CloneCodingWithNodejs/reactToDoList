import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from "./components/Form";
import {Helmet} from 'react-helmet';
import TodoItemList from './components/TodoItemList';
import Pallet from "./components/Pallet";

class App extends Component {

    id = 3 //이미 0,1,2가 존재하므로 3으로 설정 

    state = { 
      input: '',
      todos: [
        { id : 0, text : '리액트 소개', checked:false},
        { id : 1, text : 'React', checked:true},
        { id : 2, text : 'TodoList', checked:false}
      ],
      colors : [
        {id : 0 ,color : '#343a40'}, 
        {id: 1 , color : '#f03e3e'},
        {id: 2 , color: '#12b886'},
        {id: 3, color : '#228ae6'}
      ]
    }

    handleRemove = (id) => {
      const { todos } = this.state;
      this.setState({
        todos : todos.filter(todo=> todo.id !== id )

      });

    }
    
    handleToggle = (id) => {
      const { todos } = this.state;

      //파라미터로 받을 id를 갖고 몇번째 아이템인지 찾는다 
      const index = todos.findIndex(todo => todo.id === id);
      const selected = todos[index]; //선택한 객체 

      const nextTodos = [...todos]; //배열을 복사함 

      //기존의 값들을 복사하고 , checked 값만 덮어 쓰기
      nextTodos[index] = {
        ...selected,
        checked: !selected.checked
      };  

      this.setState({
        todos:nextTodos
      });


    }

    handleChange = (e) => {
      this.setState({
        input : e.target.value //인풋의 바뀔 값을 뜻함 
      });
    }

    handleCreate = () => {
      const {input, todos} = this.state;
      this.setState({
        input : '', //인풋을 비운다 
        //concat을 사용하여 배열에 추가함 
        todos: todos.concat({
          id:this.id++,
          text:input,
          checked:false
        })

      });

    }

    handleKeyPress = (e) => {
      //눌려진 키가 Enter면 handleCreate 호출 
      if(e.key === 'Enter'){
        this.handleCreate();
      }
    }
  
  
  render() {
      const {input, todos, colors} = this.state;
      const {
        handleChange,
        handleCreate,
        handleKeyPress
      } = this;


        return (
          <div className='application'>
          <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" /> 
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
        	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script> 
	        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script> 
          </Helmet>
          

          <TodoListTemplate form={<Form  value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} />}
                pallet =  {<Pallet colors={colors} key="100" />}>
            <TodoItemList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove} />
          </TodoListTemplate>
          
          </div>
        );
    }
}

export default App;
