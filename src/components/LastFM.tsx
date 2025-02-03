import React from 'react';
import './App.css';
import { useQuery } from '@tanstack/react-query';

function App() {
  // const userData = useQuery(
  //   ['users'], 
  //   () => {
  //     return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
  //   }
  // );

  // return (
  //   <div>
  //     <div>
  //       <button onClick={() => userData.refetch()}>Get Users</button>
  //       <div>
  //         {userData.isFetching && (
  //           <div>Fetching user data...</div>
  //         )}
  //         {userData.isError && (
  //           <div>{`Error get data!!!`}</div>
  //         )}
  //         {userData.data && userData.data.length > 0 && userData.data.map((user: any) => (
  //           <div>{user.name}</div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;