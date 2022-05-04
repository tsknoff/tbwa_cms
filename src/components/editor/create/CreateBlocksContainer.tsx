import React, {useState} from 'react';
import {Navigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {pageAPI} from "../../../services/PageService";
import {IPage} from "../../../models/IPage";
import MySelect from "../UI/MySelect";
import MyTextField from "../UI/MyTextField";
import MyButton from "../UI/MyButton";


const CreateBlocksContainer = () => {
    const [createPage, data] = pageAPI.useCreatePageMutation()

    const [pageToCreate, setPageToCreate] = useState({
        title: '',
        type: '',
    } as IPage)

    const [redirect, setLocation] = useState(false)

    function setType(type: string){
        setPageToCreate({...pageToCreate, type: type})
    }

    function setTitle(title: string){
        setPageToCreate({...pageToCreate, title: title})
    }

    function onSubmit(){
        if(pageToCreate.title !== '' && pageToCreate.type !== ''){
            createPage(pageToCreate)
            console.log(data)
            setLocation(true)
        }
    }

    return (
        <>
            {redirect && <Navigate replace to='/work' />}
            <Grid container padding={5} direction="column" spacing={3}>
                <Grid item>
                    <MySelect label={"Page type"} menuItems={["Single", "Work", "Hero"]} onChange={setType} />
                </Grid>
                <Grid item>
                    <MyTextField label={"Page title"} onChange={setTitle} />
                </Grid>
                <Grid item>
                    <MyButton value={"Create"} label={"Create"} onClick={onSubmit}  />
                </Grid>
            </Grid>
    </>
    );
};

export default CreateBlocksContainer;