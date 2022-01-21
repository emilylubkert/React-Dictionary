import FindWords from "./components/FindWords";
import ".//styles/App.css";

function App() {
  return (
    <div className="App">
      <h2 className="App-header">
        Owlbot Dictionary
      </h2>
      <p>
        Welcome to my simple React dictionary. This app uses the <a href="https://owlbot.info/" target="_blank" rel="noopener noreferrer">Owlbot</a> API to get definitions with images (if available). To use, simply type in a word and click the button or hit Enter.</p>
      <FindWords></FindWords>
    </div>
  );
}

export default App;
