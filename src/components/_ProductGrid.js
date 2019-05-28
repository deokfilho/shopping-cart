import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { unstable_Box as Box } from '@material-ui/core/Box';


const styles = {
    root: {
        display: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 50,
        height: 50

    },
    gridListTile: {
        padding: 100

    },
    media: {
        objectFit: 'cover',
    },
    paper: {
        height: 100,
        width: 250,
        textAlign: 'center',
    },
    product: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    card: {
        maxWidth: 345,
        alignItems: 'center',
    },
};

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
// function ProductGrid({productList}, props) {
//     const classes  = props;
//     // const list = [1,2,3,4,5,6,7,8,9,10];
//     return (
//         <div className={classes.root}>
//             <GridList cellHeight={300} className={classes.gridList}>
//                 {Object.keys(productList).map(tile => (
//                     {/*<GridListTile key={productList[tile].title} className={classes.gridListTile}>*/}
//                     {/*    <img src={'data/products/' + tile + '_1.jpg'} alt={productList[tile].description} />*/}
//                     {/*    <GridListTileBar*/}
//                     {/*        title={productList[tile].title}*/}
//                     {/*        subtitle={<span>{productList[tile].description}</span>}*/}
//                     {/*        actionIcon={*/}
//                     {/*            <Button size='small' variant='contained' color={'primary'} className={classes.button}>*/}
//                     {/*                {productList[tile].currencyFormat}{productList[tile].price}*/}
//                     {/*            </Button>*/}
//                     {/*        }*/}
//                     {/*    />*/}
//
//                     {/*</GridListTile>*/}
//
//                     ))}
//             </GridList>
//         </div>
//     );
// }

function ProductGrid({productList}, props) {
    const classes = props;

    return (
        <div style={{ width: '100%' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Sizes:
                    </Typography>

                        {['S', 'M', 'L', 'XL'].map((size) => (
                        <Button variant="contained" color="secondary" className={classes.button} >
                            {size}
                        </Button>
                        ))}
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper} elevation={1}>
                {Object.keys(productList).map(product => (
                <div className={classes.product}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <img src={'data/products/' + product + '_1.jpg'} alt={productList[product].description} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {productList[product].title}
                                </Typography>
                                <Typography component="p">
                                    {productList[product].description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" color="secondary" className={classes.button} >
                                Buy for {productList[product].currencyFormat}{productList[product].price}
                            </Button>
                        </CardActions>
                    </Card>

                </div>
            ))};
            </Paper>
        </div>

    )
}


export default withStyles(styles)(ProductGrid);