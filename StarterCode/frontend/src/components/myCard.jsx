import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const myCard = ({ title, description, image, price }) => {
  return <>
    <Card>
      <CardContent>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </CardContent>
    </Card>
  </>
}

export default myCard;