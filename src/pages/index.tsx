import type { NextPage } from 'next';
import Header from '../features/Header';
import SavingGoal from '../features/SavingGoal';
import { font } from '../utils/font';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SavingGoal />
      <style jsx global>
        {font}
      </style>
    </>
  );
};

export default Home;
