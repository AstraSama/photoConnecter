import { Router } from "express";
import post_controller from "../controllers/post_controller.js";

const router = Router();

router.post("/", post_controller.store);
router.get("/", post_controller.index);
router.get("/:id", post_controller.show);
router.put("/:id", post_controller.update);
router.delete("/:id", post_controller.destroy);

export default router;