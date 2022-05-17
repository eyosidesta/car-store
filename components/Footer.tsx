import type { NextPage } from "next"
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { FOOTER_COLOR, WHITE_COLOR, FOOTER_TEXT_COLOR, RED_COLOR } from "../utils/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: FOOTER_COLOR,
        marginTop: 15,
    },
    secondRoot: {
        minHeight: "25vh",
        padding: 30,
        color: WHITE_COLOR,
    },
    footerTitle: {
        textAlign: "center",
        marginBottom: 17,
        marginTop: 20,
    },
    footerDetailContainer: {
        // backgroundColor: "red",
        textAlign: "center",
        // paddingLeft: 40,
    },
    footerDetail: {
        alignItems: "center",
        paddingLeft: 110,
        color: FOOTER_TEXT_COLOR,
    },
    insideFooterDetail: {
        marginBottom: 7,
    },
    divider: {
        backgroundColor: "#322922",
    },
    emailField: {
        backgroundColor: WHITE_COLOR,
    },
    goButton: {
        backgroundColor: RED_COLOR,
        textAlign: "end",
        marginTop: theme.spacing(1)
    },
    copyright: {
        textAlign: "center",
        padding: 10,
        color: FOOTER_TEXT_COLOR,
    }
}));

const Footer: NextPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.secondRoot}>
                <Grid container>
                    <Grid container>
                        <Grid item xs={12} sm container>
                            <Grid item container direction="column">
                                <Grid item>

                                    <Typography
                                        variant="h6"
                                        className={classes.footerTitle}
                                    >
                                        <b>Categories</b>
                                    </Typography>
                                    <div className={classes.footerDetail}>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">
                                                Steel
                                            </Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">
                                                Plastics
                                            </Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">
                                                Aluminum
                                            </Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">
                                                Rubber
                                            </Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">
                                                The Bottom Line
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item container direction="column">
                                <Grid item>
                                    <Typography variant="h6" className={classes.footerTitle}>
                                        <b>Quick Links</b>
                                    </Typography>
                                    <div className={classes.footerDetail}>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">About Us</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">Contact Us</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">Help</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">FAQ</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">Terms of use</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">Privacy policy</Typography>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item container direction="column">
                                <Grid item>
                                    <Typography
                                        variant="h6"
                                        className={classes.footerTitle}
                                    >
                                        <b>Get in Touch</b>
                                    </Typography>
                                    <div className={classes.footerDetail}>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">123 Los Angeles, USA</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">512 434 3334</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">+124 53 3034</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">mail carstore@example.com</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">mail carstorecanada@example.com</Typography>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item container direction="column">
                                <Grid item>
                                    <Typography
                                        variant="h6"
                                        className={classes.footerTitle}
                                    >
                                        <b>News Letter</b>
                                    </Typography>
                                    <div className={classes.footerDetail}>
                                        <div className={classes.insideFooterDetail}>
                                            <Typography variant="caption">First Delivery on your first order</Typography>
                                        </div>
                                        <div className={classes.insideFooterDetail}>
                                            <TextField id="outlined-search" label="Email" className={classes.emailField} type="search" variant="outlined" />
                                        </div>
                                        <Button className={classes.goButton} variant="contained" color="primary">GO</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Divider className={classes.divider} />
            <Typography variant="body2" className={classes.copyright}><em>@ car store. All rights reserved
                2022</em>
            </Typography>
        </div>
    );
}
export default Footer;