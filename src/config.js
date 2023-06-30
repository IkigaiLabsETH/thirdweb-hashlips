const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Creator Studio on Mumbai";
const description = "IKIGAI LABS XYZ - Image by Dimitri Daniloff";
const startCountFrom = 0;
// Optional, change hasBaseUri to true if your  images pre-uploaded to IPFS
const hasBaseUri = false;
const baseUri = "ipfs://cid-here";
// Optional, is image filename case sensitive? 
// Default: false, meaning your file name will be capitalized e.g. "Awesome" instead of "awesome"
const isLayerNameFileNameAsIs = false;

const solanaMetadata = {
  symbol: "CREATE",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// EXAMPLE CP REMIX
//  { name: "Community", options: { blend: MODE.overlay, opacity: 0.0 } },
//  { name: "Activities", options: { blend: MODE.color-dodge, opacity: 0.0 } },
//  { name: "Photography", options: { blend: MODE.difference, opacity: 0.0 } },
//  { name: "Location", options: { blend: MODE.color-burn, opacity: 0.0 } },
//  { name: "Look", options: { blend: MODE.hue, opacity: 0.0 } },
//  { name: "Filmgrain", options: { blend: MODE.saturation, opacity: 0.9 } },
//  { name: "Boardriders", options: { blend: MODE.color, opacity: 0.0 } },
//  { name: "Punksbackground" },
//  { name: "Punks" },
//  { name: "Punkstop" },
//  { name: "Punksglasses" },
//  { name: "Punksmouth" },

//  EXAMPLE MB REMIX
//  { name: "Body" },
//  { name: "Gradients" },
//  { name: "Headwear" },
//  { name: "Beak" },
//  { name: "Eyes" },
//  { name: "Eyewear" },

//  EXAMPLE NOUNS REMIX

//  { name: "Nouns" },
//  { name: "NounsBody" },
//  { name: "NounsAcc" },
//  { name: "NounsHead" },
//  { name: "NounsGlasses" },

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 33,
    layersOrder: [
      { name: "Creator", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Curator", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Collector", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Network", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Edition", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Location", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Season", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Community", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "CreatorStudio" },
    ],
  },
];

const startEditionFrom = startCountFrom;

const shuffleLayerConfigurations = false;

const debugLogs = false;

// const sharp = require('sharp');

// const format = async (imagePath) => {
// const image = sharp(imagePath);
// const metadata = await image.metadata();

// const maxWidth = 3000;  // Adjust as needed
// const aspectRatio = metadata.width / metadata.height;

// return {
//    width: maxWidth,
//    height: Math.round(maxWidth / aspectRatio),
//    smoothing: false,
//  };
// };

// GET MODULE NOT FOUND WITH YARN GENERATE
// WHICH MODULE DO WE NEED TO INSTALL
// SO WE ARE NOT STUCK WITH FIXED ASPECT RATIOS

const format = {
  width: 2400,
  height: 1646,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 0.1 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  creator: "Dimitri Daniloff",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 9,
  thumbWidth: 300,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  hasBaseUri,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  startEditionFrom,
  isLayerNameFileNameAsIs,
  preview_gif,
};
