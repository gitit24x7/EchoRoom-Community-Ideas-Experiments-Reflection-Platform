import { Router } from "express";

import ideasRoutes from "../ideas.routes";
import experimentsRoutes from "../experiments.routes";
import outcomesRoutes from "../outcomes.routes";
import reflectionsRoutes from "../reflections.routes";
import authRoutes from "../auth.routes";
import insightsRoutes from "../insights.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/ideas", ideasRoutes);
router.use("/experiments", experimentsRoutes);
router.use("/outcomes", outcomesRoutes);
router.use("/reflections", reflectionsRoutes);
router.use("/insights", insightsRoutes);

export default router;
