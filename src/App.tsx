import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './styles';
import { Contacts } from './components/Contacts';

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className='container'>
        <Contacts />
      </div>
    </Provider>
  );
}
