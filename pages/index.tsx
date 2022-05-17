import type { GetStaticProps, NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from "../public/car-background.jpg";
import Grid from "@material-ui/core/Grid"
import Image from "next/image";
import ImageWithText from '../components/ImageWithText';
import Typography from "@material-ui/core/Typography";
import { FOOTER_TEXT_COLOR } from '../utils/colors';
import Cards from '../components/Cards';


const useStyles = makeStyles((theme) => ({
  newCars: {
    textAlign: "center",
    color: FOOTER_TEXT_COLOR

  },
  cardContainer: {
    justifyContent: "center",
    paddingLeft: 40,
    marginTop: 30
  }
}));

const Home: NextPage = ({ carLists }: any) => {
  const classes = useStyles();
  return (
    <div>
      {/* <ImageWithText styles={styles} /> */}
      <div>
        <Image
          alt='Mountains'
          src={backgroundImage}
          layout='responsive'
          objectFit='contain'
        />
      </div>
      {/* <div><Image
        style={{
          maxHeight: `75vh`,
          width: `100%`,
        }}
        src={backgroundImage}
        alt="aipm image"
        width="100%"
        height="75vh"
      />
      </div> */}
      <div>
        <Typography variant="h6">Car Store</Typography>
        <Typography variant="h6">find your dream car here in our store</Typography>
      </div>
      <div className={classes.newCars}>
        <Typography variant="h6">Our New Cars</Typography>
        <Grid container>
          {carLists.map((car: any, index: any) => (
            <Grid item key={index} className={classes.cardContainer}>
              <Cards car={car}/>
            </Grid>
          ))}
        </Grid>

      </div>
      <Image src={backgroundImage} alt="background car" width="200" height="200" />
      <Typography variant="h6">to be done {carLists[2].id}</Typography>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.staging.myautochek.com/v1/inventory/make?popular=true");
  const { makeList } = await res.json();


  return {
    props: {
      carLists: makeList
    }
  }
}

export default Home;
