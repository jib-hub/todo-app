import React from 'react';

import Wrapper from '../containers/Wrapper'
import ShowTasks from '../common/ShowTasks';

import InputTodo from '../common/InputTodo';

class InsertItem extends React.Component {
    render(){
      return (
      <div>
      <Wrapper width="boxed">
      <InputTodo addTodo={this.props.addTodo}/>
      </Wrapper>
      <Wrapper width="boxed">
        <ShowTasks
          todos={this.props.todos}
          remove={this.props.remove}
        />
      </Wrapper>
      </div>
      )
    }
};


export default InsertItem;
