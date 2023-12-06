import logo from './logo.svg';
import './App.css';
import Layout from './components/mainLayout.tsx';
import FirstCorp from './components/firstCorp.tsx';

function App() {
  return (
    <div className='wrapper'>
<Layout>
<FirstCorp></FirstCorp>

</Layout>
</div>
  );
}

export default App;
