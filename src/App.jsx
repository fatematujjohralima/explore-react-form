
import './App.css'
import FamilyTree from './Components/FamilyTree/FamilyTree'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import ControlledField from './ControlledField/ControlledField'
import FormAction from './FormAction/FormAction'
import UnControlledField from './UnControlledField/UnControlledField'

function App() {
  

  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm></SimpleForm>
      <h1>Using FormAction</h1>
      <FormAction></FormAction>
      <h1>Using ControlledField</h1>
      <ControlledField></ControlledField>
      <h1>Using UnControlledField</h1>
      <UnControlledField></UnControlledField>
      <FamilyTree></FamilyTree>
    
    </>
  )
}

export default App
