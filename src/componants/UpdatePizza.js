import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

function UpdatePizza(){
    const {id}=useParams();
    const navigate = useNavigate();
    const [pizza,setPizza]=useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:7000/pizza/${id}`)
            .then( response => {
                setPizza(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the vehicle data !' , error);
            }
            )
    }, [id])
    
   const formik = useFormik(
      {
        enableReinitialize:true,
            
        initialValues: {
            image: pizza?.image || '',
            name: pizza?.name || '',
            prize: pizza?.prize || '',
            description: pizza?.description || '',
            
        },
          validationSchema : Yup.object({
             image: Yup.string().required('Image URL is required'),
              name: Yup.string().min(5, 'Name must be at least 5 characters').required('Name is required'),            
            description :Yup.string().required('Description is required')
          }),
          onSubmit:(values)=>{
              
              axios.put(`http://localhost:7000/pizza/${id}`, values)
                .then(response=>{
                    navigate('/pizza-list')
                })
                .catch(error=>{
                    console.log(error);
                })
        }
    }
  )
  return (
    <div className='container mt-4'>
        <h2>update Pizza</h2>
        <form onSubmit={formik.handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='image' className='form-label'>Image URL</label>
                <input id='image' name='image' type='text' className='form-control' value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
            </div>
            {
                formik.touched.image && formik.errors.image ? <div className='text-danger'>{formik.errors.image}</div>:null
            }
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input id='name' name='name' type='text' className='form-control' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
        </div>
        {
         formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div>:null
        }
      <div className='mb-3'>
                <label htmlFor='prize' className='form-label'>Prize</label>
                <input id='prize' name='prize' type='prize' className='form-control' value={formik.values.prize} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
        </div>
        {
         formik.touched.prize && formik.errors.prize ? <div className='text-danger'>{formik.errors.prize}</div>:null
        }

<div className='mb-3'>
                <label htmlFor='description' className='form-label'>Description</label>
                <input id='description' name='description' type='text' className='form-control' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
        </div>
        {
         formik.touched.description && formik.errors.description ? <div className='text-danger'>{formik.errors.description}</div>:null
        }
 
 
<button type='submit' className='btn btn-primary'>Add </button>

</form>

</div>

)

}

export default UpdatePizza;