
import {Typography, Rating} from '@mui/material'




export default function StarBar(props) {

    const pxTier = props.rating
    const rating = pxTier.replace('Stars', '')



    return(
        <div>
<Typography component="legend"><span>Px Tier</span></Typography>
<Rating name="read-only" value={rating} readOnly />
        </div>
    )
}