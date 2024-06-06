import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { read, update } from '../functions/product'

import { Button, MenuItem, Select, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from '@mui/material/InputLabel';

const FormEditProduct = () => {
    const params = useParams()
    const navigate = useNavigate()


    const [data, setData] = useState({
        name: '',
        grade: '',
        serie: '',
        runner_num: '',
        cons: '',
        release_date: '',
        detail: '',
        file: '',
        totalrating: '',
    })
    const [fileOld, setFileOld] = useState()

    useEffect(() => {
        loadData(params.id)
    }, [])

    const loadData = async (id) => {
        read(id)
            .then((res) => {
                setData(res.data)
                setFileOld(res.data.file)
            })
    }
    const handleChange = (e) => {
        if(e.target.name === 'file'){
            setData({
                ...data,
                [e.target.name]: e.target.files[0]
            })
        }else{
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        const formWithImageData = new FormData()
        for (const key in data){
            formWithImageData.append(key,data[key])
        }
        formWithImageData.append('fileOld',fileOld)
        update(params.id, formWithImageData)
        .then(res => {
                console.log(res)
                navigate('/admin/viewtable')
        })
        .catch((err) => console.log(err))
    }

    const grade = ['SD','HG','RG','MG','MGSD','PG','Mega Size','HIRM','1/100']
    const serie = ['Gundam','Zeta Gundam','Gundam ZZ','Victory Gundam','Unicorn','Thunderbolt','G Gundam','Wing','SEED','SEED Destiny','00','Sangokuden','AGE','Build Fighters','The Origin','Iron-Blooded Orphans','Hathaway','The Witch From Mercury']


    return (
        <div><h2>Gunpla Editor<EditIcon/></h2>

            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <TextField 
                id="outlined-basic" 
                label="name" 
                name='name'
                value={data.name}
                focused
                onChange={e => handleChange(e)}
                variant="outlined" 
                margin="normal"/>
            </div>

            <div>
                <InputLabel>Grade</InputLabel>
                <Select 
                // label="Grade" 
                name='grade'
                value={data.grade}
                focused
                defaultValue={data.grade}
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
                value={data.serie}
                focused
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
                value={data.runner_num}
                focused
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
                value={data.cons}
                focused
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
                value={data.detail}
                focused
                onChange={e => handleChange(e)}
                variant="outlined" 
                margin="normal"/>
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
                margin="normal"/>
            </div>

            <Button variant="contained" type='submit' >Submit</Button>
            </form>

        </div>
    )
}

export default FormEditProduct