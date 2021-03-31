import React from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2),
    },
    link: {
      textDecoration: "none"
    }, 
    buttonContainer: {
      flexGrow: '1', 
      flexWrap: "wrap",
      direction: "row"
  }
  }));

export default function UploadFiles(props) {

    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault();
        props.handleSubmit();
    }
    return (
        <form onSubmit={handleSubmit}>
          <Grid container className={classes.buttonContainer}>
            <Grid Item>
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<PostAddIcon />}
            component="label"
             >
               {props.buttonText}
               <input type="file" hidden multiple={props.multiple} ref={props.fileInput} />
            </Button>
            </Grid>
            <Grid Item>
            <Button 
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<PublishIcon />}
            type="submit">Upload</Button>
            </Grid>
          </Grid>
        </form>
    )
}
