import { Request, Response } from "express";
import { getUserById, updateUserById } from "../repository/userCollection";

export const fetchUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user data", error });
  }
};

export const updateUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const userData = req.body;

  try {
    await updateUserById(id, userData);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user data", error });
  }
};
