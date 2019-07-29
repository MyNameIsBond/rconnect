import React, { Fragment, useState } from 'react'
import { grid } from './styles/materialStyle'
import Grid from '@material-ui/core/Grid'
import FormRow from './components/KanBanBoardCard/KanBoardGrid'
export default function NestedGrid() {
  const classes = grid()
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        <Grid item container xs={4} direction="column" alignItems="stretch" spacing={0}>
          <FormRow title={'To Do'} />
        </Grid>
        <Grid item container xs={4} direction="column" alignItems="stretch" spacing={0}>
          <FormRow title={'In Progress'} />
        </Grid>
        <Grid item container xs={4} direction="column" alignItems="stretch" spacing={0}>
          <FormRow title={'Done'} />
        </Grid>
      </Grid>
    </div>
  )
}
