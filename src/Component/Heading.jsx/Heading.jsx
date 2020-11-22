import React, { } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


const ButtonLink = styled.button
    `
    color: white;
     width: 70px;
     height: 30px;
     border:none;
     border:solid 2px white;
     border-radius: 5px;
     background: rgba(255, 255, 255,0);
     font-size: 10px;
     margin: 10px 20px;
     &:hover {
        border:solid 2px black;
        cursor: pointer;
        
      }
`

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,

    },
    title: {
        flexGrow: 0.9,
        fontFamily:
            'roboto',
        fontWeight: 70,
    },
}));


export default function Heading() {
    const classes = useStyles();

    return (
        <div>
            <AppBar style={{ background: '#58ABF6' }}>
                <Toolbar >
                    <Typography className={classes.title}>
                        Kelompok 40
                    </Typography>
                    <ButtonLink>
                        <a href="https://www.linkpicture.com/q/Hanif_1.jpg">Link</a>
                    </ButtonLink>
                    <ButtonLink >
                        <a href="https://www.linkpicture.com/q/faiza.jpg">Link</a>
                    </ButtonLink>
                </Toolbar>
            </AppBar>
        </div>

    )
}

