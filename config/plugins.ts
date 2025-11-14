export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
        secure: true
      },
      actionOptions: {
        upload: {
          folder: "ritmo-caribeno-tours",
          unique_filename: false,
          use_filename: true,
        },
        uploadStream: {
          folder: "ritmo-caribeno-tours",
          unique_filename: false,
          use_filename: true,
        },
      },
    },
  },
});
