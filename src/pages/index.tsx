import type { NextPage } from 'next';
import Header from '../features/Header';
import SavingGoal from '../features/SavingGoal';
import GlobalStyle from '../utils/globalStyles';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SavingGoal />
    </>
  );
};

export default Home;
