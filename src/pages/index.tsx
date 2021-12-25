import type { NextPage } from 'next';
import { SavingGoalPage } from 'features';
import Header from 'features/Header';
import { font } from 'utils/font';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SavingGoalPage />
      <style jsx global>
        {font}
      </style>
    </>
  );
};

export default Home;
