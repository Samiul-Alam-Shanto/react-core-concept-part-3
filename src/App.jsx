import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UncontrolledField from "./components/UncontrolledField/UncontrolledField";

function App() {
  return (
    <>
      <h1>Explore Input Form</h1>

      {/* <SimpleForm /> */}

      {/* <FormAction /> */}

      {/* <ControlledField /> */}

      {/* <UncontrolledField /> */}

      {/* <HookForm /> */}

      {/* <ProductManagement /> */}

      <FamilyTree></FamilyTree>

      <div>
        <h2 className="text-4xl font-black text-red-500">
          Different Method of getting data from Input Field
        </h2>
        <ol
          className="list-decimal"
          style={{ fontWeight: "500", fontSize: "20px", color: "lime" }}
        >
          <li>e.target.[name of the input field].value </li>
          <li>
            use form action and formData in the action handler.
            formData.get('name of the input field')
          </li>
          <li>
            Controlled component--one per each field-- use state on change of
            the field. useful to dynamically handle error
          </li>
          <ul>
            <li>Handle all controlled field on one state object</li>
            <li>
              const[formData,setFormData]=useState({"{"} name: '', password: '',
              phone : '' {"}"})
            </li>
          </ul>
          <li>uncontrolled -- using useRef</li>

          <li>Using custom Hook and hook form</li>
        </ol>
      </div>
      <div>
        <h2>Context API Rules</h2>
        <ol>
          <li>Create a context using createContext with default value</li>
          <li>Make sure to export the context to be used in other files</li>
        </ol>
      </div>
    </>
  );
}

export default App;
