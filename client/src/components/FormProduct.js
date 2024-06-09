// rafce
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';


import {
    remove,
    create,
    getdata

} from '../functions/product'



const FormProduct = () => {
    // javascript
    const [data, setData] = useState([])
    const [form, setForm] = useState({})
    const [preview, setPreview] = useState(null);
    

    useEffect(() => {
        // code
        loadData()

    }, [])

    const loadData = async () => {
        getdata()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    const handleChange = (e) => {
        if (e.target.name === 'file') {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                setForm({
                    ...form,
                    [e.target.name]: file,
                });
                setPreview(URL.createObjectURL(file));
            } else {
                alert('Please select a valid image file');
            }
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleDeleteFile = () => {
        setForm({
            ...form,
            file: 'noimage.jpg'
        });
        setPreview(null); // Remove the preview URL when the image is deleted
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formWithImageData = new FormData()
        for (const key in form){
            formWithImageData.append(key,form[key])
        }
        create(formWithImageData)
            .then(res => {
                console.log(res.data)
                loadData()
            })
            .catch((err) => console.log(err))
    }
    const handleRemove = async (id) => {
        remove(id)
            .then((res) => {
                console.log(res)
                loadData()
            })
            .catch((err) => console.log(err))
    }

    const gradeOptions = ['SD','HG','RG','MG','MGSD','PG','Mega Size','HIRM','1/100'];
    const serieOptions = ['Gundam','Zeta Gundam','Gundam ZZ','Victory Gundam','Unicorn','Thunderbolt','G Gundam','Wing','SEED','SEED Destiny','00','Sangokuden','AGE','Build Fighters','The Origin','Iron-Blooded Orphans','Hathaway','The Witch From Mercury'];
  
    return (
        <div>
      <h2>Gunpla Adder</h2>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name='name'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Grade:</label>
          <select name="grade" onChange={handleChange}>
            <option value="">Select Grade</option>
            {gradeOptions.map((grade, index) => (
              <option key={index} value={grade}>{grade}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Serie:</label>
          <select name="serie" onChange={handleChange}>
            <option value="">Select Serie</option>
            {serieOptions.map((serie, index) => (
              <option key={index} value={serie}>{serie}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Height:</label>
          <input
            type="number"
            name='height'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Runner Numbers:</label>
          <input
            type="number"
            name='runner_num'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Consideration:</label>
          <input
            type="text"
            name='cons'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Detail:</label>
          <input
            type="text"
            name='detail'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>File:</label>
          <input
            type="file"
            name='file'
            onChange={handleChange}
            accept="image/*"
          />
          {preview && (
                    <div>
                        <img src={preview} alt="Preview" style={{ maxWidth: '100px' }} />
                        <button type="button" onClick={handleDeleteFile}>Delete Image</button>
                    </div>
                )}
        </div>
        <button type='submit'>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Serie</th>
            <th>Height</th>
            <th>Runner Numbers</th>
            <th>Consideration</th>
            <th>Release Date</th>
            <th>Detail</th>
            <th>File</th>
            <th>Ratings</th>
            <th>Action</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.grade}</td>
              <td>{item.serie}</td>
              <td>{item.height}</td>
              <td>{item.runner_num}</td>
              <td>{item.cons}</td>
              <td>{item.release_date}</td>
              <td>{item.detail}</td>
              <td>
                {item.file === 'noimage.jpg' ? <img src={`${process.env.REACT_APP_API}/uploads/noimage2.jpg`} style={{ maxWidth: '100px' }}/> : (
                <img src={`${process.env.REACT_APP_API}/uploads/${item.file}`} style={{ maxWidth: '100px' }} />
                )}
              </td>
              <td>{item.totalrating}</td>
              <td>
                <button onClick={() => handleRemove(item._id)}>Delete</button>
              </td>
              <td>
                <Link to={'/admin/gunpla/edit/' + item._id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default FormProduct