export default interface IBook {
  id: string;
  volumeInfo: IVolumeInfo;
}

interface IVolumeInfo {
  authors: string[];
  description: string;
  imageLinks: IImageLinks;
  publishedDate: string;
  title: string;
  subtitle: string;
}

interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}