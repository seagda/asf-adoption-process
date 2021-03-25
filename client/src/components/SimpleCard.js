import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
    borderRadius: 30,
    height: "90%"
  },
  content: {
    padding: 24,
  },
  header: {
    height: "40px",
  },
}));

export const ProjectCardDemo = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <BrandCardHeader className={cardStyles.header}
        image={
          'https://cdn.dribbble.com/users/1379859/screenshots/3455666/artboard_1.jpg'
        }
        extra={'welcome!'}
      />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={styles}
          overline={'AUSTRALIAN SHEPHERDS FUREVER'}
          heading={'Hello ____, thanks for supporting ASF!'}
        />
      </CardContent>
    </Card>
  );
});

export default ProjectCardDemo