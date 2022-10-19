import PupForm from "./components/PupForm";
import PupImage from "./components/PupImage";
import PupProvider from "./context/PupContext";

const App = () => (
  <PupProvider>
    <div id="app">
      <PupForm />
      <PupImage />
    </div>
  </PupProvider>
);

export default App;
