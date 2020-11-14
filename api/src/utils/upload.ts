import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) =>
      cb(null, 'uploads/'),
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname.replace(' ', '-')}`;
      cb(null, fileName);
    },
  }),
  limits: {
    fileSize: 10485760,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
});

export default upload;
