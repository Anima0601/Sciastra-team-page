import express from "express";
const app = express();
const port = "https://sciastra-team-page-orpin.vercel.app/";

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.html");
  })

  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });