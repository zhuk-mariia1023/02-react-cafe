import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import type { Votes } from '../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';

const [votes, setVotes] = (useState<Votes> = {
  good: 0,
  neutral: 0,
  bad: 0,
});
export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}
