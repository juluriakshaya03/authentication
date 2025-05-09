// src/utils/validationUtils.ts
import { Request, Response, NextFunction } from 'express';

interface ValidationError {
  field: string;
  message: string;
}

export const validateRegisterInput = (req: Request, res: Response, next: NextFunction): void => {
  const { firstName, lastName, email, password } = req.body;
  const errors: ValidationError[] = [];

  if (!firstName || firstName.trim() === '') {
    errors.push({ field: 'firstName', message: 'First name is required' });
  }

  if (!lastName || lastName.trim() === '') {
    errors.push({ field: 'lastName', message: 'Last name is required' });
  }

  if (!email || email.trim() === '') {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!isValidEmail(email)) {
    errors.push({ field: 'email', message: 'Email is invalid' });
  }

  if (!password) {
    errors.push({ field: 'password', message: 'Password is required' });
  } else if (password.length < 6) {
    errors.push({ field: 'password', message: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  next();
};

export const validateLoginInput = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body;
  const errors: ValidationError[] = [];

  if (!email || email.trim() === '') {
    errors.push({ field: 'email', message: 'Email is required' });
  }

  if (!password) {
    errors.push({ field: 'password', message: 'Password is required' });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  next();
};

// Helper function to validate email format
const isValidEmail = (email: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};