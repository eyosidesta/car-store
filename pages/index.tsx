import type { GetStaticProps, NextPage } from 'next'
import Image from "next/image"
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
const Home: NextPage = ({carLists}: any) => {
  const classes = useStyles();
  return (
    <>
    <Image src={carLists[2].imageUrl} alt="car image" width="200" height="200"/>
      <Typography variant="h6">to be done {carLists[2].id}</Typography>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.staging.myautochek.com/v1/inventory/make?popular=true");
  const {makeList} = await res.json();


  return {
    props: {
      carLists: makeList
    }
  }
}

export default Home;
