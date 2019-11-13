import React from "react";
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from "react-router";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

interface HeaderProps {
    userId?: number;
}

type Props = HeaderProps & RouteComponentProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            borderBottom: "2px solid #f9f9f9"
        },
        iconButton: {
            marginRight: theme.spacing(2)
        },
        tabContainer: {
            flexGrow: 1
        }
    })
);

/**
 * Header bar for the web service
 * @param props
 * @constructor
 */
const Header: React.FC<Props> = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState("/");

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: string): void => {
        setValue(newValue);
        props.history.push(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar elevation={0} position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="primary">
                        Vaccination eRecord
                    </Typography>
                    <div className={classes.tabContainer}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            centered
                            aria-label="tabs"
                        >
                            <Tab label="Home" value="/" />
                            <Tab label="My vaccines" value="/vaccines" />
                            <Tab label="FAQ" value="/frequently-asked-questions" />
                        </Tabs>
                    </div>
                    <Button color="inherit">{props.userId ? "Sign out" : "Sign in"}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    userId: PropTypes.number
};

export default withRouter(Header);
