import style from './App.scss';

import { SideNavigation, ContentContainer } from './components';
import { Outlet } from 'react-router-dom';

import {
  Layout
} from 'antd';

function App() {
  return (
    <Layout className="App">
      <SideNavigation />
      <ContentContainer />
    </Layout>
  );
}

export default App;
