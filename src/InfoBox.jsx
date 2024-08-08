import AcUnitIcon from "@mui/icons-material/AcUnit";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({info}) {
  const COLD_URL =
    "https://images.unsplash.com/photo-1706819657428-c16db9e26ef2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1689298470213-bc9f130f7349?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const CLEAR_URL =
  "https://plus.unsplash.com/premium_photo-1700124162812-1d5d29087b81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const SNOW_URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="info-box">
      <br></br>
      <div className="info-box-card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 70
                ? RAINY_URL
                : info.temp >= 25
                ? HOT_URL
                : info.temp > 15 && info.temp < 25
                ? CLEAR_URL
                : info.temp < 15
                ? COLD_URL
                : SNOW_URL
            }
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 70
                ? <ThunderstormIcon/>
                : info.temp >= 25
                ? <WhatshotRoundedIcon/>
                : info.temp > 15 && info.temp < 25
                ? <WbSunnyIcon/>
                : info.temp < 15
                ? <AcUnitIcon/>
                : <SevereColdIcon/>}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Minimum Temperature={info.tempMin}&deg;C</p>
              <p>Maximum Temperature={info.tempMax}&deg;C</p>
              <p>Humidity={info.humidity}%</p>
              <p>
                The weather is serving up some{" "}
                <i>
                  <b>{info.weather}</b>
                </i>{" "}
                vibes and feels like {info.feelsLike}&deg;C. What's your next
                move?
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
