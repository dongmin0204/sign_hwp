import FileUpload from './Components/FileUpload';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      width: '100vw',
      minWidth: '100vw',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div
        style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <FileUpload />  
    </div>
    </div>
  );
}

export default App;
