export interface DescriptionOptions {
  text: DescriptionOption;
  image: DescriptionOption;
}
export interface DescriptionOption {
  [key: string]: any;
  classic: string | string[];
  experimental: string | string[];
}
