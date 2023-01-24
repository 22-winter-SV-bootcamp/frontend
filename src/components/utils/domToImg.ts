import domtoimage from 'dom-to-image';

export default async function domToImg(ref: any) {
  const option = {
    width: ref.clientWidth * 4,
    height: ref.clientHeight * 4,
    style: {
      transform: 'scale(' + 4 + ')',
      transformOrigin: 'top left',
    },
  };

  return await domtoimage.toBlob(ref, option);
}
