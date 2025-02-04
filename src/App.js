
import './style.css';
import Layout from './components/Layout';
import {useQueryClient} from '@tanstack/react-query'

function App() {
  const queryClient = useQueryClient();
  return (
    
    <div>
      <Layout />
    </div>

  );
}

export default App;
