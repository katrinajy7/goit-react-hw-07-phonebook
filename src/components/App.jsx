// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template trial no.5
//     </div>
//   );
// };



import React from 'react';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/react-toastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { selectIsLoading, selectError } from '../../src/redux/selectors';
import { fetchContacts } from '../../src/redux/operations';
import { ColorRing } from 'react-loader-spinner';

document.title = 'Phonebook_redux';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);

return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm/>
  <h2>Contacts</h2>
  {isLoading && ! error  && (
    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
  )}
    <Filter/>
    <ContactList/>
    <ToastContainer
      font-size="15px"
      position=" top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnclick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
  </div>
);
};

export default App;