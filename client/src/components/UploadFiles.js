import React from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    link: {
      textDecoration: "none"
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
            <Button 
            variant="contained"
            color="secondary"
            startIcon={<PublishIcon />}
            type="submit">Upload</Button>
        </form>
    )
}
