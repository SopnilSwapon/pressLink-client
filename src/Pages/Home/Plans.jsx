import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Plans = () => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <div className='grid bg-black grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 gap-5'>
            <div className='p-10'>
                <Card className='!bg-primary !text-white' sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                             Premium
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} Fast time you will get every news
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} You can see explore our keen eye & outstanding features
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} You can save any news.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.white">
                            
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                        </Typography>
                    </CardContent>
                    <div className='pl-1'>
                   <button className='!badge !badge-secondary !opacity-90 !text-xl !w-[70%] p-5'>Get Premium Family</button>
                   </div>
                    <CardActions>
                        <Button className='!btn !btn-badge !btn-sm' size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='p-10'>
                <Card className='!bg-primary !text-white' sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                             Premium Dua
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} Fast time you will get every news
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} You can see explore our keen eye & outstanding features
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} You can save any news.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.white">
                            
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                        </Typography>
                    </CardContent>
                    <div className='pl-1'>
                   <button className='!badge !badge-secondary !opacity-90 !text-xl !w-[70%] p-5'>Get Premium Family</button>
                   </div>
                    <CardActions>
                        <Button className='!btn !btn-badge !btn-sm' size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='p-10'>
                <Card className='!bg-primary !text-white' sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                             Premium Family
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} Fast time you will get every news
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} You can see explore our keen eye & outstanding features
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            {bull} You can save any news.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.white">
                            
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                        </Typography>
                    </CardContent>
                   <div className='pl-1'>
                   <button className='!badge !badge-secondary !opacity-90 !text-xl !w-[70%] p-5'>Get Premium Family</button>
                   </div>
                    <CardActions>
                        <Button className='!btn !btn-badge !btn-sm' size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    );
};

export default Plans;