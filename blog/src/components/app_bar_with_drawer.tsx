import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  SwipeableDrawer,
  ListItem,
  ListItemText,
  List,
  IconButton,
  Divider,
  AppBar,
  Toolbar,
  Collapse,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core';
import { FiMenu, FiBookmark, FiCalendar, FiCornerLeftUp } from 'react-icons/fi';

import { DrawerTitle } from './styles';
import { IDate } from '../@types/interfaces';
import { findAllTags } from '../services/tags_controller';
import { findDates } from '../services/posts_controller';
import { maxWidth } from '../constants/sizes';


const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    width: 200,
  },
}));

interface IMenuDate extends IDate {
  isOpen: boolean;
}

const AppBarWithDrawer = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [dates, setDates] = useState<IMenuDate[]>([]);
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const loadTagsAndDates = async () => {
      setTags(await findAllTags());
      setDates(
        (await findDates()).map((date) => {
          return {
            ...date,
            isOpen: false,
          };
        })
      );
    };
    loadTagsAndDates();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          background: '#555',
          height: '40px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <Toolbar style={{ maxWidth, width: '100%', margin: '0 auto' }}>
          <IconButton onClick={() => setIsDrawerActive(!isDrawerActive)}>
            <FiMenu color="#fff" enableBackground="#444" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        variant="temporary"
        open={isDrawerActive}
        anchor="left"
        onClose={() => setIsDrawerActive(false)}
        onOpen={() => setIsDrawerActive(true)}
        className={classes.drawer}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItem button onClick={() => history.push('/')}>
            <ListItemIcon>
              <FiCornerLeftUp />
            </ListItemIcon>
            <ListItemText primary="Voltar ao blog" />
          </ListItem>
          <DrawerTitle className="drawer-title">
            <span>Assuntos</span>
            <FiBookmark fontWeight="bold" color="#555" />
          </DrawerTitle>
          {tags.map((tag, index) => {
            return (
              <ListItem
                button
                key={`${tag}-${index}`}
                onClick={() => {
                  history.push(`/1/${tag}`);
                  setIsDrawerActive(false);
                }}
              >
                <ListItemText primary={tag} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          <DrawerTitle>
            <span>Datas</span>
            <FiCalendar fontWeight="bold" color="#555" />
          </DrawerTitle>
          {dates.map((date, index) => {
            return (
              <React.Fragment key={`${index}-${date.year}`}>
                <ListItem
                  button
                  onClick={() => {
                    const newDatesState = dates.map((actualDate, index) => {
                      if (actualDate.year === date.year) {
                        return {
                          ...actualDate,
                          isOpen: !actualDate.isOpen,
                        };
                      } else return actualDate;
                    });
                    setDates(newDatesState);
                  }}
                >
                  <ListItemText primary={date.year} />
                </ListItem>
                <Collapse in={date.isOpen} unmountOnExit>
                  <List component="div" disablePadding>
                    {date.months.map((month) => (
                      <ListItem
                        key={`${month}-${date.year}`}
                        button
                        onClick={() => {
                          history.push(
                            `/1/${date.year}/${parseInt(month) + 1}`
                          );
                          setIsDrawerActive(false);
                        }}
                      >
                        <ListItemText
                          className={classes.nested}
                          primary={Intl.DateTimeFormat('pt-br', {
                            month: 'long',
                          }).format(new Date().setMonth(parseInt(month)))}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          })}
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default AppBarWithDrawer;
