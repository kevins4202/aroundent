import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MyCard = ({ name, description, imageUrl, price }) => {
  return <>
    <Card className='my-card'>
      <CardContent>
        <img src={imageUrl} alt={name} />
        <h2 style={{textAlign:"left"}}>{name}</h2>
        <p style={{textAlign:"left"}}>${price}</p>
        <p style={{textAlign:"left"}}>{description}</p>
      </CardContent>
    </Card>
  </>
}

export default MyCard;