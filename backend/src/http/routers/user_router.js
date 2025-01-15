import { Router } from "express";
import user_controller from "../controllers/user_controller.js";

const router = Router();

router.post("/", user_controller.store);
router.post('/:id/posts', user_controller.create_post);
router.post('/:id/requests', user_controller.sendRequest);
router.post('/:id/requests/accept', user_controller.acceptRequest);
router.post('/:id/requests/reject', user_controller.rejectRequest);
router.get("/", user_controller.index);
router.get("/:id", user_controller.show);
router.put("/:id", user_controller.update);
router.delete("/:id", user_controller.destroy);

export default router;