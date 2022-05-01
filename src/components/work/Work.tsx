import React, {useEffect, useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import DraggableList from "react-draggable-list";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WorkItem from "./WorkItem";
import List from "@mui/material/List";
import {IWorkItem, IWorkItems} from "../../models/IWorkItem";

import {userSlice} from "../../store/reducers/UserSlice";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchUsers} from "../../store/reducers/ActionCreators";
import PostContainer from "../PostContainer";


const Work = () => {
    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    },[])

    type IWorkItems = IWorkItem[];
    const [workItems, set_workItems] = useState<IWorkItems>([
        {id: 1, preview: 'https://tbwa.ru/assets/work/cover-b.jpg',  client: 'Nissan', title: 'Запуск нового Nissan Pathfinder в России', status: 1,  link: ''},
        {id: 2, preview: 'https://tbwa.ru/assets/work/%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_cover.jpg',  client: 'Delivery Club', title: 'Велосипедизация', status: 1, link: ''},
        {id: 3, preview: 'https://tbwa.ru/assets/work/%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-flex2.jpg', client: 'Flexity', title: 'Пространство, чтобы процветать', status: 0, link: ''},
        {id: 4, preview: 'https://tbwa.ru/assets/work/CORAL-TRAVEL-%D1%8F%D1%85%D1%82%D0%B0-2.jpg', client: 'Coral Travel', title: 'Яхта. Океан. Ты', status: 1, link: ''},
        {id: 5, preview: 'https://tbwa.ru/assets/work/cover-b.jpg',  client: 'Nissan', title: 'Запуск нового Nissan Pathfinder в России', status: 1,  link: ''},
        {id: 6, preview: 'https://tbwa.ru/assets/work/%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_cover.jpg',  client: 'Delivery Club', title: 'Велосипедизация', status: 1, link: ''},
        {id: 7, preview: 'https://tbwa.ru/assets/work/%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-flex2.jpg', client: 'Flexity', title: 'Пространство, чтобы процветать', status: 0, link: ''},
        {id: 8, preview: 'https://tbwa.ru/assets/work/CORAL-TRAVEL-%D1%8F%D1%85%D1%82%D0%B0-2.jpg', client: 'Coral Travel', title: 'Яхта. Океан. Ты', status: 1, link: ''},

    ])

    const onWorkItemsChange = (newWorkItems:IWorkItems) => {
        set_workItems(newWorkItems);
    };

    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <Typography color="inherit" variant="h6" align="center">
                                Work cases
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by client or title"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Add new case
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <List sx={{ width: '100%', maxWidth: 1, bgcolor: 'background.paper' }}>
                {/*{!workItems &&*/}
                {/*    <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">*/}
                {/*        No work cases yet*/}
                {/*    </Typography>*/}
                {/*}*/}
                {/*{workItems.map(workItem =>*/}
                {/*    <WorkItem workItem={workItem} key={workItem.id} />*/}
                {/*)}*/}

                {/*{isLoading && <h1>Идет загрузка</h1>}*/}
                {/*{error && <h1>{error}</h1>}*/}
                {/*{JSON.stringify(users, null, 2)}*/}

                <PostContainer />
            </List>
        </React.Fragment>
    );
};

export default Work;