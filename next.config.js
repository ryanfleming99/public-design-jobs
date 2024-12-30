module.exports = {
  distDir: "build", // Keep your existing build directory
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/ryry/image/upload/**"
      }
    ]
  }
};
