const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Degen Vibes";
const description = "Electrifying journey into the world of Degen Vibes";
const startCountFrom = 0;
// Optional, change hasBaseUri to true if your  images pre-uploaded to IPFS
const hasBaseUri = false;
const baseUri = "ipfs://cid-here";
// Optional, is image filename case sensitive? 
// Default: false, meaning your file name will be capitalized e.g. "Awesome" instead of "awesome"
const isLayerNameFileNameAsIs = false;

const solanaMetadata = {
  symbol: "LTL",
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
      { name: "Community", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Activities", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Photography", options: { blend: MODE.difference, opacity: 0.0 } },
      { name: "Location", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Lifestyle", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Filmgrain", options: { blend: MODE.multiply, opacity: 0.1 } },
      { name: "Colorgrade", options: { blend: MODE.multiply, opacity: 0.0 } },
      { name: "Texture" },
      { name: "Merch" },
      { name: "Logo" },
      { name: "Media" },
      { name: "Nouns" },
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
