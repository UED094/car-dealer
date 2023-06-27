import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div>
      <h1> Hello from react!</h1>
        <SignIn />
        <SignUp />
    </div>
  );
}

export default App;
