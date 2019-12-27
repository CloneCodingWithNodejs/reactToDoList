import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from "./components/Form";
import {Helmet} from 'react-helmet';

class App extends Component {
    render() {
        return (
          <div className='application'>
          <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" /> 
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
        	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script> 
	        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script> 
          </Helmet>
          

          <TodoListTemplate form={<Form />}>
            템플릿 완성 
          </TodoListTemplate>
          
          </div>
        );
    }
}

export default App;
