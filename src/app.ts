// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import userRoutes from "./routes/user.routes";

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(helmet());

// app.use("/api/users", userRoutes);

// export default app;



import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoute';
// import searchRouter from './routes/searchRoutes';  // ✅ updated to match the workout route file I gave you
// import profileRouter from './routes/profileRoute';
// import coachRouter from './routes/coachRoutes';
// import coachesRouter from './routes/coachesRoute';

const app = express();

// Middlewares
// app.use(cors({
//     origin: "http://localhost:5173",  // ✅ frontend origin
// }));
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// API routes
app.use('/auth', authRouter);
// app.use('/find', searchRouter);        // ✅ this points to /find/workouts from searchRoutes.ts
// app.use('/profile', profileRouter);
// app.use('/coaches', coachRouter);
// app.use('/coaches', coachesRouter);   // ⚠️ Note: consider combining these two to avoid double /coaches

export default app;
