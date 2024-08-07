const sharp = require('sharp');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images');
const videosDir = path.join(__dirname, 'public/videos');

const compressImages = async () => {
  fs.readdir(imagesDir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, 'compressed', file);
      sharp(inputPath)
        .resize({ width: 1200 }) 
        .toFormat('jpeg', { quality: 80 }) 
        .toFile(outputPath, (err, info) => {
          if (err) throw err;
          console.log(`Image compressed: ${file}`);
        });
    });
  });
};

const compressVideos = async () => {
  fs.readdir(videosDir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const inputPath = path.join(videosDir, file);
      const outputPath = path.join(videosDir, 'compressed', file);
      ffmpeg(inputPath)
        .outputOptions('-vf', 'scale=iw*0.5:ih*0.5') 
        .outputOptions('-b:v', '1M') 
        .outputOptions('-c:v', 'libx264')
        .outputOptions('-preset', 'slow')
        .outputOptions('-crf', '28') 
        .save(outputPath)
        .on('end', () => {
          console.log(`Video compressed: ${file}`);
        });
    });
  });
};

compressImages();
compressVideos();
