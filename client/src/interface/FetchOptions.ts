export interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: string;
  credentials: RequestCredentials;
}

export interface PhotoUpload {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: FormData;
  credentials: RequestCredentials;
}
