import type { NextPage } from "next";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { FOOTER_COLOR } from "../utils/colors";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import HeaderController from "./HeaderController";
import logo from "../public/car-store-logo.png";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: "2%",
      paddingTop: "2%",
      marginBottom: 10,
    },
    paper: {
      color: FOOTER_COLOR,
    },
    lists: {
      paddingLeft: "10%",
    },
    alignCenter: {
      alignItems: "center",
    },
  }));

const Header: NextPage = () => {
    const classes = useStyles();
  
    const navigate = useRouter();
  
    const handleNavigation = (route: any) => {
      navigate.push(`/${route}`);
    };
    const handleToggle = (listItem: any) => {
      !listItem.menu && navigate.push(`/${listItem.link}`);
    };
    const menuItemsClicked = (route: any) => {
      handleNavigation(route);
    };
  
    const handleHomeNavigation = () => {
      navigate.push('/');
    }
  
    const listItems = [
      {
        id: 1,
        text: "Plastics",
        defaultIcon: "fa fa-caret-down textColor",
        newIcon: "fa fa-caret-up textColor",
        menu: [
          { name: "Air Vents", onMenuClick: () => menuItemsClicked("air-vents") },
          { name: "Door Handler", onMenuClick: () => menuItemsClicked("door-handler") },
          { name: "The Dashboard", onMenuClick: () => menuItemsClicked("dashboard") },
        ],
        variant: "body2",
        iconSize: "small",
      },
      {
        id: 2,
        text: "Steels",
        defaultIcon: false,
        newIcon: "fa fa-caret-up textColor",
        variant: "body2",
        iconSize: "small",
        link: "steels",
      },
      {
        id: 3,
        text: "Aluminum",
        defaultIcon: false,
        newIcon: "fa fa-caret-up textColor",
        variant: "body2",
        iconSize: "small",
        link: "aluminum",
      },
      {
        id: 4,
        text: "Rubber",
        defaultIcon: false,
        newIcon: "fa fa-caret-up textColor",
        variant: "body2",
        iconSize: "small",
        link: "rubber",
      },
      {
        id: 5,
        text: "Bottom Line",
        defaultIcon: "fa fa-caret-down textColor",
        newIcon: "fa fa-caret-up textColor",
        menu: [
          {
            name: "Tyre",
            onMenuClick: () => menuItemsClicked("tyre"),
          },
          {
            name: "Gear",
            onMenuClick: () => menuItemsClicked("Gear"),
          },
        ],
        variant: "body2",
        iconSize: "small",
      },
      {
        id: 6,
        text: "About Us",
        defaultIcon: "fa fa-caret-down textColor",
        newIcon: "fa fa-caret-up textColor",
        menu: [
          { name: "who we are", onMenuClick: () => menuItemsClicked("who-we-are") },
          { name: "contactus", onMenuClick: () => menuItemsClicked("contact-us") },
        ],
        variant: "body2",
        iconSize: "small",
      },
    ];
  
    return (
      <Grid className={classes.root} container>
        <Grid
          container
          justifyContent="flex-start"
          spacing={2}
          style={{ margin: 0, width: "100%" }}
        >
          {/* <Grid > */}
          <Grid item style={{cursor: "pointer"}} onClick={handleHomeNavigation}>
            <Avatar alt="Car store Logo" src={logo} />
          </Grid>
            <Grid item style={{cursor: "pointer"}} onClick={handleHomeNavigation}>
              <Typography variant="body2" className={classes.paper}>
                Car Store
              </Typography>
              <Typography variant="caption" className={classes.paper}>
                find your dream car
              </Typography>
            </Grid>
            {/* </Grid> */}
          <Grid container item sm xs={12}>
            <Grid
              container
              direction="row"
              spacing={4}
              alignItems="center"
              className={classes.lists}
              style={{ margin: 0, width: "100%" }}
            >
              {listItems.map((item: any, index) => {
                return (
                  <HeaderController
                    key={item.id}
                    listItem={item}
                    handleToggle={() => handleToggle(item)}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

export default Header;