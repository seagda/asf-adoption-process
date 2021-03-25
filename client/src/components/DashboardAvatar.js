import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient';

export const GradientAvatarStyle = React.memo(function GradientAvatar() {
  const styles = useGradientAvatarStyles({
    size: 80,
    gap: 3,
    thickness: 3,
    gapColor: '#f4f7fa',
    color: 'linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)',
  });
  return (
    <>
      <div className={styles.root}>
        <Avatar src={'https://i.pravatar.cc/300?img=30'} />
      </div>
    </>
  );
});