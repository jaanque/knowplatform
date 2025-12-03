export interface FileRecord {
  id: string;
  name: string;
  size: string;
  downloads: number;
  type: string;
  uploader: string;
  description?: string;
  created_at?: string;
  download_url?: string;
}
