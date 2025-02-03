import logo from './logo.svg';
import './style.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Layout from './components/Layout';
import APIPractice from './components/APIPractice.tsx';
import ReactQueryPractice from './components/ReactQueryPractice.tsx';
import {QueryClient, QueryClientProvider, useQueryClient} from '@tanstack/react-query'

function App() {
  const queryClient = useQueryClient();
  return (
    
    <div>
      <Layout />
    </div>

  );
}

export default App;
