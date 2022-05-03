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
import {IPage} from "../../models/IPage";
import {TBWA_ASSETS_URL, TBWA_SITE_URL} from "../../services/PageService";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";


interface WorkItemProps {
    page: IPage;
}


const WorkItem: FC<WorkItemProps> = ({page}) => {

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
                    <img alt="case preview" width="120px" src={TBWA_ASSETS_URL+page.preview} />
                </Grid>
                <Grid item xs={2} >
                    {page.client}
                </Grid>
                <Grid item xs={3} >
                    {page.title}
                </Grid>
                <Grid item xs={1} >
                    <Link className="button-link"
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/edit/${page.id}`}
                        key={page.id}
                    >
                        <IconButton>
                            <EditIcon color="inherit" sx={{ display: 'block' }} />
                        </IconButton>
                        <IconButton>
                            <PreviewIcon color="inherit" sx={{ display: 'block' }} />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={1} >
                    {!page.active &&
                        <Switch {...label} />
                    }
                    {page.active &&
                        <Switch {...label} defaultChecked/>
                    }
                </Grid>
                <Grid item xs={2}>
                    <IconButton>
                        <DragIndicatorIcon
                            color="inherit"
                            sx={{ display: 'block' }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
        {/*    <ListItem alignItems="flex-start" style={{ height: "150px"}}*/}
        {/*        secondaryAction={*/}
        {/*            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>*/}
        {/*                {!page.active &&*/}
        {/*                    <Switch {...label} />*/}
        {/*                }*/}
        {/*                {page.active &&*/}
        {/*                    <Switch {...label} defaultChecked/>*/}
        {/*                }*/}
        {/*                <IconButton>*/}
        {/*                    <EditIcon color="inherit" sx={{ display: 'block' }} />*/}
        {/*                </IconButton>*/}
        {/*                <IconButton>*/}
        {/*                    <PreviewIcon color="inherit" sx={{ display: 'block' }} />*/}
        {/*                </IconButton>*/}
        {/*                <IconButton>*/}
        {/*                    <DragIndicatorIcon color="inherit" sx={{ display: 'block' }}></DragIndicatorIcon>*/}
        {/*                </IconButton>*/}
        {/*            </Box>*/}
        {/*        }*/}
        {/*    >*/}
        {/*        <ListItemAvatar>*/}
        {/*            <Avatar*/}
        {/*                sx={{width: 90, height: 90}}*/}
        {/*                variant="square"*/}
        {/*                alt={page.title}*/}
        {/*                src={TBWA_ASSETS_URL+page.preview}*/}
        {/*            />*/}
        {/*        </ListItemAvatar>*/}
        {/*        <ListItemText*/}
        {/*            primary={*/}
        {/*                <Typography>{page.client}</Typography>*/}
        {/*            }*/}
        {/*            secondary={*/}
        {/*                <Typography>{page.title}</Typography>*/}
        {/*            }/>*/}
        {/*    </ListItem>*/}
        </React.Fragment>
    )
};

export default WorkItem;