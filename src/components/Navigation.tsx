import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Autocomplete, Button, TextField } from '@mui/material';
import Link from './Link';
import { useTranslation } from 'react-i18next';
import { useCategoryPages } from "../hooks/CategoryPagesFetch"
import { useState } from "react";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: '90%',
    height: 56,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    input: 'onInput',
    name: 'input',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export default function SearchAppBar() {
    const { t, i18n } = useTranslation('main', { keyPrefix: 'nav' })

    const swapLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ru')
        } else {
            i18n.changeLanguage('en')
        }
        console.log(i18n.language)
    }

    const swapLanguageMenuWrapper = () => {
        swapLanguage()
        handleCloseNavMenu()
    }

    const pagess = [[t('home'), '/writers-of-belarus'],
    [t('writers'), '/writers-of-belarus/writers'],
    [t('about'), '/writers-of-belarus/about']]

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const UpdateOutput = () => {
        const { pages, error, loading } = useCategoryPages();

        console.log("pages = ", pages)

        let tmp: { label: string, id: number }[] = []

        console.log("pages = ", pages, "error = ", error, "load = ", loading)

        if (pages && !error && !loading) {
            pages?.sort((a, b) => a.title.localeCompare(b.title))
            let index = 1;


            pages?.forEach((elem) => {
                console.log("push = ", elem.title)
                tmp.push({ label: elem.title, id: index })
                index++;
            })
        }

        if (tmp != null) {
            console.log("tmp = ", tmp)
            return tmp
        }
        else
            return [{ label: "do not found", id: 1 }]
    }

    const writers: { label: string, id: number }[] = UpdateOutput()
    const [inputValue, setInputValue] = useState("")

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{
                    minHeight: '70px'
                }}>
                    <Box
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pagess.map((page) => (
                                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href={`${page[1]}`}>
                                            {page[0]}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                            {
                                <MenuItem key={4} onClick={swapLanguageMenuWrapper}>

                                    <Typography
                                        textAlign="center"
                                    >
                                        {t('changeLng')}
                                    </Typography>
                                </MenuItem>
                            }
                        </Menu>
                    </Box>
                    <Typography
                        variant="body1"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link
                            variant="h6"
                            href="/writers-of-belarus/"
                            sx={{
                                marginRight: 4
                            }}
                        >
                            {t('title')}
                        </Link>
                        <Link
                            href="/writers-of-belarus/about"
                            sx={{
                                display: { sm: 'none', md: 'inline' },
                                marginRight: 2
                            }}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href="/writers-of-belarus/writers"
                            sx={{
                                display: { sm: 'none', md: 'inline' },
                                marginRight: 2
                            }}
                        >
                            {t('writers')}
                        </Link>
                        <Button
                            variant="text"
                            color="inherit"
                            disableRipple
                            onClick={swapLanguage}
                            sx={{
                                display: { sm: 'none', md: 'inline' },
                                padding: '0',
                                fontSize: '1rem',
                                textTransform: 'none'
                            }}
                        >
                            {t('changeLng')}
                        </Button>
                    </Typography>
                    <Search
                        sx={{
                            backgroundColor: 'background.paper',
                            bgcolor: 'background.paper'
                        }}
                    >
                        <Autocomplete
                            color='background.paper'
                            title={"Writers"}
                            id="combo-box-demo"
                            options={writers}
                            sx={{
                                width: 'auto',
                                minWidth: 270,
                                height: 50,
                                color: 'background.paper',
                                // bgcolor: 'transpa',

                            }}
                            autoComplete={true}
                            renderInput={(params) => <TextField {...params} label={t('search')} />}
                            onChange={(event, value, reason, details) => {
                                writers.forEach((writer) => {
                                    if (writer == value) {
                                        setInputValue(value.label)
                                    }
                                })
                            }
                            }
                            onKeyPressCapture={(event: any) => {
                                if (event.code == 'Enter')
                                    window.open(`/writers-of-belarus/writer/${inputValue}`)
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}