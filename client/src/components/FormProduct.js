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
    const tam = 'tam roitai'
    const [data, setData] = useState([])
    const [form, setForm] = useState({})

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
        if(e.target.name === 'file'){
            setForm({
                ...form,
                [e.target.name]: e.target.files[0]
            })
        }else{
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }
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

    const grade = ['SD','HG','RG','MG','MGSD','PG','Mega Size','HIRM','1/100']
    const serie = ['Gundam','Zeta Gundam','Gundam ZZ','Victory Gundam','Unicorn','Thunderbolt','G Gundam','Wing','SEED','SEED Destiny','00','Sangokuden','AGE','Build Fighters','The Origin','Iron-Blooded Orphans','Hathaway','The Witch From Mercury']

    return (
        <div>
            {/* HTML */}
            <h2>Gunpla Adder<AddIcon/></h2>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>

            <div>
                <TextField 
                id="outlined-basic" 
                label="name" 
                name='name'
                onChange={e => handleChange(e)}
                variant="outlined" 
                margin="normal"
                />
            </div>

            <div>
                <InputLabel>Grade</InputLabel>
                <Select 
                // label="Grade" 
                name='grade'
                onChange={e => handleChange(e)} 
                style={{width:'130px'}}
                >
                    {grade.map((item)=>
                    <MenuItem value={item}>{item}</MenuItem>
                    )}
                </Select>
            </div>

            <div>
                <InputLabel>Serie</InputLabel>
                <Select 
                // label="Serie" 
                name='serie'
                onChange={e => handleChange(e)} 
                autoWidth
                >
                    {serie.map((item)=>
                    <MenuItem value={item}>{item}</MenuItem>
                    )}
                </Select>
            </div>

            <div>
                <TextField 
                id="outlined-basic" 
                label="Runner Numbers" 
                type='Number'
                name='runner_num'
                onChange={e => handleChange(e)}
                variant="outlined" 
                margin="normal"
                />
            </div>

            <div>
                <TextField 
                id="outlined-basic" 
                label="Consideration" 
                name='cons'
                onChange={e => handleChange(e)}
                variant="outlined" 
                margin="normal"
                />
            </div>

            {/* <div>
                <TextField 
                id="outlined-basic" 
                label="release_date" 
                name='release_date'
                onChange={e => handleChange(e)}
                variant="outlined" 
                margin="normal"
                />
            </div> */}

            <div>
                <TextField 
                id="outlined-basic" 
                label="detail" 
                name='detail'
                onChange={e => handleChange(e)}
                variant="outlined" 
                margin="normal"
                />
            </div>

            <div>
                <TextField 
                type="file"
                id="outlined-basic" 
                label="file" 
                name='file'
                onChange={e => handleChange(e)}
                variant="outlined"
                focused 
                margin="normal"
                />
            </div>

                <Button variant="contained" type='submit' >Submit</Button>
            </form> 
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Serie</TableCell>
                        <TableCell>Runner Numbers</TableCell>
                        <TableCell>Consideration</TableCell>
                        <TableCell>Release Date</TableCell>
                        <TableCell>Detail</TableCell>
                        <TableCell>File</TableCell>
                        <TableCell>Ratings</TableCell>
                        <TableCell>action</TableCell>
                        <TableCell>edit</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {
                        data ? data.map((item, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.grade}</TableCell>
                                <TableCell>{item.serie}</TableCell>
                                <TableCell>{item.runner_num}</TableCell>
                                <TableCell>{item.cons}</TableCell>
                                <TableCell>{item.release_date}</TableCell>
                                <TableCell>{item.detail}</TableCell>
                                <TableCell>{item.file}</TableCell>
                                <TableCell>{item.totalrating}</TableCell>
                                <TableCell>
                                    <DeleteIcon
                                    color="error"
                                    onClick={() => handleRemove(item._id)}/>
                                </TableCell>
                                <TableCell>
                                    <Link to={'/edit/' + item._id}>
                                        <EditIcon/>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                            : null
                    }
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
}

export default FormProduct