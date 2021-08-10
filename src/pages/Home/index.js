import React from 'react';

import Header from '../../components/Home/Header';
import Sidebar from '../../components/Home/Sidebar';
import Tags from '../../components/Home/Tags';
import List from '../../components/Home/List';

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Tags />
      <List />
    </div>
  );
}
