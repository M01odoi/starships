interface Props {
  arrayImage: string[];
}

const randomPic: Function = ({ arrayImage }: Props): string => {
  return (
    arrayImage[+(Math.random() * arrayImage.length).toFixed(0)] ||
    "https://koloro.ua/media/upload/images/stevejobs1.jpg"
  );
};

export default randomPic;
