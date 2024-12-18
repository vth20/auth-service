interface IApiError {
  statusCode: number;
  message: string;
  isOperational: boolean;
  stack?: string;
}

class ApiError extends Error implements IApiError {
  statusCode: number;
  isOperational: boolean;
  constructor(
    statusCode: number,
    message: string,
    isOperational: boolean = true,
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
