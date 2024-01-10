// Add ~/server/utils/exceptions.ts

export const sendErrorResponse = (event: any, statusCode: number, message: string) => {
  sendError(event, createError({
    statusCode: statusCode,
    statusMessage: message,
  }));
}

export const BAD_REQUEST = (event: any) => {
  sendError(event, createError({
    statusCode: 400,
    statusMessage: 'Bad request',
  }));
}

export const RESOURCE_NOT_FOUND = (event: any) => {
  sendError(event, createError({
    statusCode: 404,
    statusMessage: 'Resource not found',
  }));
}

export const UNAUTHORIZED = (event: any) => {
  sendError(event, createError({
    statusCode: 403,
    statusMessage: 'Unauthorized',
  }));
}

export const INVALID_CREDENTIALS = (event: any) => {
  sendError(event, createError({
    statusCode: 401,
    statusMessage: 'Invalid Credentials',
  }));
}

