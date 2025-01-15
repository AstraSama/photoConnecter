import { Router } from "express";
import connection_controller from "../controllers/connection_controller.js";

const router = Router();

router.post("/", connection_controller.store);
router.get("/", connection_controller.index);
router.get("/:id", connection_controller.show);
router.put("/:id", connection_controller.update);
router.delete("/:id", connection_controller.destroy);

export default router;