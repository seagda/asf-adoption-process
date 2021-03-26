import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  header: {
    fontSize: '20pt'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h5" component="h2">
        Welcome, ${props.name}! Thanks for supporting ASF.
      </Typography>}
      />
      <Divider />
      <CardContent>
          <VertButtonSet />
      </CardContent>
      <CardActions disableSpacing>
         <IconButton aria-label="share">
            <ShareIcon toLink="https://www.australianshepherdsfurever.org/" />
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
        
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
