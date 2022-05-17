import type { NextPage } from 'next'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import { T}

const useStyles = makeStyles(() => 
  createStyles({
    root: {
      backgroundColor: "red",
    },
  })
);
const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.root} variant="contained" color="primary">yes </Button>
    </>
  )
}

export default Home;
