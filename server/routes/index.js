import express from "express";

import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import companyRoute from "./companiesRoutes.js";
import jobRoute from "./jobsRoutes.js";
//import applicationRoute from './applicationRoutes.js';

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}auth`, authRoute); //api-v1/auth/
router.use(`${path}users`, userRoute); //api-v1/users/
router.use(`${path}companies`, companyRoute);
router.use(`${path}jobs`, jobRoute);
//router.use(`${path}applications`, applicationRoute);

export default router;
