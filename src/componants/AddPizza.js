import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPizza() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      prize: '',
      image: '',
      description: ''
    },
    validationSchema: Yup.object({
      image: Yup.string()
        .url('Invalid URL format')
        .required('Image URL is required'),
      name: Yup.string()
        .min(5, 'Name must be at least 5 characters')
        .required('Name is required'),
      prize: Yup.number()
        .positive('Prize must be a positive number')
        .required('Prize is required'),
      description: Yup.string()
        .min(10, 'Description must be at least 10 characters')
        .required('Description is required')
    }),
    onSubmit: (values) => {
      axios.post('http://localhost:7000/pizza', values)
        .then(response => {
          navigate('/pizza-list');
        })
        .catch(error => {
          console.error('There was an error adding the pizza!', error);
        });
    }
  });

  const styles = {
    container: {
      backgroundColor: '#f0f4f8', // Light background color
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: 'auto',
      marginTop: '2rem',
    },
    heading: {
      color: '#333',
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      marginBottom: '0.5rem',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      marginBottom: '0.5rem',
      minHeight: '100px',
    },
    error: {
      color: 'red',
      fontSize: '0.875rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Pizza</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='image' style={styles.label}>Image URL</label>
          <input
            id='image'
            name='image'
            type='text'
            style={styles.input}
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image ? (
            <div style={styles.error}>{formik.errors.image}</div>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='name' style={styles.label}>Name</label>
          <input
            id='name'
            name='name'
            type='text'
            style={styles.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={styles.error}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='prize' style={styles.label}>Prize</label>
          <input
            id='prize'
            name='prize'
            type='number'
            style={styles.input}
            value={formik.values.prize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.prize && formik.errors.prize ? (
            <div style={styles.error}>{formik.errors.prize}</div>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='description' style={styles.label}>Description</label>
          <textarea
            id='description'
            name='description'
            style={styles.textarea}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div style={styles.error}>{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type='submit'
          style={styles.button}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPizza;
