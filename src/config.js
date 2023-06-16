const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "LTL";
const description = "LiveTheLife";
const startCountFrom = 0;
// Optional, change hasBaseUri to true if your  images pre-uploaded to IPFS
const hasBaseUri = false;
const baseUri = "ipfs://cid-here";
// Optional, is image filename case sensitive? 
// Default: false, meaning your file name will be capitalized e.g. "Awesome" instead of "awesome"
const isLayerNameFileNameAsIs = false;

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 33,
    layersOrder: [
      { name: "GenArtSeries", options: { blend: MODE.exclusion, opacity: 0.0 } },
      { name: "Vest", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Pants", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Mask", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Helmet", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Hair", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Eyes", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Eyebrows", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Boots", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Body", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Boardrider", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Beard", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Noise", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Accessories", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Background", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Background_P" },
      { name: "Body_N" },
      { name: "Accessories_N" },
      { name: "Mask_N" },
      { name: "Glasses_N" },
    ],
  },
];

const startEditionFrom = startCountFrom;

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
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
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  creator: "LTL",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
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
