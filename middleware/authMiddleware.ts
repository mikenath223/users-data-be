import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return; // Stop further execution
  }

  try {
    await admin.auth().verifyIdToken(token);
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ message: "Unauthorized: Invalid token" });
  }
};
