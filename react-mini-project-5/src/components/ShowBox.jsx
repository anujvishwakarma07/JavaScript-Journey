import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

const ShowBox = ({ weatherData }) => {
  const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1471&auto=format&fit=crop";
  const HOT_URL = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=1632&auto=format&fit=crop";
  const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1470&auto=format&fit=crop";
  const DEFAULT_URL = "https://images.unsplash.com/photo-1580193769110-721517c61df4?q=80&w=1470&auto=format&fit=crop";

  const isRainy = weatherData.humidity > 80 || weatherData.description.toLowerCase().includes("rain") || weatherData.description.toLowerCase().includes("drizzle");
  
  let imageUrl = DEFAULT_URL;
  let Icon = CloudIcon;
  let iconColor = "#2563eb"; // Simple clean blue

  if (weatherData.temp > 28) {
    imageUrl = HOT_URL;
    Icon = WbSunnyIcon;
    iconColor = "#ea580c"; // Simple warm orange
  } else if (weatherData.temp < 15) {
    imageUrl = COLD_URL;
    Icon = AcUnitIcon;
    iconColor = "#0284c7"; // Simple cold blue
  } else if (isRainy) {
    imageUrl = RAIN_URL;
    Icon = ThunderstormIcon;
    iconColor = "#475569"; // Slate gray
  }

  return (
    <div className="weather-card-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', width: '100%' }}>
      <Card className="weather-card" style={{ width: '100%' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageUrl}
          title={weatherData.description}
        />
        <CardContent style={{ padding: '24px' }}>
          <Typography gutterBottom variant="h5" component="div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 'bold', color: '#0f172a' }}>
            {weatherData.city} <Icon style={{ color: iconColor, fontSize: '1.8rem' }} />
          </Typography>
          
          <Typography variant="h3" component="div" style={{ margin: '15px 0', fontWeight: '800', textAlign: 'center', color: '#0f172a' }}>
            {weatherData.temp}°C
          </Typography>

          <Typography variant="body2" component="p" style={{ textTransform: 'capitalize', fontStyle: 'italic', color: '#475569', textAlign: 'center', marginBottom: '20px' }}>
            Feels like {weatherData.feelsLike}°C &bull; {weatherData.description}
          </Typography>

          <div className="weather-details-grid">
            <div className="detail-item">
              <div className="detail-label">Min Temp</div>
              <div className="detail-value">{weatherData.tempMin}°C</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Max Temp</div>
              <div className="detail-value">{weatherData.tempMax}°C</div>
            </div>
            <div className="detail-item" style={{ gridColumn: 'span 2' }}>
              <div className="detail-label">Humidity</div>
              <div className="detail-value">{weatherData.humidity}%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ShowBox