import React from 'react';
import EditorHeader from "../EditorHeader";
import {useParams} from "react-router-dom";
import EditBlocksContainer from "./EditBlocksContainer";

const Edit = () => {
    let params = useParams()
    return (
        <div>
            <EditorHeader pageId={Number(params.editId)}/>
            <EditBlocksContainer />
        </div>
    );
};

export default Edit;