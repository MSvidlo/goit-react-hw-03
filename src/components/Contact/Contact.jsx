import css from './Contact.module.css'
const Contact = ({ name, number }) => {
    return (
        <div className={css.containerContact}>
        <div className={css.contacts}>
            <p>{name}</p>
            <p>{number}</p>
  
        </div>
        <button className={css.butnContact}>Delete</button></div>
)

}

export default Contact;