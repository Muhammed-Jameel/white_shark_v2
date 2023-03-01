import imagemin from 'imagemin';
import webp from 'imagemin-webp'

const outputFolder = 'assets/images/webp'
const produceWebP = async () => {
  await imagemin(['assets/photos/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin(['assets/photos/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 95
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()