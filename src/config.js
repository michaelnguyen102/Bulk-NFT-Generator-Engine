const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Bitverse";
const description = "Collection of BitHeroes";
const baseUri = "ipfs://NewUriToReplace";

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
    growEditionSizeTo: 20, //Common male
    layersOrder: [
      { name: "Background_Common" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair" },
    ],
  },
  {
    growEditionSizeTo: 20, //Common female
    layersOrder: [
      { name: "Background_Common" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair_Female" },
    ],
  },
  {
    growEditionSizeTo: 20, //Rare male 
    layersOrder: [
      { name: "Background_Rare" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair" },
      { name: "Outfit" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 20, //Rare female 
    layersOrder: [
      { name: "Background_Rare" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair_Female" },
      { name: "Outfit" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 20, //Epic male 
    layersOrder: [
      { name: "Background_Epic" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair" },
      { name: "Outfit" },
      { name: "Hat" },
      { name: "Mouth" },
      { name: "Halo" },
    ],
  },
  {
    growEditionSizeTo: 20, //Epic female 
    layersOrder: [
      { name: "Background_Epic" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair_Female" },
      { name: "Outfit" },
      { name: "Hat" },
      { name: "Mouth" },
      { name: "Halo" },
    ],
  },
  {
    growEditionSizeTo: 20, //Legendary male 
    layersOrder: [
      { name: "Background_Legendary" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair" },
      { name: "Outfit" },
      { name: "Hat" },
      { name: "Mouth" },
      { name: "Halo" },
      { name: "Horn" }, 
    ],
  },
  {
    growEditionSizeTo: 20, //Legendary female 
    layersOrder: [
      { name: "Background_Legendary" },
      { name: "Skin color" },
      { name: "Eye color" },
      { name: "Hair_Female" },
      { name: "Outfit" },
      { name: "Hat" },
      { name: "Mouth" },
      { name: "Halo" },
      { name: "Horn" }, 
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
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
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

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
  preview_gif,
};
