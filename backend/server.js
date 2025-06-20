import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
app.post('/api/v1/reservation/send', (req, res) => {
  console.log("Reservation received:", req.body);
  res.status(200).json({ message: "Success" });
});
