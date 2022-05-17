import type { NextPage } from 'next'
import Typography from "@material-ui/core/Typography"
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
      <Typography variant="h6">to be done</Typography>
    </>
  )
}

export default Home;
