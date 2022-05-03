import React, {useMemo} from 'react';
import {pageAPI} from "../../services/PageService";
import WorkItem from "./WorkItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

const WorkContainer = () => {
    const {data: pages, error, isLoading} = pageAPI.useFetchAllPagesByTypeQuery('work')
    //pageAPI.endpoints.fetchAllPages.select(type)
    return (
        <List sx={{ width: '100%', maxWidth: 1, bgcolor: 'background.paper' }}>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка</h1>}
            {pages && pages.map(page => <WorkItem page={page} key={page.id} />)}
        </List>
    );
};

export default WorkContainer;