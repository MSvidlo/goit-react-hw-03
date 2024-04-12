import {Formik, Form, Field } from 'formik';

const ContactForm = () => {
    return (
       <Formik initialValues={{name:''}} onSubmit={() => {}}>
      <Form>
			<Field type="text" name="name" />
			<Field type="number" name="number" />
			<button type="submit">Add Contact</button>
			</Form>
    </Formik>
    )
    
}

export default ContactForm