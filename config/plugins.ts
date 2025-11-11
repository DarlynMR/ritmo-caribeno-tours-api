export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      // Configure folder for Cloudinary uploads so media files are stored under 'ritmo-caribeno-tours'
      actionOptions: {
        upload: { folder: 'ritmo-caribeno-tours' },
        uploadStream: { folder: 'ritmo-caribeno-tours' },
        delete: {},
      },
    },
  },
});
