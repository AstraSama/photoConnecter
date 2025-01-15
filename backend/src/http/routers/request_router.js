import { Router } from "express";
import request_controller from "../controllers/request_controller.js";

const router = Router();

router.post("/", request_controller.store);
router.get("/", request_controller.index);
router.get("/:id", request_controller.show);
router.put("/:id", request_controller.update);
router.delete("/:id", request_controller.destroy);

export default router;