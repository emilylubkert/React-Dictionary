import "../styles/Definition.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Definition({ word }) {

  return (
    <div className="def-container">
      <Card variant="outlined" sx={{ width: 400, minHeight: 100, maxWidth: 500 }}>
          <div className="img-container">
          {word.image_url && <CardMedia component="img" className="card-image" image={word.image_url} />}
          </div>
        <CardContent style={{background: "#c1fefb"}}>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" textAlign="left" gutterBottom>
            {word.definition}
          </Typography>
          <Typography sx={{ mb: 1.5 }} textAlign="left" color="text.secondary">
            {word.type}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Definition;
