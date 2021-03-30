import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import ApplyButton from "./ApplyButton";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import VertButtonSet from "../components/VertButtonSet";

import { SocialLink, SocialProvider } from '@mui-treasury/components/socialLink';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 30,
    boxShadow: '0 8px 16px 0 #BDC9D7',
  },
  headerText: {
    fontSize: '1.5rem', 
    [theme.breakpoints.down("md")]:{
        fontSize: '1.2rem'
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  content: {
      padding: "0%",
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        avatar={
          <Avatar aria-label="recipe" src={props.photoUrl} className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h5" component="h2" className={classes.headerText}>
        Welcome {props.name}! Thank you for supporting ASF.
      </Typography>}
      />
      <Divider />
      <CardContent className={classes.content}>
          <VertButtonSet />
      </CardContent>
      <CardActions disableSpacing>
            <IconButton aria-label="share">
                    <ShareIcon onClick={event =>  window.location.href='https://www.australianshepherdsfurever.org/'} />
            </IconButton>
            <SocialProvider>
                <SocialLink
                    brand={'FacebookCircle'}
                    href={'https://www.facebook.com/AustralianShepherdsFurever/'}
                />
                <SocialLink
                    brand={'Instagram'}
                    href={'https://www.instagram.com/australianshepherdsfurever/'}
                />
                <SocialLink
                    brand={'Twitter'}
                    href={'https://twitter.com/asf_lovers'}
                />
                <SocialLink
                    brand={'Pinterest'}
                    href={'https://www.pinterest.com/asfurever/_created/'}
                />
            </SocialProvider>
      </CardActions>
    </Card>
  );
}
