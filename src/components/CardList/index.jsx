/* eslint-disable react/prop-types */
import CardMui from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Card = ({ countrie }) => {
  return (
    <CardMui sx={{ maxWidth: 300, minWidth: 150 }}>
      <CardMedia
        sx={{ height: 150, width: 300 }}
        image={countrie.flags.png}
        title={countrie.name.common}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {countrie.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {countrie.capital[0]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {countrie.population}
        </Typography>
      </CardContent>
    </CardMui>
  );
};

export default Card;
