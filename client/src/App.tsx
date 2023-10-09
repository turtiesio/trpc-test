import * as React from 'react';

import { trpc } from './trpc';

// const App = () => {
//   const fetchUser = async () => {
//     // const user = await trpc.user.getUserById.query('0');
//     const user = await trpc.image.getImage.query({ url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' });

//     console.log(user);
//   };

//   React.useEffect(() => {
//     fetchUser();
//   }, []);

//   return <></>;
// };

const App = () => {
  const { data, isLoading } = trpc.image.getImage.useQuery({ url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' });

  if (isLoading) return <div>Loading ...</div>;

  return <div>{data?.url}</div>;
};


export default App;
