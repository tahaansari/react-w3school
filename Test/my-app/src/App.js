import "./App.css";
// import MyRouter from './MyRouter';
// import MyUseState from './concepts/useState/MyUseState';
// import MyUseReducer from './concepts/useReducer/MyUseReducer';
// import MyUseContext from "./concepts/useContext/MyUseContext"
// import MyUseEffect from "./concepts/UseEffect/MyUseEffect"
// import MyUseRef from './concepts/useRef/MyUseRef';
// import MyMemo from "./concepts/memo/MyMemo";
// import MyUseCallback from "./concepts/useCallback/MyUseCallback";
import MyUseMemo from "./concepts/useMemo/MyUseMemo";

function App() {
  console.log("App.JS rendered");
  return (
    <div>
      {/* <h1>App.JS</h1> */}
      {/* <MyRouter/> */}
      {/* <MyUseState/> */}
      {/* <MyUseReducer/> */}
      {/* <MyUseContext/> */}
      {/* <MyUseEffect/> */}
      {/* <MyUseRef/> */}
      {/* <MyMemo /> */}
      {/* <MyUseCallback /> */}
      <MyUseMemo></MyUseMemo>
    </div>
  );
}

export default App;
