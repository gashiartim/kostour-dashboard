export interface IThumbnail {
  id: string;
  media_id: string;
  entity: string;
  entity_id: string;
  related_field: string;
  order?: string | number;
  media: IMedia;
}

export interface IMedia {
  id: string;
  name: string;
  width: number;
  height: number;
  url: string;
  mimetype: string;
  size: string;
  encoding: string;
  ext: string;
}

export interface IDefaultResponse<data> {
  data: data;
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
}
