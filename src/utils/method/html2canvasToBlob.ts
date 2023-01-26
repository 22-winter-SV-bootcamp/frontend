import html2canvas from 'html2canvas';
export default async function html2canvasToBlob(ref: any) {
  const element = await html2canvas(ref).then((e) => e);
  return element;
}
