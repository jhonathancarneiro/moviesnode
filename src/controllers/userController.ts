import { Request, Response } from "express";
import User from "../models/user";
import { MongooseError } from "mongoose";
import bcrypt from "bcrypt";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res
        .status(400)
        .json({ success: false, error: "Campos obrigatórios ausentes" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ success: false, error: "Email já utilizado" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, user: newUser });
  } catch (error: any) {
    if (error instanceof MongooseError) {
      res.status(500).json({ success: false, error: error.message });
    } else {
      res.status(400).json({ success: false, error: "Dados inválidos" });
    }
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json({ success: false, message: "Usuário não encontrado" });
    } else {
      res.status(200).json({ success: true, user });
    }
  } catch (error: any) {
    if (error instanceof MongooseError) {
      res.status(500).json({ success: false, error: error.message });
    } else {
    }
  }
};

export const updateUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    );
    if (!updatedUser) {
      res
        .status(404)
        .json({ success: false, message: "Usuário não encontrado" });
    } else {
      res.status(200).json({ success: true, user: updatedUser });
    }
  } catch (error: any) {
    if (error instanceof MongooseError) {
      res.status(500).json({ success: false, error: error.message });
    } else {
    }
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res
        .status(404)
        .json({ success: false, message: "Usuário não encontrado" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "Usuário excluído com sucesso" });
    }
  } catch (error: any) {
    if (error instanceof MongooseError) {
      res.status(500).json({ success: false, error: error.message });
    } else {
    }
  }
};
