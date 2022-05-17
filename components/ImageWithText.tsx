import type { NextPage } from "next";
import { makeStyles } from "@material-ui/core/styles";
import { WHITE_COLOR } from "../utils/colors";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    image: {
      maxHeight: `75vh`,
      width: "100%",
      marginBottom: 30,
    },
    imageContainer: {
      position: "relative",
      // textAlign: "center",
      color: WHITE_COLOR,
    },
    aipmText: {
      position: "absolute",
      textAlign: "center",
      width: "100%",
      height: "0%",
      margin: "auto",
      top: 0,
      left: 0,
      bottom: 190,
      right: 0,
      // zIndex: 51,
    },
  }));

const ImageWithText: NextPage = ({ styles }: any) => {
    const classes = useStyles();
    return (
      <div className={classes.imageContainer}>
        <div><img
          style={{
            // borderRadius: styles.borderRadius,
            // borderBottomLeftRadius: styles.borderRadius,
            maxHeight: `${styles.height}vh`,
            paddingLeft: `${(100 - styles.width) / 2}%`,
            width: `${styles.width}%`,
          }}
          src={styles.backgroundImage}
          alt="aipm image"
        />
        </div>
        <div className={classes.aipmText} style={{color: styles.detail.color ? styles.detail.color : WHITE_COLOR}}>
          <Typography variant={styles.detail.titleFont}>{styles.title}</Typography>
          <Typography variant={styles.detail.descriptionFont}>{styles.detail.description}</Typography>
        </div>
      </div>
    );
}

export default ImageWithText;