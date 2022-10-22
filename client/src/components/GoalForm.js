import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

const GoalForm = (props) => { 

    const {action, category, submitAction, goal, setGoal, error, formButton} = props;
  
  
  
    const onChangeHandler = (e) => {
      console.log(e.target.name, ' = ', e.target.value);
      setGoal({...goal, [e.target.name]: e.target.value }); 
    }
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      submitAction();
    }
  
    return ( 
      <>
      <Container className="form mb-3 col-md-5">
        <h3>{action} {category} Goal</h3>
        <Form onSubmit={ onSubmitHandler } >
          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control type='textarea' row={3} name='description' onChange={onChangeHandler} value={goal.description} required/>
            {error.description && 
              <Form.Text className='text-danger'>{error.description.message}</Form.Text>
            }
          </Form.Group>
          <Form.Group controlId='completedBy'>
            <Form.Label>Completed By</Form.Label>
            <Form.Control type='date' name='completedBy' onChange={onChangeHandler} value={goal.completedBy}/>
            {error.completedBy && 
              <Form.Text className='text-danger'>{error.completedBy.message}</Form.Text>
            }
          </Form.Group>
          
            <Button variant="outline-dark" type="submit" className='mt-3'>{formButton}</Button>
          
        </Form>
      </Container>
      </>
    )
  }
  export default GoalForm;