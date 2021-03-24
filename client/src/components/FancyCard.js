import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallMade from '@material-ui/icons/CallMade';

import { Row, Column, Item } from '@mui-treasury/components/flex';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.4rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#28527A',
  },
  overline: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 16,
    fontWeight: 500,
    color: '#495869',
  },
}));

const BasicProfile = props => {
  const styles = useBasicProfileStyles();
  return (
    <Row {...props}>
      <Item><Avatar className={styles.avatar}>{props.currentlyWithFirstName?.split("").shift()}</Avatar></Item>
      <Item position={'middle'} pl={{ sm: 0.5, lg: 0.5 }}>
        <Typography className={styles.overline}>CURRENTLY WITH</Typography>
        <Typography className={styles.name}>{props.currentlyWithFirstName} {props.currentlyWithLastName}</Typography>
        <Typography className={styles.name}>{props.currentlyWithEmail}</Typography>
      </Item>
    </Row>
  );
};

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: '1.4rem',
    color: '#122740',
  },
  subheader: {
    fontSize: '1rem',
    color: '#495869',
    margin: '0.4rem',
  },
}));

const CardHeader = props => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={'middle'}>
        <Typography className={styles.title}>
          <b>{props.dogName}'s Current Report Card</b>
        </Typography>
        <Typography className={styles.subheader}>
        Current Status: {props.dogStatus}
        </Typography>
        <Typography className={styles.subheader}>
        Latest Behavior Assessment Score: {props.dogStatus}
        </Typography>
        {props.adminNotes? (<Typography className={styles.subheader}>
        Admin Notes: {props.dogStatus}
        </Typography>):null
        }
      </Item>
      <Item position={'right'} mr={-0.5}>
        <StyledTooltip title={'See details'}>
          <IconButton classes={iconBtnStyles}>
            <CallMade />
          </IconButton>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    '&:hover': {
      borderColor: '#5B9FED',
    },
  },
}));

export const FancyCard = React.memo(function FancyCard(props) {
  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }
  return (
    <Grid container spacing={4} justify={'center'}>
      <Grid item xs={12} sm={8} lg={7}>
        <Row className={styles.card} p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap}>
          <Item grow>
            <CardMedia 
            component="img"
            alt="dog profile photo"
            height="100%"
            image={props.profilePhoto}/>
          </Item>
          <Column>
            <CardHeader dogName={props.dogName} 
            dogStatus={props.dogStatus}
            adminNotes={props.adminNotes}/>
            <BasicProfile position={'bottom'} 
                currentlyWithFirstName={props.currentlyWithFirstName} 
                currentlyWithLastName={props.currentlyWithLastName} 
                currentlyWithEmail={props.currentlyWithEmail}/>
          </Column>
        </Row>
      </Grid>
    </Grid>
  );
});
export default FancyCard