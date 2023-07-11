import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";


function App() {
  return (
    <>
      <div style={{ padding: "50px 100px" }}>
        <Heading />
        <Paragraph />
      </div>
      <div className="d-flex" style={{ padding: "0 100px" }}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
      </>
  );
}

export default App;
