import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../src/redux/operations';
import { getContacts } from '../../../src/redux/selectors';
import { toast } from 'react-toastify';

// const ContactForm = () => {
//     const dispatch = useDispatch();
//     const contacts = useSelector(getContacts);

//     function handlerSubmit(evt) {
//         evt.preventDefault();
//         const form = evt.target;
//         const name = form.name.value;
//         const phone = form.number.value;

//         if (
//             contacts.find(
//               contact => contact.name.toLowerCase() === name.toLowerCase()
//             )
//           ) {
//             return toast.warn(`${name} is alredy in contacts.`);
//           }
      
//             dispatch(addContact({ name, phone }));
//             toast.success(`${name} is added to the contact list!`);
//             form.reset();
      
//         }

        
//   return (
//     <form className={css.form} onSubmit={handlerSubmit} autoComplete="off">
//       <label className={css.label}>
//         Name
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           placeholder="Inna"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         />
//       </label>
//       <label className={css.label}>
//         Number
//         <input
//           className={css.input}
//           type="tel"
//           name="number"
//           placeholder="111-11-11"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={css.btn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }



// export default ContactForm;




const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

    function handlerSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const phone = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warn(`${name} is alredy in contacts.`);
    }

      dispatch(addContact({ name, phone }));
      toast.success(`${name} is added to the contact list!`);
      form.reset();

  }
   
  return (
      <form className={css.form} onSubmit={handlerSubmit} autoComplete="off">
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Inna"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="111-11-11"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }



export default ContactForm;
