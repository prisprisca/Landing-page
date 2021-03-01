// import React, { useEffect, useState } from 'react';
// // import './App.css';
// import List from './List';
// import ListLoading from './ListLoading';
// function MyMain() {
//   const LiistLoading = ListLoading(List);
//   const [appState, setAppState] = useState({
//     loading: false,
//     repos: null,
//   });

//   useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = `https://github.com/prisprisca`;
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((repos) => {
//         setAppState({ loading: false, repos: repos });
//       });
//   }, [setAppState]);
//   return (
//     <div className='App'>
//       <div className='container'>
//         <h1>My Repositories</h1>
//       </div>
//       <div className='repo-container'>
//         <LiistLoading isLoading={appState.loading} repos={appState.repos} />
//       </div>
     
//     </div>
//   );
// }
// export default MyMain;
