import  express ,{Application} from "express";
const app:Application= express();
import SchoolRoutes from './routes/School.routes'
let port:number=3003;
app.use(express.json());

app.use('/School',SchoolRoutes);



app.listen(port,() => console.log(`express server started on port ${port}`));

