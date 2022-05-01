import React, {FC} from 'react';
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import {Checkbox, ListItemAvatar, Switch} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {IWorkItem, IWorkItems} from "../../models/IWorkItem";
import Box from '@mui/material/Box';


interface WorkItemProps {
    workItem: IWorkItem;
}


const WorkItem: FC<WorkItemProps> = ({workItem}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return(
        <React.Fragment>
            <Grid item container
                  key={Date.now()}
                  xs={12}
                  sx={{height: 100 }}
                  direction="row"
                  alignItems="center">
                <Grid item xs={2} >
                    <img alt="case preview" width="120px" src={workItem.preview} />
                </Grid>
                <Grid item xs={2} >
                    {workItem.client}
                </Grid>
                <Grid item xs={3} >
                    {workItem.title}
                </Grid>
                <Grid item xs={1} >
                    <IconButton>
                        <EditIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                    <IconButton>
                        <PreviewIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={1} >
                    {workItem.status === 0 &&
                        <Switch {...label} />
                    }
                    {workItem.status === 1 &&
                        <Switch {...label} defaultChecked/>
                    }
                </Grid>
                <Grid item xs={2}>
                    <IconButton>
                        <DragIndicatorIcon
                            color="inherit"
                            sx={{ display: 'block' }}
                            // onTouchStart={(e) => {
                            //     e.preventDefault();
                            //     // document.body.style.overflow = "hidden";
                            //     onTouchStart(e);
                            // }}
                            // onMouseDown={(e) => {
                            //     console.log("mouseDown");
                            //     // document.body.style.overflow = "hidden";
                            //     onMouseDown(e);
                            // }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
            {/*<ListItem style={{ height: "120px"}}*/}
            {/*    secondaryAction={*/}
            {/*        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>*/}
            {/*            {workItem.status === 0 &&*/}
            {/*                <Switch {...label} />*/}
            {/*            }*/}
            {/*            {workItem.status === 1 &&*/}
            {/*                <Switch {...label} defaultChecked/>*/}
            {/*            }*/}
            {/*            <IconButton>*/}
            {/*                <EditIcon color="inherit" sx={{ display: 'block' }} />*/}
            {/*            </IconButton>*/}
            {/*            <IconButton>*/}
            {/*                <PreviewIcon color="inherit" sx={{ display: 'block' }} />*/}
            {/*            </IconButton>*/}
            {/*            <IconButton>*/}
            {/*                <DragIndicatorIcon color="inherit" sx={{ display: 'block' }}></DragIndicatorIcon>*/}
            {/*            </IconButton>*/}
            {/*        </Box>*/}
            {/*    }*/}
            {/*>*/}
            {/*    <ListItemAvatar>*/}
            {/*        <Avatar*/}
            {/*            sx={{width: 90, height: 90}}*/}
            {/*            alt={workItem.title}*/}
            {/*            src={workItem.preview}*/}
            {/*        />*/}
            {/*    </ListItemAvatar>*/}
            {/*    <ListItemText primary={workItem.client} secondary={workItem.title} />*/}
            {/*</ListItem>*/}
        </React.Fragment>
    )
};

export default WorkItem;