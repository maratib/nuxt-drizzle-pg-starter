// Add ~/server/utils/exceptions.ts

export const BAD_REQUEST = (e: any) => {
  throw createError({
    statusCode: 400,
    statusMessage: e.message,
  });
}

export const RESOURCE_NOT_FOUND = (e: any) => {
  throw createError({
    statusCode: 404,
    statusMessage: e.message,
  });
}

export const UNAUTHORIZED = (message: string) => {
  throw createError({
    statusCode: 401,
    statusMessage: message,
  });
}