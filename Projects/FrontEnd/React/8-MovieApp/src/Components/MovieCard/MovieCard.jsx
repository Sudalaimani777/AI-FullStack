import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MovieCard({ movies }) {

    const { 
            backdrop_path, 
            original_title, 
            overview, 
            original_language, 
            popularity, 
            release_date, 
            vote_count 
            } = movies;

    return (
        <Grid item xs={3} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={backdrop_path}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {original_title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 4
                        }}
                    >
                        {overview}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Release Date -{release_date}
                    </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto", flexWrap: "wrap" }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Stack direction="row" spacing={1}>
                        <Chip label={original_language} variant='outlined'/>
                        <Chip label={`Votes: ${vote_count}`} variant='outlined' />
                        <Chip label={`Popularity: ${popularity}`} variant='outlined' />
                    </Stack>
                </CardActions>
            </Card>
        </Grid>
    );
}