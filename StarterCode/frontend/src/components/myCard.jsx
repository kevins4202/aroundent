import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import trash from '../../public/trash.png';

const MyCard = ({ id, name, description, imageUrl, price, handleDelete }) => {
  return <>
    <Card className='my-card' style={{alignContent:"left", textAlign:"left"}}>
      <CardContent>
        <img src={trash} className='delete' style={{width:"25px", position:"absolute"}} onClick={() => handleDelete(id)} ></img>
        <img src={imageUrl} alt={name} />
        <h2 >{name}</h2>
        <p >${price}</p>
        <p>{description}</p>
      </CardContent>
    </Card>
  </>
}

export default MyCard;